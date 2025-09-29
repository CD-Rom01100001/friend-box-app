import { FC, useState } from 'react';
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from 'simplebar-react';
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import Content from '../components/Content/Content';
import Footer from '../components/Footer/Footer';
import css from './MainLayout.module.scss'

const MainLayout: FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className={css.mainLayout}>
      <Header/>
      <div className={css.mainWrapper}>

        <div className={`${css.sidebarWrapper} ${isSidebarOpen ? css.show : ''}`}>
          <SimpleBar style={{ height: '100%' }}>
            <Sidebar/>
          </SimpleBar>

          <button 
            className={`${css.toggleBtn} ${isSidebarOpen ? css.open : ''}`}
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? '<<' : '>>'}
          </button>
        </div>

        <SimpleBar style={{ height: '100%', width: '100%'}}>
          <Content/>
        </SimpleBar>
      </div>
      <Footer/>
    </div>
  );
}

export default MainLayout;
