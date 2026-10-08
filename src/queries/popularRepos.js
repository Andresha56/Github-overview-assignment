import { getJson } from '@/queries/client';
import { cached } from '@/utils/cache';
import { GITHUB_GRAPHQL, GITHUB_TOKEN } from '@/utils/constants';

const POPULAR_REPOS_QUERY = `
  fragment RepoFields on Repository {
    id
    name
    url
    description
    isPrivate
    primaryLanguage {
      name
      color
    }
    parent {
      nameWithOwner
    }
  }

  query ($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ...RepoFields
        }
      }
      repositories(
        first: 6
        ownerAffiliations: OWNER
        privacy: PUBLIC
        orderBy: { field: STARGAZERS, direction: DESC }
      ) {
        nodes {
          ...RepoFields
        }
      }
    }
  }
`;

/** Pinned repos when the user has any; otherwise falls back to their top repos. */
export const fetchPopularRepos = (username) =>
  cached(`popular:${username}`, async () => {
    if (!GITHUB_TOKEN) {
      throw new Error('Missing VITE_GITHUB_TOKEN in .env');
    }

    const { data, errors } = await getJson(GITHUB_GRAPHQL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: POPULAR_REPOS_QUERY,
        variables: { login: username },
      }),
    });

    if (errors) {
      throw new Error(errors[0].message);
    }

    const { pinnedItems, repositories } = data.user;
    return pinnedItems.nodes.length ? pinnedItems.nodes : repositories.nodes;
  });
