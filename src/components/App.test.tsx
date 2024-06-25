import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';

import * as entities from '../entities';
import { useWeather } from '../hooks';

import App from './App';

vi.mock('@hooks', () => ({
  useWeather: vi.fn(),
}));

describe('App', () => {
  test('displays loading state initially', async () => {
    useWeather.mockReturnValue([null, null]);
    render(<App />);
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('displays weather data when loaded', () => {
    const weatherData = [
      entities.Weather.instantiate(
        700,
        'Clear',
        '01d',
        21.5,
        Math.floor(Date.now() / 1000),
      ),
    ];
    const lastUpdated = new Date().toISOString();

    useWeather.mockReturnValue([weatherData, lastUpdated]);

    render(<App />);

    expect(screen.getByText(/Last updated:/)).toBeInTheDocument();

    expect(screen.getByText('22')).toBeInTheDocument();
    expect(screen.getByText('Clear')).toBeInTheDocument();
  });
});
