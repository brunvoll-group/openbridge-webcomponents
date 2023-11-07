import type { Meta, StoryObj } from '@storybook/web-components';
import { IconButton } from './IconButton';
import './IconButton';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
const meta: Meta<typeof IconButton> = {
  title: 'Button/Icon',
  tags: ['autodocs'],
  component: "ob-icon-button",
  args: {
    icon: '01-placeholder',
    size: 'regular',
  },
  argTypes: {
    icon: {
      options: ['01-placeholder', '01-apps', '14-alerts', '04-dimming', '01-menu'],
      control: { type: 'select' },
    },
    variant: {
      options: ['normal', 'flat', 'raised'],
      control: { type: 'select' },
    },
    size: {
      options: ['regular', 'large'],
      control: { type: 'select' },
    }
  },
} satisfies Meta<IconButton>;

export default meta;
type Story = StoryObj<IconButton>;

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const Normal: Story = {
  args: {
    variant: 'normal',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const Raised: Story = {
  args: {
    variant: 'raised',
  },
};

export const Flat: Story = {
  args: {
    variant: 'flat',
  },
};