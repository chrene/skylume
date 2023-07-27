'use client';
import { createContext, useCallback, useContext, useState } from 'react';

export interface DailyForecast {
  temperature_2m_max: number;
  temperature_2m_min: number;
  time: string;
  weathercode: number;
  weekday: string;
}

export interface HourlyForecast {
  temperature_2m: number;
  time: string;
  weathercode: number;
  weekday: string;
}

export interface Weather {
  current: {
    is_day: number;
    temperature: number;
    time: string;
    weathercode: number;
    winddirection: number;
    windspeed: number;
  };
  hourly: Array<HourlyForecast>;
  daily: Array<DailyForecast>;
}

type WeatherContextType = {
  weather: Weather | null;
  fetchWeather: (lat: number, lng: number) => void;
  isFetching: boolean;
};

const defaultWeatherContext: WeatherContextType = {
  weather: null,
  fetchWeather: () => {},
  isFetching: false,
};

export const WeatherContext = createContext<WeatherContextType>(defaultWeatherContext);

type WeatherProviderProps = {
  children: React.ReactNode;
};

export const WeatherContextProvider = ({ children }: WeatherProviderProps) => {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [isFetching, setIsFetching] = useState<boolean>(false);

  const fetchWeather = useCallback(async (lat: number, lng: number) => {
    setIsFetching(true);
    const res = await fetch(`/api/weather?lat=${lat}&lon=${lng}`);
    const data = await res.json();
    setWeather(data);
    setIsFetching(false);
  }, []);

  return (
    <WeatherContext.Provider value={{ weather, fetchWeather, isFetching }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  return useContext(WeatherContext);
};
