import { createContext, useCallback, useContext, useMemo } from 'react';
import useAsync from '@/hooks/useAsync';
import { fetchUser } from '@/queries/user';
import { USERNAME } from '@/utils/constants';

const ProfileContext = createContext(null);

export function ProfileProvider({ children }) {
  const { data: user, loading, error } = useAsync(useCallback(() => fetchUser(USERNAME), []));
  const value = useMemo(() => ({ user, loading, error }), [user, loading, error]);
  return <ProfileContext.Provider value={value}>{children}</ProfileContext.Provider>;
}

export const useProfile = () => useContext(ProfileContext);
