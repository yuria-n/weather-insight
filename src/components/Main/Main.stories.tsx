import type { Meta, StoryObj } from '@storybook/react';

import { Main } from './Main';

const meta: Meta<typeof Main> = {
  title: 'Atoms/Main',
  component: Main,
};
export default meta;

export const Default: StoryObj<typeof Main> = {
  args: {
    children: 'Main content here.',
  },
};
