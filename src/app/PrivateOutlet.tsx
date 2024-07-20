import { fetchCarts } from '@/entities/cart';
import { useAppDispatch } from '@/shared/lib/hooks';
import { useAuth } from '@/shared/lib/useAuth';
import { useEffect } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

export function PrivateOutlet() {
  const { user, token } = useAuth();
  const location = useLocation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user) {
      dispatch(fetchCarts({ id: user?.id, token: token! }));
    }
  }, [user]);

  return user ? <Outlet /> : <Navigate to="/login" state={{ from: location }} />;
}
