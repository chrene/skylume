import { getShortDate } from '@/util/date-funcs';
import Image from 'next/image';

type WeatherCardProps = {
  date: string;
  temperature: number;
  weatherIconName: string;
  weekday: string;
};

const WeatherCard = ({ date, temperature, weatherIconName, weekday }: WeatherCardProps) => {
  return (
    <div className="flex gap-3 mt-3">
      <div className="grid grid-cols-12 w-full items-center">
        <div className="flex flex-col gap-1 col-span-6">
          <div className="text-black">{weekday}</div>
          <div className="text-black/70 text-sm">{getShortDate(date)}</div>
        </div>
        <div className="text-black text-base col-span-3">{temperature}°</div>
        <div className="justify-self-end col-span-3">
          <Image
            src={`/icons/weather/animated/${weatherIconName}.svg`}
            width={72}
            height={72}
            alt={weatherIconName}
          />
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
