import { useWeather } from '../hooks/useWeather';
import { CloudRain, Sun, Thermometer, CloudSnow, Wind } from 'lucide-react';

export const WeatherWidget = () => {
  const { weatherData, loading, error } = useWeather();

  if (loading) return <div className="animate-pulse h-16 w-48 bg-luxury-glass rounded-xl"></div>;
  if (error) return null;

  const getIcon = () => {
    switch (weatherData.conditionTag) {
      case 'hot':
      case 'sunny': return <Sun className="text-yellow-400" size={24} />;
      case 'cold': return <CloudSnow className="text-blue-200" size={24} />;
      case 'rainy': return <CloudRain className="text-blue-400" size={24} />;
      default: return <Wind className="text-gray-300" size={24} />;
    }
  };

  return (
    <div className="glass-panel p-4 flex items-center gap-4 inline-flex">
      <div className="p-2 bg-luxury-dark rounded-full shadow-[0_0_15px_rgba(255,255,255,0.1)]">
        {getIcon()}
      </div>
      <div>
        <div className="text-sm text-gray-400">Current Weather</div>
        <div className="flex items-center gap-2">
          <span className="font-medium text-lg text-white">{weatherData.temp}°C</span>
          <span className="text-luxury-gold capitalize text-sm">({weatherData.conditionTag})</span>
        </div>
      </div>
    </div>
  );
};
