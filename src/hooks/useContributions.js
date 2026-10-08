import { useCallback } from 'react';
import useAsync from '@/hooks/useAsync';
import { fetchContributions } from '@/queries/contributions';

export default function useContributions(username, year) {
  return useAsync(useCallback(() => fetchContributions(username, year), [username, year]));
}
