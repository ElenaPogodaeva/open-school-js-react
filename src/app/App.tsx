import { Route, Routes } from 'react-router-dom';
import { Layout } from '@/pages/layout';
import { HomePage } from '@/pages/home';
import { ProductDetail } from '@/pages/product-detail';
import { CartPage } from '@/pages/cart';
import { NotFoundPage } from '@/pages/not-found';
import { useAppDispatch } from '@/shared/lib/hooks';
import { Login } from '@/pages/login';
import { useEffect } from 'react';
import { useGetCurrentUserQuery } from '@/entities/user/api';
import { setUser } from '@/entities/user/model/userSlice';
import { Loader } from '@/shared/ui';
import { PrivateOutlet } from './PrivateOutlet';

function App() {
  const { data: user, isLoading, isError } = useGetCurrentUserQuery();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) dispatch(setUser(user));
  }, [user, dispatch]);

  if (isLoading) return <Loader />;
  if (isError) return <p>Error occured</p>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<PrivateOutlet />}>
          <Route index element={<HomePage />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<CartPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
