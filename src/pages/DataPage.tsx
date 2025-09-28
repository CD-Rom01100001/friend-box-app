import { FC, useState } from 'react';
import css from './DataPage.module.scss'
import AddFriendModal, { type FormType } from '../components/AddFriendModal/AddFriendModal';
import { useAddFriendMutation } from '../features/friendsApi';

const DataPage: FC = () => {

  const [showModal, setShowModal] = useState<boolean>(false)
  const [addFriend] = useAddFriendMutation()

  const handleAddFriend = async (friend: FormType) => {
    await addFriend(friend).unwrap() // показывает ошибку при неудаче
  }

  return (
    <div className={css.dataPage}>
      <button className={css.btnAddFriend} onClick={()=>setShowModal(true)}>
        Add a Friend
      </button>

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