const { VITE_API_KEY } = import.meta.env;

export const apiKey = VITE_API_KEY;

export const apiBaseUrl = 'https://api.openweathermap.org/data/2.5/forecast';
export const imgBaseUrl = 'https://openweathermap.org/img/wn/';
export const imgExtension = '@2x.png';

export const apiAlternativeUrl =
  'https://us-central1-weather-insight-427517.cloudfunctions.net/weathers';
