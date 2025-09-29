import { FC, useState } from 'react';
import css from './FriendCard.module.scss'
import ConfirmDeleteModal from '../ConfirmDeleteModal/ConfirmDeleteModal';
import { useDeleteFriendMutation, useUpdateFriendMutation } from '../../features/friendsApi';

interface FriendI {  
  id: string;
  // photo: string;
  name: string;
  birthYear: string;
  workplace: string;
  phone: string;
}

interface FriendCardProps {
  data: FriendI;
}

const FriendCard: FC<FriendCardProps> = ({data}) => {

  const [isEditing, setIsEditing] = useState<boolean>(false)// состояние кнопки "Редактировать"
  const [showDeleteModal, setShowDeletModal] = useState<boolean>(false)// состояние модального окна "Удалить"
  const [form, setForm] = useState<FriendI>(data)// состояние входных данных Друга
  const [deleteFriend] = useDeleteFriendMutation()
  const [updateFriend] = useUpdateFriendMutation()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleAccept = () => {
    updateFriend({id: data.id, data: form})
    setIsEditing(false)
  };

  const handleCancel = () => {
    setForm(data)
    setIsEditing(false)
  };

  const handleDelete = async () => {
    await deleteFriend(data.id)
    setShowDeletModal(false)
  }

  return (
    <div className={css.friendCard}>

      {/* блок с фото */}
      {/* <div className={css.photoBlock}>
        <img src={form.photo} alt="avatar" className={css.avatar} />
        {isEditing && (
          <div className={css.overlay} onClick={() => alert('Заменить фото')}>
            <span>+</span>
          </div>
        )}
      </div> */}

      {/* основной блок */}
      <div className={css.infoBlock}>
        {isEditing ? (
          <>
            <input name="name" value={form.name} onChange={handleChange} />
            <input name="birthYear" value={form.birthYear} onChange={handleChange} />
            <input name="workplace" value={form.workplace} onChange={handleChange} />
            <input name="phone" value={form.phone} onChange={handleChange} />
            <div className={css.buttons}>
              <button onClick={handleAccept}>Принять</button>
              <button onClick={handleCancel}>Отменить</button>
            </div>
          </>
        ) : (
          <>
            <p>{form.name}</p>
            <p>{form.birthYear}</p>
            <p>{form.workplace}</p>
            <p>{form.phone}</p>
            <div className={css.buttons}>
              <button onClick={() => setIsEditing(true)}>Редактировать</button>
              <button onClick={() => setShowDeletModal(true)}>Удалить</button>
            </div>
          </>
        )}
      </div>

      {showDeleteModal &&
        <ConfirmDeleteModal 
          onConfirm={handleDelete} 
          onCancel={() => setShowDeletModal(false)}/>
      }
      
    </div>
  );
}

export default FriendCard;