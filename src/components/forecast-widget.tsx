import { useWeather } from '@/contexts/weather';
import { mapWeatherCodeToIconName } from '@/util/map-weather-interpretation';
import WeatherCard from './weather-card';

export default function ForecastWidget() {
  const { weather } = useWeather();
  const { daily } = weather || {};
  return (
    <div className="bg-sky-50 px-12 py-4 xl:px-6 xl:py-3 rounded-xl">
      {daily?.map(({ temperature_2m_max, weatherCode, time, weekday }) => (
        <WeatherCard
          key={time}
          date={time}
          weekday={weekday}
          temperature={temperature_2m_max}
          weatherCode={weatherCode}
        />
      ))}
    </div>
  );
}
