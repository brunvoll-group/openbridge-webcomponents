import type {Meta, StoryObj} from '@storybook/web-components';
import {
  AzimuthThrusterLabeledSize,
  ObcAzimuthThrusterLabeled,
} from './azimuth-thruster-labeled';
import './azimuth-thruster-labeled';
import {html} from 'lit';
import {CommandStatus} from '../badge-command/badge-command';

const meta: Meta<typeof ObcAzimuthThrusterLabeled> = {
  title: 'Navigation instruments/Azimuth thruster labeled',
  tags: ['autodocs'],
  component: 'obc-azimuth-thruster-labeled',
  args: {
    angle: 30,
    angleSetpoint: 40,
    thrust: 60,
    thrustSetpoint: 70,
    label: '3. Thruster',
    size: 'medium',
    containerSize: 300,
  },
  decorators: [
    (story, contex) => {
      return html`<div style="height: ${contex.args.containerSize}px">
        ${story()}
      </div>`;
    },
  ],
  argTypes: {
    commandStatus: {
      control: {
        type: 'select',
      },
      options: Object.values(CommandStatus),
    },
    containerSize: {
      control: {type: 'range', min: 100, max: 2000, step: 1},
    },
  },
} satisfies Meta<ObcAzimuthThrusterLabeled>;

export default meta;
type Story = StoryObj<ObcAzimuthThrusterLabeled>;

export const Medium: Story = {
  args: {
    containerSize: 266,
  },
};

export const Large: Story = {
  args: {
    size: AzimuthThrusterLabeledSize.large,
    containerSize: 604,
  },
};

export const NoCommand: Story = {
  args: {
    containerSize: 266,
    commandStatus: CommandStatus.NoCommand,
  },
};
