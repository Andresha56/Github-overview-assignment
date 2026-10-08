const store = new Map();

/** Caches the promise per key so repeated/concurrent calls share one request. */
export function cached(key, fetcher) {
  if (!store.has(key)) {
    store.set(key, fetcher().catch((err) => { store.delete(key); throw err; }));
  }
  return store.get(key);
}
