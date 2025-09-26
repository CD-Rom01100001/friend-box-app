import { FC } from 'react';
import css from './WelcomePage.module.scss'

const WelcomePage: FC = () => {

  return (
    <div className={css.welcomePage}>
      <h2>Welcome</h2>
      {Array.from({ length: 10 }).map((_, i) => {
        return (
          <div key={i} className={css.block}>Контент</div>
        )
      })}
    </div>
  );
}

export default WelcomePage;