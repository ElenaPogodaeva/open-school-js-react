import { useMemo } from 'react';

import { useAppSelector } from './hooks';

export const useAuth = () => {
  const { user, token } = useAppSelector((state) => state.user);

  return useMemo(() => ({ user, token }), [user, token]);
};
