'use client';
import { createContext, useContext, useState } from 'react';

export interface GeoPlace {
  latitude: number;
  longitude: number;
  name: string;
}

type GeoContextType = {
  place: GeoPlace | null;
  setPlace: (geo: GeoPlace) => void;
};

export const GeoContext = createContext<GeoContextType>({
  place: null,
  setPlace: () => {},
});

type GeoProviderProps = {
  children: React.ReactNode;
};

export const GeoContextProvider = ({ children }: GeoProviderProps) => {
  const [place, setPlace] = useState<GeoPlace | null>(null);
  return <GeoContext.Provider value={{ place, setPlace }}>{children}</GeoContext.Provider>;
};

export const useGeo = () => {
  return useContext(GeoContext);
};
