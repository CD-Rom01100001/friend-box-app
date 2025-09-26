import { FC } from 'react';
import css from './Header.module.scss'
import { paths } from '../../routes/paths';
import { Link } from 'react-router-dom';

const Header: FC = () => {

  return (
    <header className={css.header}>
      <Link to={paths.home} className={css.logo}>Friend-Box</Link>
      <nav className={css.nav}>
        <Link to={paths.home}>Home</Link>
        <Link to={paths.data}>Friends</Link>
      </nav>
    </header>
  );
}

export default Header;