import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import style from './Layout.module.scss';
import Footer from '../Footer/Footer';

export function Layout() {
  return (
    <div className={style.wrapper}>
      <Header />
      <main className={style.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
