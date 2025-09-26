import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import css from './Content.module.scss'

const Content: FC = () => {

  return (
    <main className={css.content}>
      <h2>Content</h2>
      <Outlet/>
    </main>
  );
}

export default Content;