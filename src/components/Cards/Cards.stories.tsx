import type { Meta, StoryObj } from '@storybook/react';

import { getImageUrl } from '../../utils';
import { Cards } from './Cards';

const timestamp = 1719212400;
const interval = 3 * 60 * 60; // 3 hours

const titles = ['Clouds', 'Clear', 'Rain'];
const codes = [803, 800, 501];
const icons = [getImageUrl('03d'), getImageUrl('01d'), getImageUrl('10d')];
const temperatures = [-18, -10, 0, 5, 9, 13, 18, 26, 21, 17, 7, 3, -1, 6];

export const mockCards = temperatures.map((temperature, index) => {
  const weather = Math.floor(Math.random() * titles.length);
  return {
    timestamp: timestamp + interval * index,
    temperature,
    code: codes[weather],
    title: titles[weather],
    iconUrl: icons[weather],
  };
});

const meta: Meta<typeof Cards> = {
  title: 'Atoms/Cards',
  component: Cards,
  decorators: [
    (Story) => (
      <div style={{ containerType: 'inline-size' }}>
        <Story />
      </div>
    ),
  ],
};
export default meta;

export const Default: StoryObj<typeof Cards> = {
  args: {
    items: mockCards,
  },
};
