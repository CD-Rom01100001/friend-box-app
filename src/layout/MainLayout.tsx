import { FC } from 'react';
import css from './MainLayout.module.scss'
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';

const MainLayout: FC = () => {

  return (
    <div className={css.mainLayout}>
      <Header/>
      <div className={css.mainWrapper}>
        <Sidebar/>
        <Content/>
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;