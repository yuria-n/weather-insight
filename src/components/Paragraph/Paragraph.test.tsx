import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';

import * as stories from './Paragraph.stories';

const { Default } = composeStories(stories);

describe('Paragraph', () => {
  test('renders the Default story', () => {
    render(<Default />);
    const Element = screen.getByText('Paragraph text here.');
    expect(Element).toBeInTheDocument();
    expect(Element).toHaveClass('paragraph-text');
  });
});
