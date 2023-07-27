'use client';

import ForecastWidget from '@/components/forecast-widget/forecast-widget';
import Header from '@/components/header';
import TodayWidget from '@/components/today-widget';
import { useGeo } from '@/contexts/geo';
import { useWeather } from '@/contexts/weather';
import useIPPlace from '@/hooks/use-ip-place';
import { useEffect } from 'react';

export default function Home() {
  const { fetchWeather } = useWeather();
  const { place, setPlace } = useGeo();
  const { IPPlace, error, resetError } = useIPPlace();

  useEffect(() => {
    if (!place && IPPlace?.latitude && IPPlace?.longitude) {
      setPlace(IPPlace);
      resetError();
    }
  }, [IPPlace, place, resetError, setPlace]);

  useEffect(() => {
    if (place?.latitude && place?.longitude) {
      fetchWeather(place.latitude, place.longitude);
    }
  }, [place, fetchWeather]);

  return (
    <div className="container lg:px-48 mx-auto py-8 space-y-8">
      <Header />
      <div className="grid grid-cols-12 space-x-16">
        <main className="flex min-h-screen flex-col items-center space-y-16 col-span-8">
          <TodayWidget />
          {error && <div className="text-red-500">{error}</div>}
        </main>
        <aside className="col-span-4 border-l border-gray-200 pl-16">
          <ForecastWidget />
        </aside>
      </div>
    </div>
  );
}
