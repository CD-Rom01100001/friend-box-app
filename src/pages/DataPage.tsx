import { FC, useState } from 'react';
import css from './DataPage.module.scss'
import AddFriendModal from '../components/AddFriendModal/AddFriendModal';

const DataPage: FC = () => {

  const [showModal, setShowModal] = useState<boolean>(false)

  return (
    <div className={css.dataPage}>
      <button className={css.btnAddFriend} onClick={()=>setShowModal(true)}>
        Add a Friend
      </button>

      {showModal &&
        <AddFriendModal onClose={()=>setShowModal(false)}/>
      }
    </div>
  );
}

export default DataPage;