import { FC } from 'react';
import css from './Content.module.scss'
import { Outlet } from 'react-router-dom';

const Content: FC = () => {

  return (
    <main className={css.content}>
      <h2>Content</h2>
      <Outlet/>
    </main>
  );
}

export default Content;