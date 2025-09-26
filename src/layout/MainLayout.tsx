import { FC } from 'react';
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';
import css from './MainLayout.module.scss'

const MainLayout: FC = () => {

  return (
    <div className={css.mainLayout}>
      <Header/>
      <div className={css.mainWrapper}>
        <SimpleBar style={{ maxHeight: '100vh'}}>
          <Sidebar/>
        </SimpleBar>
        <SimpleBar style={{ maxHeight: '100vh', width: '100%'}}>
          <Content/>
        </SimpleBar>
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;