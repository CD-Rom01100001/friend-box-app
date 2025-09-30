import { FC } from 'react';
import { createPortal } from 'react-dom';
import { useTimer } from '../../hooks/useTimer';
import css from './ConfirmDeleteModal.module.scss'

interface ConfirmDeleteModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDeleteModal: FC<ConfirmDeleteModalProps> = ({onConfirm, onCancel}) => {

  const timeAgo = useTimer(10, onCancel)

  return createPortal(
    <div className={css.overlay}>
      <div className={css.confirmDeleteModal} onClick={e => e.stopPropagation()}>
        <h3>Вы действительно хотите удалить друга?</h3>
         <div className={css.buttons}>
          <button onClick={onConfirm}>Да</button>
          <button onClick={onCancel}>Нет</button>
        </div>
        <p>Окно закроется через {timeAgo} сек.</p>
      </div>
    </div>,
    document.body
  );
}

export default ConfirmDeleteModal;