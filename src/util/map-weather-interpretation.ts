export function mapWeatherInterpretation(code: number): string {
  const weatherMap: { [key: number]: string } = {
    0: 'Clear night',
    1: 'Sunny day',
    2: 'Partly cloudy', // (night)
    3: 'Partly cloudy', // day
    4: 'Not used',
    5: 'Mist',
    6: 'Fog',
    7: 'Cloudy',
    8: 'Overcast',
    9: 'Light rain shower', //  (night)
    10: 'Light rain shower', //  (day)
    11: 'Drizzle',
    12: 'Light rain',
    13: 'Heavy rain shower', //  (night)
    14: 'Heavy rain shower', //  (day)
    15: 'Heavy rain',
    16: 'Sleet shower', //  (night)
    17: 'Sleet shower', //  (day)
    18: 'Sleet',
    19: 'Hail shower', //  (night)
    20: 'Hail shower', //  (day)
    21: 'Hail',
    22: 'Light snow shower', //  (night)
    23: 'Light snow shower', //  (day)
    24: 'Light snow',
    25: 'Heavy snow shower', //  (night)
    26: 'Heavy snow shower', //  (day)
    27: 'Heavy snow',
    28: 'Thunder shower', //  (night)
    29: 'Thunder shower', //  (day)
    30: 'Thunder',
  };

  return weatherMap[code] || 'Unknown';
}

export function mapWeatherCodeToIconName(code: number, timeOfDay: 'day' | 'night'): string {
  const weatherMap: { [key: number]: string } = {
    0: timeOfDay,
    1: timeOfDay,
    2: timeOfDay,
    3: `cloudy-${timeOfDay}-3`,
    45: `cloudy-${timeOfDay}-3`,
    48: `cloudy-${timeOfDay}-3`,
    51: `cloudy-${timeOfDay}-3`,
    53: `cloudy-${timeOfDay}-3`,
    55: `cloudy-${timeOfDay}-3`,
    56: 'rainy-7',
    57: 'rainy-7',
    61: 'rainy-1',
    63: 'rainy-2',
    65: 'rainy-3',
    66: 'rainy-7',
    67: 'rainy-7',
    71: 'snowy-4',
    73: 'snowy-5',
    75: 'snowy-6',
    77: 'snowy-6',
    80: 'rainy-4',
    81: 'rainy-5',
    82: 'rainy-6',
    85: 'snowy-5',
    86: 'snowy-6',
    95: 'thunder',
    96: 'thunder',
    99: 'thunder',
  };

  return weatherMap[code] || `unknown ${code}`;
}
