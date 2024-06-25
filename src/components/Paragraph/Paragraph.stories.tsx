import type { Meta, StoryObj } from '@storybook/react';

import { Paragraph } from './Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Atoms/Paragraph',
  component: Paragraph,
};

export default meta;

export const Default: StoryObj<typeof meta> = {
  args: {
    children: 'Paragraph text here.',
  },
};
