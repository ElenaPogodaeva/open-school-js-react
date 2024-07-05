import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';
import cartIcon from '../../assets/cart.svg';

export function Header() {
  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerContainer}>
          <NavLink to="/" className="logo">
            Goods4you
          </NavLink>
          <nav className={style.headerMenu}>
            <ul className="menu-list">
              <li>
                <NavLink to="/" className="menu-link">
                  Catalog
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="menu-link">
                  FAQ
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className={`menu-link ${style.cartLink}`}>
                  Cart
                  <img src={cartIcon} alt="Cart Icon" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/" className="menu-link">
                  Johnson Smith
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
