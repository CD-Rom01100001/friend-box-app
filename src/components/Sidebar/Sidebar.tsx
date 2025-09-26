import { FC } from 'react';
import css from './Sidebar.module.scss'

const Sidebar: FC = () => {

  return (
    <aside className={css.sidebar}>
      <h2>Sidebar</h2>
    </aside>
  );
}

export default Sidebar;