import { useWeather } from '@/contexts/weather';
import { mapWeatherCodeToIconName } from '@/util/map-weather-interpretation';
import WeatherCard from './weather-card';

export default function ForecastWidget() {
  const { weather } = useWeather();
  const { daily } = weather || {};
  return (
    <div>
      {daily?.map(({ temperature_2m_max, weathercode, time, weekday }) => (
        <WeatherCard
          key={time}
          date={time}
          weekday={weekday}
          temperature={temperature_2m_max}
          weatherIconName={mapWeatherCodeToIconName(weathercode)}
        />
      ))}
    </div>
  );
}
