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

export function mapWeatherCodeToIconName(code: number): string {
  const weatherMap: { [key: number]: string } = {
    0: 'night',
    1: 'day',
    2: 'cloudy-night-3',
    3: 'cloudy-day-3',
    4: 'not-used',
    5: 'cloudy-day-3',
    6: 'cloudy-day-3',
    7: 'cloudy-day-3',
    8: 'cloudy-day-3',
    9: 'rainy-6',
    10: 'rainy-3',
    11: 'rainy-5',
    12: 'rainy-5',
    13: 'rainy-6',
    14: 'rainy-3',
    15: 'rainy-6',
    16: 'rainy-7',
    17: 'rainy-7',
    18: 'rainy-7',
    19: 'rainy-7',
    20: 'rainy-7',
    21: 'rainy-7',
    22: 'snowy-4',
    23: 'showy-2',
    24: 'snowy-4',
    25: 'showy-6',
    26: 'snowy-3',
    27: 'snowy-6',
    28: 'thunder',
    29: 'thunder',
    30: 'thunder',
  };

  // Drizzle
  if (code >= 50 && code <= 59) {
    return weatherMap[11];
  }

  // Rain
  if ((code >= 60 && code <= 69) || (code >= 80 && code <= 99)) {
    return weatherMap[12];
  }

  // Snow
  if (code >= 70 && code <= 79) {
    return weatherMap[24];
  }

  return weatherMap[code] || `unknown ${code}`;
}
