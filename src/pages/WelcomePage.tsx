import { FC } from 'react';
import { Link } from 'react-router-dom';
import css from './WelcomePage.module.scss'

const WelcomePage: FC = () => {

  return (
    <div className={css.welcomePage}>
      <div className={css.content}>
        <h1 className={css.title}>FriendBox</h1>
        <p className={css.subtitle}>
          Удобный способ хранить и управлять контактами друзей.  
          Добавляй, редактируй и удаляй записи в пару кликов — всё хранится в облаке.
        </p>
        <Link to="/data" className={css.startBtn}>
          Начать
        </Link>
      </div>
    </div>
  );
}

export default WelcomePage;