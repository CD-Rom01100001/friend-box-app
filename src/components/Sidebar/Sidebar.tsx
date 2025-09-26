import { FC } from 'react';
import css from './Sidebar.module.scss'

const Sidebar: FC = () => {

  return (
    <aside className={css.sidebar}>
      <div className={css.blockWrapper}>
        {Array.from({ length: 10 }).map((_, i) => {
          return (
            <div key={i} className={css.block}>Контент</div>
          )
        })}
      </div>
    </aside>
  );
}

export default Sidebar;