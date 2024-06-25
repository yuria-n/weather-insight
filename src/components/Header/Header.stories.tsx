import type { Meta, StoryObj } from '@storybook/react';

import { Header } from './Header';

const meta: Meta<typeof Header> = {
  title: 'Organisms/Header',
  component: Header,
};
export default meta;

export const Default: StoryObj<typeof Header> = {
  args: {
    city: 'Melbourne',
    timezone: '+10:00',
    country: 'Australia',
    latitude: '37.8136° S',
    longitude: '144.9631° E',
  },
};
