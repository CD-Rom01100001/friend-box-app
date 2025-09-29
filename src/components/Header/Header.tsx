import { FC, useState, useEffect } from 'react';
import css from './Header.module.scss'
import { paths } from '../../routes/paths';
import { Link, NavLink } from 'react-router-dom';

const active = ({isActive}: {isActive: boolean}) => isActive ? `${css.active}` : ''

// const Header: FC = () => {

//   return (
//     <div className={css.headerWrapper}>
//       <header className={css.header}>
//         <Link to={paths.home} className={css.logo}>
//           <h1>Friend-Box</h1>
//         </Link>
//         <nav className={css.nav}>
//           <NavLink to={paths.home} className={active}>Главная</NavLink>
//           <NavLink to={paths.data} className={active}>Друзья</NavLink>
//         </nav>
//       </header>
//     </div>
//   );
// }

// export default Header;

const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // закрытие при клике вне меню
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${css.nav}`) && !target.closest(`.${css.burger}`)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const handleLinkClick = () => setIsMenuOpen(false);

  return (
    <div className={css.headerWrapper}>
      <header className={css.header}>
        <Link to={paths.home} className={css.logo}>
          <h1>Friend-Box</h1>
        </Link>

        {/* бургер */}
        <button
          className={`${css.burger} ${isMenuOpen ? css.open : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        {/* навигация */}
        <nav className={`${css.nav} ${isMenuOpen ? css.show : ''}`}>
          <NavLink to={paths.home} className={active} onClick={handleLinkClick}>
            Главная
          </NavLink>
          <NavLink to={paths.data} className={active} onClick={handleLinkClick}>
            Друзья
          </NavLink>
        </nav>
      </header>
    </div>
  );
};

export default Header;