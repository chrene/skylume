import { getShortDate } from '@/util/date-funcs';
import { mapWeatherCodeToIconName } from '@/util/map-weather-interpretation';
import Image from 'next/image';

type WeatherCardProps = {
  date: string;
  temperature: number;
  weatherCode: number;
  weekday: string;
};

const WeatherCard = ({ date, temperature, weatherCode, weekday }: WeatherCardProps) => {
  const weatherIconName = mapWeatherCodeToIconName(weatherCode, 'day');

  return (
    <div className="flex xl:gap-3 xl:mt-3 border-b border-b-sky-900/10">
      <div className="grid grid-cols-12 w-full items-center">
        <div className="flex flex-col gap-1 col-span-6">
          <div className="text-sky-900/80">{weekday}</div>
          <div className="text-sky-900/30 text-sm hidden xl:block">{getShortDate(date)}</div>
        </div>
        <div className="col-span-3">
          <Image
            className="w-16 h-16 -my-1 xl:my-0"
            src={`/icons/weather/animated/${weatherIconName}.svg`}
            width={72}
            height={72}
            alt={weatherIconName}
          />
        </div>
        <div className="text-sky-900 text-base col-span-3 justify-self-end">{temperature}°</div>
      </div>
    </div>
  );
};

export default WeatherCard;
