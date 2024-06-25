import type { Meta, StoryObj } from '@storybook/react';

import { getImageUrl } from '../../utils';
import { Card } from './Card';

const meta: Meta<typeof Card> = {
  title: 'Atoms/Card',
  component: Card,
  decorators: [
    (Story) => (
      <ul>
        <Story />
      </ul>
    ),
  ],
};
export default meta;

type Story = StoryObj<typeof Card>;

const date = new Date();

export const Clouds: Story = {
  args: {
    date,
    title: 'Clouds',
    iconUrl: getImageUrl('03d'),
    code: 801,
    temperature: -20.12,
  },
};

export const Clear: Story = {
  args: {
    date,
    title: 'Clear',
    iconUrl: getImageUrl('01d'),
    code: 800,
    temperature: -11,
  },
};

export const Atmosphere: Story = {
  args: {
    date,
    title: 'Mist',
    iconUrl: getImageUrl('50d'),
    code: 701,
    temperature: 4,
  },
};

export const Snow: Story = {
  args: {
    date,
    title: 'Snow',
    iconUrl: getImageUrl('13d'),
    code: 601,
    temperature: -56,
  },
};

export const Rain: Story = {
  args: {
    date,
    title: 'Rain',
    iconUrl: getImageUrl('10d'),
    code: 501,
    temperature: 12,
  },
};

export const Drizzle: Story = {
  args: {
    date,
    title: 'Drizzle',
    iconUrl: getImageUrl('09d'),
    code: 301,
    temperature: 39,
  },
};

export const Thunderstorm: Story = {
  args: {
    date,
    title: 'Thunderstorm',
    iconUrl: getImageUrl('11d'),
    code: 211,
    temperature: 18,
  },
};
