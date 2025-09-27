import { FC, useState } from 'react';
import css from './AddFriendModal.module.scss'

interface AddFriendModalProps {
  onClose: () => void;
}

type formType = {
  photo: string;
  name: string;
  birthYear: string;
  workplace: string;
  phone: string;
}

const formFriend = {
  photo: '',
  name: '',
  birthYear: '',
  workplace: '',
  phone: ''
}

const AddFriendModal: FC<AddFriendModalProps> = ({onClose}) => {
  
  const [form, setForm] = useState<formType>(formFriend) 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleAdd = () => {
    console.log('add friend')
    onClose()
  }

  const handleExit = () => {
    setForm(formFriend)
    onClose()
  }

  return (
    <div className={css.overlay} onClick={onClose}>
      <div className={css.modal} onClick={e => e.stopPropagation()}>
        <h3>Добавьте друга</h3>
        <input type="file" name='photo'/>
        <input type="text" name='name' placeholder='ФИО' onChange={handleChange}/>
        <input type="number" name='birthYear' placeholder='Год рождения' onChange={handleChange}/>
        <input type="text" name='workplace' placeholder='Место работы/учёбы' onChange={handleChange}/>
        <input type="tel" name='phone' placeholder='Телефон' onChange={handleChange}/>

        <div className={css.buttons}>
          <button onClick={handleAdd}>Добавить</button>
          <button onClick={handleExit}>Выход</button>
        </div>
      </div>
    </div>
  );
}

export default AddFriendModal;