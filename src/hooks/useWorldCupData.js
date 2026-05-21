import { useEffect, useState } from 'react';
import { fetchWorldCupData } from '../services/gemini.js';

export function useWorldCupData() {
  const [matches, setMatches] = useState([]);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetchWorldCupData()
      .then((data) => {
        if (cancelled) return;
        setMatches(data.matches || []);
        setNews(data.news || []);
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  return { matches, news, loading, error };
}
