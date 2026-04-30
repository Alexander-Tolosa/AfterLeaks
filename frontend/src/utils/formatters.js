export const formatPHP = (amount) => {
  return new Intl.NumberFormat('en-PH', {
    style: 'currency',
    currency: 'PHP',
  }).format(amount);
};

export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export const getWeatherIcon = (condition) => {
  const map = {
    hot: '☀️',
    sunny: '☀️',
    cold: '❄️',
    cool: '🍂',
    rainy: '🌧️',
    spring: '🌸',
    night: '🌙',
    any: '✨'
  };
  return map[condition] || '✨';
};
