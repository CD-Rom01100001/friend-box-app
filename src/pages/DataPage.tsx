import { FC, useState } from 'react';
import AddFriendModal, { FormType } from '../components/AddFriendModal/AddFriendModal';
import FriendCard from '../components/FriendCard/FriendCard';
import { useAddFriendMutation } from '../features/friendsApi';
import css from './DataPage.module.scss'

const DataPage: FC = () => {

  const [showModal, setShowModal] = useState<boolean>(false)
  const [addFriend] = useAddFriendMutation()

  const handleAddFriend = async (friend: FormType) => {
    await addFriend(friend)
  }

  return (
    <div className={css.dataPage}>
      <button className={css.btnAddFriend} onClick={()=>setShowModal(true)}>
        Add a Friend
      </button>

      <FriendCard data={{  
        id: '1',
        photo: 'C:\\Users\\mrala\\Downloads\\avatarRom.jpeg',
        name: 'Roman',
        birthYear: '01.01.2025',
        workplace: 'frontend',
        phone: '88888888888',
      }}/>

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