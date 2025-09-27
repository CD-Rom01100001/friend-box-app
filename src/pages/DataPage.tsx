import { FC, useState } from 'react';
import css from './DataPage.module.scss'
import AddFriendModal from '../components/AddFriendModal/AddFriendModal';
import FriendCard from '../components/FriendCard/FriendCard';

const DataPage: FC = () => {

  const [showModal, setShowModal] = useState<boolean>(false)

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
        <AddFriendModal onClose={()=>setShowModal(false)}/>
      }
    </div>
  );
}

export default DataPage;