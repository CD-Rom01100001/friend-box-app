import { FC } from 'react';
import css from './Header.module.scss'
import { paths } from '../../routes/paths';
import { Link } from 'react-router-dom';

const Header: FC = () => {

  return (
    <header className={css.header}>
      <h2>Header</h2>
      <nav>
        <Link to={paths.home}>Home</Link>
        <Link to={paths.data}>Friends</Link>
      </nav>
    </header>
  );
}

export default Header;