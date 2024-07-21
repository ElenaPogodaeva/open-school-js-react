import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import cartIcon from '@/shared/assets/images/cart-icon.svg';
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';
import { calcTotal } from '@/entities/cart/model/cartSlice';
import { useAuth } from '@/shared/lib/useAuth';
import style from './Header.module.scss';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { cart } = useAppSelector((state) => state.cart);

  const { user } = useAuth();

  const cartNotEmpty = cart && cart.totalQuantity > 0;

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (cart) {
      dispatch(calcTotal());
    }
  }, [cart]);

  return (
    <header className={style.header}>
      <div className="container">
        <div className={style.headerContainer}>
          <NavLink to="/" className="logo">
            Goods4you
          </NavLink>
          {user && (
            <div>
              <button
                type="button"
                className={style.menuIcon}
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
                aria-hidden="true"
              />
              <nav className={`${style.headerMenu} ${isMenuOpen ? style.active : ''}`}>
                <button
                  type="button"
                  className={style.closeIcon}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                  aria-hidden="true"
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
                      {cartNotEmpty && (
                        <div className={style.cartCounter}>{cart.totalQuantity}</div>
                      )}
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/" className="menu-link">
                      {`${user.firstName} ${user.lastName}`}
                    </NavLink>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
