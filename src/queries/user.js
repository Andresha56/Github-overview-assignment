import { getJson } from '@/queries/client';
import { cached } from '@/utils/cache';
import { GITHUB_API } from '@/utils/constants';

export const fetchUser = (username) =>
  cached(`user:${username}`, () =>
    getJson(`${GITHUB_API}/users/${username}`)
  );
