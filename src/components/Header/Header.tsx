import { FC } from 'react';
import css from './Header.module.scss'
import { paths } from '../../routes/paths';
import { Link, NavLink } from 'react-router-dom';

const active = ({isActive}: {isActive: boolean}) => isActive ? `${css.active}` : ''

const Header: FC = () => {

  return (
    <header className={css.header}>
      <Link to={paths.home} className={css.logo}>
        <h1>Friend-Box</h1>
      </Link>
      <nav className={css.nav}>
        <NavLink to={paths.home} className={active}>Home</NavLink>
        <NavLink to={paths.data} className={active}>Friends</NavLink>
      </nav>
    </header>
  );
}

export default Header;