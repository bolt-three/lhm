import { useState, useEffect } from 'react';
import { fetchDimensions } from '../api';
import type { Dimension } from '../types';

export const useDimensions = () => {
  const [dimensions, setDimensions] = useState<Dimension[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const loadDimensions = async () => {
      try {
        setLoading(true);
        const data = await fetchDimensions();
        setDimensions(data);
      } catch (error) {
        setError(error instanceof Error ? error : new Error('Failed to load dimensions'));
      } finally {
        setLoading(false);
      }
    };

    loadDimensions();
  }, []);

  return { dimensions, loading, error };
};