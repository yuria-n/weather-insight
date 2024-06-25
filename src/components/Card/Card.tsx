import { format } from '@formkit/tempo';
import { JSX } from 'react';

import './card.css';

type LiProps = JSX.IntrinsicElements['li'];
interface CardProps extends LiProps {
  readonly date: Date;
  readonly title: string;
  readonly iconUrl: string;
  readonly code: number;
  readonly temperature: number;
}

function toTheme(code: number): string {
  if (code > 800) {
    return 'card-container--clouds';
  }
  if (code === 800) {
    return 'card-container--clear';
  }
  if (code >= 700) {
    return 'card-container--atmosphere';
  }
  if (code >= 600) {
    return 'card-container--snow';
  }
  if (code >= 500) {
    return 'card-container--rain';
  }
  if (code >= 300) {
    return 'card-container--drizzle';
  }
  if (code >= 200) {
    return 'card-container--thunderstorm';
  }
  throw new Error('Unknown weather code');
}

export function Card({
  date,
  title,
  iconUrl,
  code,
  temperature,
  ...liProps
}: CardProps) {
  const theme = toTheme(code);
  return (
    <li {...liProps} className={`card-container ${theme}`}>
      <p>{format(date, { time: 'short' })}</p>
      <h3 className="card-text--temperature card-text--xl">
        {Math.round(temperature)}
        <span className="card-text--sm">℃</span>
      </h3>
      <img
        className="card-image"
        src={iconUrl}
        alt={`${title} icon`}
        aria-hidden
      />
      <p className="card-text--title">{title}</p>
    </li>
  );
}
