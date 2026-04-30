import { useState, useEffect } from 'react';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Defaulting to Manila, Philippines
        const lat = 14.5995;
        const lon = 120.9842;
        
        // Open-Meteo API: Current weather (temperature, condition codes)
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
        
        if (!res.ok) throw new Error("Failed to fetch weather data");
        const data = await res.json();
        
        // Parse weather code into our simple tags
        const temp = data.current_weather.temperature;
        const code = data.current_weather.weathercode;
        
        let conditionTag = 'any';
        if (temp > 28) conditionTag = 'hot';
        else if (temp > 22) conditionTag = 'sunny'; // warm/sunny
        else if (temp < 18) conditionTag = 'cold';
        else conditionTag = 'cool';

        // simple weathercode checks for rain (codes 51-67, 80-82, 95-99)
        if ((code >= 51 && code <= 67) || (code >= 80 && code <= 82) || (code >= 95 && code <= 99)) {
          conditionTag = 'rainy';
        }

        setWeatherData({
          temp,
          code,
          conditionTag,
          isDay: data.current_weather.is_day
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, []);

  return { weatherData, loading, error };
};
