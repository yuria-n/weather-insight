import axios from 'axios';
import { useEffect, useState } from 'react';

import { apiKey, apiBaseUrl, apiAlternativeUrl } from '../constants';
import * as entities from '../entities';

interface WeatherData {
  dt: number;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    },
  ];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

interface StoredData {
  list: WeatherData[];
  expiry: number;
}

const storageKey = 'weather';
const delay = 1000 * 60 * 30; // 30 min

async function fetchWeathers(): Promise<{ list: WeatherData[] }> {
  if (!apiKey) {
    const response = await axios.get(apiAlternativeUrl);
    return JSON.parse(response.data);
  }

  const response = await axios.get(apiBaseUrl, {
    params: {
      q: 'Vancouver,ca',
      units: 'metric',
      appid: apiKey,
    },
  });
  return response.data;
}

function formatWeathers(data: WeatherData[]): entities.Weather[] {
  return data.map((item: WeatherData) =>
    entities.Weather.instantiate(
      item.weather[0].id,
      item.weather[0].main,
      item.weather[0].icon,
      item.main.temp,
      item.dt,
    ),
  );
}

export function useWeather() {
  const [weathers, setWeathers] = useState<entities.Weather[] | null>(null);
  const [lastUpdated, setLastUpdated] = useState(0);

  useEffect(() => {
    const stringData = localStorage.getItem(storageKey);
    const storedData: StoredData =
      stringData !== null ? JSON.parse(stringData) : null;

    if (storedData?.expiry > Date.now()) {
      setWeathers(formatWeathers(storedData.list));
      setLastUpdated(storedData.expiry - delay);
      return;
    }

    fetchWeathers()
      .then(({ list }) => {
        const now = Date.now();

        // Cache weatherData for the next 30 minutes
        localStorage.setItem(
          storageKey,
          JSON.stringify({ expiry: now + delay, list }),
        );

        setWeathers(formatWeathers(list));
        setLastUpdated(now);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return [weathers, lastUpdated] as const;
}
