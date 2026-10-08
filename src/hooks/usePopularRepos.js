import { useCallback } from 'react';
import useAsync from '@/hooks/useAsync';
import { fetchPopularRepos } from '@/queries/popularRepos';

export default function usePopularRepos(username) {
  return useAsync(useCallback(() => fetchPopularRepos(username), [username]));
}
