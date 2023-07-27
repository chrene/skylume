import { GeoSearchResult } from '@/components/location-search';
import axios from 'axios';
import { useEffect, useState } from 'react';

const useGeoSearch = (value: string) => {
  const [data, setData] = useState<GeoSearchResult[]>([]);

  useEffect(() => {
    let debounceTimeout: NodeJS.Timeout;

    if (value.length > 0) {
      debounceTimeout = setTimeout(() => {
        axios
          .get<GeoSearchResult[]>('api/geocoding/search', { params: { q: value } })
          .then((res) => {
            setData(res.data);
          });
      }, 250);
    }

    return () => {
      clearTimeout(debounceTimeout);
    };
  }, [value]);

  return data;
};

export default useGeoSearch;
