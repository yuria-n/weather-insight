import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Main.stories';

const { Default } = composeStories(stories);

describe('Main', () => {
  test('renders the Default story', () => {
    render(<Default />);
    const Element = screen.getByText('Main content here.');
    expect(Element).toBeInTheDocument();
    expect(Element).toHaveClass('main-container');
  });
});
