'use client';

import ForecastWidget from '@/components/forecast-widget';
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
    <div className="container px-8 md:px-16 xl:px-48 mx-auto py-8 space-y-8">
      <Header />
      <div className="grid grid-cols-12 xl:space-x-12 gap-8 xl:gap-0">
        <main className="flex xl:min-h-screen flex-col items-center xl:space-y-16 col-span-12 xl:col-span-7">
          <TodayWidget />
          {error && <div className="text-red-500">{error}</div>}
        </main>
        <aside className="col-span-12 xl:col-span-5 xl:border-l xl:border-gray-200 xl:pl-12">
          <ForecastWidget />
        </aside>
      </div>
    </div>
  );
}
