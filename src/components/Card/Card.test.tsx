import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import { vi } from 'vitest';

import * as stories from './Card.stories';

vi.mock('@formkit/tempo', () => ({
  format: (date: Date, { time }: { time: string }) => {
    if (time === 'short') {
      return date.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      });
    }
    return date.toString();
  },
}));

const { Clouds, Clear, Atmosphere, Snow, Rain, Drizzle, Thunderstorm } =
  composeStories(stories);

describe('Card', () => {
  test('renders Clouds story correctly', () => {
    render(<Clouds />);
    expect(screen.getByText('Clouds')).toBeInTheDocument();
    expect(screen.getByText('-20')).toBeInTheDocument();
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute(
      'src',
      stories.Clouds.args.iconUrl,
    );
  });

  test('renders Clear story correctly', () => {
    render(<Clear />);
    expect(screen.getByText('Clear')).toBeInTheDocument();
    expect(screen.getByText('-11')).toBeInTheDocument();
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute(
      'src',
      stories.Clear.args.iconUrl,
    );
  });

  test('renders Atmosphere story correctly', () => {
    render(<Atmosphere />);
    expect(screen.getByText('Mist')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute(
      'src',
      stories.Atmosphere.args.iconUrl,
    );
  });

  test('renders Snow story correctly', () => {
    render(<Snow />);
    expect(screen.getByText('Snow')).toBeInTheDocument();
    expect(screen.getByText('-56')).toBeInTheDocument();
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute(
      'src',
      stories.Snow.args.iconUrl,
    );
  });

  test('renders Rain story correctly', () => {
    render(<Rain />);
    expect(screen.getByText('Rain')).toBeInTheDocument();
    expect(screen.getByText('12')).toBeInTheDocument();
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute(
      'src',
      stories.Rain.args.iconUrl,
    );
  });

  test('renders Drizzle story correctly', () => {
    render(<Drizzle />);
    expect(screen.getByText('Drizzle')).toBeInTheDocument();
    expect(screen.getByText('39')).toBeInTheDocument();
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute(
      'src',
      stories.Drizzle.args.iconUrl,
    );
  });

  test('renders Thunderstorm story correctly', () => {
    render(<Thunderstorm />);
    expect(screen.getByText('Thunderstorm')).toBeInTheDocument();
    expect(screen.getByText('18')).toBeInTheDocument();
    expect(screen.getByRole('img', { hidden: true })).toHaveAttribute(
      'src',
      stories.Thunderstorm.args.iconUrl,
    );
  });
});
