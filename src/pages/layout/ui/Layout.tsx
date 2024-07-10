import { Outlet } from 'react-router-dom';
import { Header } from '../../../widgets/header';
import style from './Layout.module.scss';
import { Footer } from '../../../widgets/footer';

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
