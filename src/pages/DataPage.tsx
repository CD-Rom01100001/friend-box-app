import { FC, useState } from 'react';
import AddFriendModal, { FormType } from '../components/AddFriendModal/AddFriendModal';
import FriendCard from '../components/FriendCard/FriendCard';
import { useAddFriendMutation, useGetFriendsQuery } from '../features/friendsApi';
import css from './DataPage.module.scss'

const DataPage: FC = () => {

  const [showModal, setShowModal] = useState<boolean>(false)
  const [addFriend] = useAddFriendMutation()
  const { data: friends = [], isLoading } = useGetFriendsQuery();

  const handleAddFriend = async (friend: FormType) => {
    await addFriend(friend)
  }

  return (
    <div className={css.dataPage}>
      <button className={css.btnAddFriend} onClick={()=>setShowModal(true)}>
        Add a Friend
      </button>

      {isLoading 
        ? 
        <p>Загрузка...</p>
        : 
        <div className={css.cards}>
          {friends.map((friend) => (
            <FriendCard key={friend.id} data={friend} />
          ))}
        </div>
      }

      {showModal &&
        <AddFriendModal 
          onClose={()=>setShowModal(false)}
          onAdd={handleAddFriend} 
        />
      }
    </div>
  );
}

export default DataPage;