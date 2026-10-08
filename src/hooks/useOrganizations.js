import { useCallback } from 'react';
import useAsync from '@/hooks/useAsync';
import { fetchOrganizations } from '@/queries/organizations';

export default function useOrganizations(username) {
  return useAsync(useCallback(() => fetchOrganizations(username), [username]));
}
