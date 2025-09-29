/* 
* createApi — конструктор RTKQuery, создаёт "сервис" для работы с API (запросы, кэширование, хуки)
* fakeBaseQuery — специальный "фейковый" базовый запрос. Обычно RTK Query работает с REST API (через fetchBaseQuery). Но здесь используется Firebase Firestore, у которого нет REST-запросов в привычном виде. Поэтому берём "фейковый" базовый запрос и пишем свои функции вручную.
*/
import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';
import {db} from '../firebase/firebase';
import { FormTypeFB, FormType } from '../components/AddFriendModal/AddFriendModal';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc
} from 'firebase/firestore';

export const friendsApi = createApi({
  reducerPath: 'friendsApi',// имя слайса
  baseQuery: fakeBaseQuery(),// указываем fakeBaseQuery, потому что мы не используем HTTP-запросы
  tagTypes: ['Friend'],// тег которым помечаем кэшированные данные
  /* для работы с CRUD */
  endpoints: (builder) => ({

    addFriend: builder.mutation<void, FormType>({
      async queryFn(friend) {
        try {
          /* addDoc(...) — функция Firebase Firestore, которая добавляет новый документ в коллекцию и автоматически генерирует id для него. */
          await addDoc(collection(db, 'friends'), friend) 
          return {data: undefined}
        } catch (error) {
          return {error}
        }
      },
      /* когда мы изменяем друзей (например, добавляем или удаляем в другой mutation), мы можем вызвать invalidatesTags: ['Friend'], тогда RTK Query автоматически обновит кэш и перезапросит список друзей. */
      invalidatesTags: ['Friend']
    }),

    getFriends: builder.query<FormTypeFB[], void>({
      async queryFn() {
        try {
          const snapshot  = await getDocs(collection(db, 'friends'))
          const data: FormTypeFB[] = snapshot.docs.map((doc) => {
            return {id: doc.id, ...(doc.data() as FormType)}
          })
          return {data}
        } catch (error) {
          return {error}
        }
      },
      providesTags: ['Friend']
    }),

    deleteFriend: builder.mutation<FormType, string>({
      async queryFn(id) {
        try {
          await deleteDoc(doc(db, 'friends', id));
          return { data: undefined };
        } catch (error) {
          return { error };
        }
      },
      invalidatesTags: ['Friend'],
    }),

  })
})

export const {
  useAddFriendMutation,
  useGetFriendsQuery,
  useDeleteFriendMutation,
} = friendsApi