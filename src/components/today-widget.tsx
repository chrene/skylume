'use client';
import { useGeo } from '@/contexts/geo';
import { useWeather } from '@/contexts/weather';
import { getHour } from '@/util/date-funcs';
import {
  mapWeatherCodeToIconName,
  mapWeatherInterpretation,
} from '@/util/map-weather-interpretation';
import Image from 'next/image';
import Icon from './icon';

export default function TodayWidget() {
  const { place } = useGeo();
  const { weather } = useWeather();
  const current = weather?.current;
  const hourly = weather?.hourly;

  return (
    <div className="bg-sky-800 p-6 rounded-2xl w-full">
      <div className="flex justify-between items-center">
        <div className="text-white flex gap-2 items-leading">
          <Icon name="map-pin" />
          <div className="text-lg font-medium text-white">{place?.name ?? '--'}</div>
        </div>

        <div className="text-white">
          Today{' '}
          <span>
            {current
              ? new Intl.DateTimeFormat('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: true,
                }).format(new Date(current.time))
              : '--'}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-8">
        <div className="flex flex-col gap-2">
          <div className="text-white text-7xl font-light">
            {current ? `${Math.floor(Number(current?.temperature))}°` : '--'}
          </div>
          <div className="text-white text-sm">
            {current ? mapWeatherInterpretation(current?.weathercode) : '--'}
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <div className="text-white text-sm">Wind</div>
            <div className="text-white text-sm">{current ? current.windspeed : '--'} km/h</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 mt-8">
        <div className="flex gap-4 overflow-auto">
          {current && (
            <div
              key={current.time}
              className="flex flex-col shrink-0 gap-1 items-center bg-sky-300/30 p-2 rounded-xl"
            >
              <div className="text-white text-sm">{getHour(current.time)}</div>
              <Image
                src={`/icons/weather/animated/${mapWeatherCodeToIconName(current.weathercode)}.svg`}
                width={48}
                height={48}
                alt={mapWeatherCodeToIconName(current.weathercode)}
              />
              <div className="text-white text-sm">{current.temperature}°</div>
            </div>
          )}

          {hourly
            ?.filter(({ time }) => new Date(time) >= new Date())
            .slice(0, 24)
            .map(({ time, temperature_2m, weathercode }) => (
              <div key={time} className="flex flex-col shrink-0 gap-1 items-center p-2 rounded-xl">
                <div className="text-white text-sm">{getHour(time)}</div>
                <Image
                  src={`/icons/weather/animated/${mapWeatherCodeToIconName(weathercode)}.svg`}
                  width={48}
                  height={48}
                  alt={mapWeatherCodeToIconName(weathercode)}
                />
                <div className="text-white text-sm">{temperature_2m}°</div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
