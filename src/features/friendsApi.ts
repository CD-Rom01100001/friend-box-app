/* 
* createApi — конструктор RTKQuery, создаёт "сервис" для работы с API (запросы, кэширование, хуки)
* fakeBaseQuery — специальный "фейковый" базовый запрос. Обычно RTK Query работает с REST API (через fetchBaseQuery). Но здесь используется Firebase Firestore, у которого нет REST-запросов в привычном виде. Поэтому берём "фейковый" базовый запрос и пишем свои функции вручную.
*/
import {createApi, fakeBaseQuery} from '@reduxjs/toolkit/query/react';
import {db} from '../firebase/firebase';
import { type FormType } from '../components/AddFriendModal/AddFriendModal';
import {
  collection,
  addDoc,
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
    })

  })
})

export const {
  useAddFriendMutation
} = friendsApi