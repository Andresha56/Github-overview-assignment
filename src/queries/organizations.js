import { getJson } from '@/queries/client';
import { cached } from '@/utils/cache';
import { GITHUB_API } from '@/utils/constants';

export const fetchOrganizations = (username) =>
  cached(`orgs:${username}`, () =>
    getJson(`${GITHUB_API}/users/${username}/orgs`)
  );
