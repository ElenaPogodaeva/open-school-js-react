import { Outlet } from 'react-router-dom';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { useAppDispatch } from '@/shared/lib/hooks';
import { useEffect } from 'react';
import { USER_ID } from '@/shared/config';
import { fetchCarts } from '@/entities/cart';
import style from './Layout.module.scss';

export function Layout() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCarts(USER_ID));
  }, []);

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
