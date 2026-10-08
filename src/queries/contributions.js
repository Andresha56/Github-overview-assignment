import { getJson } from '@/queries/client';
import { cached } from '@/utils/cache';
import { CONTRIB_API, LATEST_YEAR } from '@/utils/constants';

export const fetchContributions = (username, year) =>
  cached(`contrib:${username}:${year}`, () =>
    getJson(
      `${CONTRIB_API}/${username}?y=${
        year === LATEST_YEAR ? 'last' : year
      }`
    )
  );
