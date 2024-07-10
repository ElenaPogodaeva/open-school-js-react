import { NavLink } from 'react-router-dom';
import style from './Footer.module.scss';

export function Footer() {
  return (
    <footer className={style.footer}>
      <div className="container">
        <div className={style.footerContainer}>
          <NavLink to="/" className="logo">
            Goods4you
          </NavLink>
          <nav>
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
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
