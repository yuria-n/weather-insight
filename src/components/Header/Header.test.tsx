import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Header.stories';

const { Default } = composeStories(stories);

describe('Header', () => {
  test('renders the Header component with the correct city', () => {
    render(<Default />);
    const Element = screen.getByText('Melbourne');
    expect(Element).toBeInTheDocument();
    expect(Element).toHaveClass('header-title');
  });

  test('renders the Header component with the correct timezone', () => {
    render(<Default />);
    const Element = screen.getByText('Timezone: +10:00');
    expect(Element).toBeInTheDocument();
  });

  test('renders the Header component with the correct country', () => {
    render(<Default />);
    const Element = screen.getByText('Country: Australia');
    expect(Element).toBeInTheDocument();
  });

  test('renders the Header component with the correct latitude', () => {
    render(<Default />);
    const Element = screen.getByText('Latitude: 37.8136° S');
    expect(Element).toBeInTheDocument();
  });

  test('renders the Header component with the correct longitude', () => {
    render(<Default />);
    const Element = screen.getByText('Longitude: 144.9631° E');
    expect(Element).toBeInTheDocument();
  });
});
