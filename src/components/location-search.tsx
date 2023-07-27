import { useGeo } from '@/contexts/geo';
import useClickOutside from '@/hooks/use-click-outside';
import useGeoSearch from '@/hooks/use-geo-search';
import clsx from 'clsx';
import { useRef, useState } from 'react';

export interface GeoSearchResult {
  id: string;
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

type LocationSearchProps = {
  data: GeoSearchResult[];
  value: string;
  label?: string;
};

export default function LocationSearch(props: LocationSearchProps) {
  const { setPlace } = useGeo();
  const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
  const [value, setValue] = useState<string>(props.value);
  const data = useGeoSearch(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useClickOutside(inputRef, () => setShowSuggestions(false));

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setShowSuggestions(value.length > 0);
    setValue(value);
  };

  return (
    <div className="flex flex-col relative">
      <div className="flex flex-col">
        <input
          ref={inputRef}
          className="rounded-md p-2"
          type="text"
          value={value}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Search for a city"
          onChange={onChange}
        />
      </div>

      <ul
        className={clsx(
          'bg-white rounded-md p-2 z-10 absolute -bottom-2 left-0 w-full translate-y-full',
          {
            hidden: !showSuggestions,
          }
        )}
      >
        {data.length > 0 &&
          data.map((item) => (
            <div
              key={item.id}
              className="hover:bg-gray-100 p-2 cursor-pointer"
              data-id={item.id}
              onClick={() => {
                setValue(item.name);
                setPlace(item);
                setShowSuggestions(false);
              }}
            >
              <p>{item.name}</p>
              <p className="text-sm text-gray-500">
                {item.name}, {item.country}
              </p>
            </div>
          ))}
      </ul>
    </div>
  );
}
