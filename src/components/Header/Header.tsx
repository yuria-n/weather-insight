import { Paragraph } from '../Paragraph/Paragraph';

import './header.css';

interface HeaderProps {
  city: string;
  timezone: string;
  country: string;
  latitude: string;
  longitude: string;
}

export function Header({
  city,
  timezone,
  country,
  latitude,
  longitude,
}: HeaderProps) {
  return (
    <header className="header-container">
      <h1 className="header-title">{city}</h1>
      <ul className="header-description-container">
        <li className="header-description-item">
          <Paragraph>{`Timezone: ${timezone}`}</Paragraph>
        </li>
        <li className="header-description-item">
          <Paragraph>{`Country: ${country}`}</Paragraph>
        </li>
        <li className="header-description-item">
          <Paragraph>{`Latitude: ${latitude}`}</Paragraph>
        </li>
        <li className="header-description-item">
          <Paragraph>{`Longitude: ${longitude}`}</Paragraph>
        </li>
      </ul>
    </header>
  );
}
