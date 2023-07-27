import { GeoSearchResult } from '@/components/location-search';
import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const useIPPlace = () => {
  const [IPPlace, setIPPlace] = useState<GeoSearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchLocationFromIp = useCallback(async () => {
    try {
      const res = await fetch('https://ipapi.co/json');
      const data = await res.json();
      const geoResponse = await axios.get<GeoSearchResult[]>('api/geocoding/search', {
        params: { q: data.city },
      });
      if (geoResponse.data.length > 0) {
        setIPPlace(geoResponse.data[0]);
        setError(null);
      } else {
        setError('Error finding your location. You can search for a location above.');
      }
    } catch (error) {
      setError('Error finding your location. You can search for a location above.');
    }
  }, []);

  useEffect(() => {
    fetchLocationFromIp();
  }, [fetchLocationFromIp]);

  const resetError = () => {
    setError(null);
  };

  return { IPPlace, error, resetError };
};

export default useIPPlace;
