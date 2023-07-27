export const getHumanReadableWeekday = (date: string) => {
  const localeDate = new Date(date);
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const oneDay = 24 * 60 * 60 * 1000;
  const timeDiff = (localeDate.getTime() - today.getTime()) / oneDay;
  const dayDiff = Math.round(timeDiff);

  let weekday;
  if (dayDiff === 0) {
    weekday = 'Today';
  } else if (dayDiff === 1) {
    weekday = 'Tomorrow';
  } else {
    weekday = localeDate.toLocaleDateString('en-US', { weekday: 'long' });
  }

  return weekday;
};

export const getShortDate = (date: string) => {
  const formattedDate = new Date(date);
  return new Intl.DateTimeFormat('en-US', {
    month: 'short',
    day: 'numeric',
  }).format(formattedDate);
};

export const getHour = (date: string) => {
  const formattedDate = new Date(date);
  return new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
  }).format(formattedDate);
};
