import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import cartIcon from '@/shared/assets/images/cart-icon.svg';
import { useAppSelector } from '@/shared/lib/hooks';
import style from './Header.module.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cart } = useAppSelector((state) => state.cart);

  const cartNotEmpty = cart && cart.totalQuantity > 0;

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerContainer}>
          <NavLink to="/" className="logo">
            Goods4you
          </NavLink>
          <button
            type="button"
            aria-label="Close"
            className={style.menuIcon}
            onClick={() => setIsMenuOpen(true)}
          />
          <nav className={`${style.headerMenu} ${isMenuOpen ? style.active : ''}`}>
            <button
              type="button"
              aria-label="Menu"
              className={style.closeIcon}
              onClick={() => setIsMenuOpen(false)}
            />
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
                <NavLink to="/cart" className={`menu-link ${style.cartLink}`}>
                  Cart
                  <img src={cartIcon} alt="Cart Icon" />
                  {cartNotEmpty && <div className={style.cartCounter}>{cart.totalQuantity}</div>}
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
