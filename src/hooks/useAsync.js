import { useEffect, useState } from 'react';

const INITIAL = { data: null, loading: true, error: null };

/** Runs `asyncFn` (must be referentially stable, e.g. via useCallback) and tracks its state. */
export default function useAsync(asyncFn) {
  const [state, setState] = useState(INITIAL);
  useEffect(() => {
    let active = true;
    setState(INITIAL);
    asyncFn()
      .then((data) => active && setState({ data, loading: false, error: null }))
      .catch((error) => active && setState({ data: null, loading: false, error }));
    return () => { active = false; };
  }, [asyncFn]);
  return state;
}
