import { getHumanReadableWeekday, isToday } from '@/util/date-funcs';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  if (req.method === 'GET') {
    const { lat, lon } = req.query;
    if (!lat || !lon) {
      return res.status(400).json({ message: 'Missing required query parameters' });
    }
    try {
      const result = await axios.get('https://api.open-meteo.com/v1/forecast', {
        params: {
          latitude: lat,
          longitude: lon,
          hourly: 'temperature_2m,weathercode',
          daily: 'weathercode,temperature_2m_max,temperature_2m_min',
          timezone: 'auto',
          forecast_days: 8,
          current_weather: true,
        },
      });

      return res.status(200).json({
        current: {
          ...result.data.current_weather,
          weatherCode: result.data.current_weather.weathercode,
        },
        daily: mapDailyData(result.data).filter((item) => !isToday(item.time)),
        hourly: mapHourlyData(result.data),
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  }

  return res.status(405).json({ message: 'Method Not Allowed' });
}

function mapDailyData(input: {
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    weathercode: number[];
  };
}) {
  const { time, temperature_2m_max, temperature_2m_min, weathercode } = input.daily;
  const minLength = Math.min(
    time.length,
    temperature_2m_max.length,
    temperature_2m_min.length,
    weathercode.length
  );
  const mappedData = [];
  for (let i = 0; i < minLength; ++i) {
    mappedData.push({
      temperature_2m_max: Math.floor(temperature_2m_max[i]),
      weatherCode: weathercode[i],
      time: time[i],
      weekday: getHumanReadableWeekday(time[i]),
    });
  }

  return mappedData;
}

function mapHourlyData(input: {
  hourly: {
    temperature_2m: number[];
    weathercode: number[];
    time: string[];
  };
}) {
  const { hourly } = input;
  const { temperature_2m, weathercode, time } = hourly;
  const minLength = Math.min(temperature_2m.length, weathercode.length, time.length);
  const mappedData = [];

  for (let i = 0; i < minLength; i++) {
    mappedData.push({
      temperature_2m: Math.floor(temperature_2m[i]),
      weatherCode: weathercode[i],
      time: time[i],
      weekday: getHumanReadableWeekday(time[i]),
    });
  }

  return mappedData;
}
