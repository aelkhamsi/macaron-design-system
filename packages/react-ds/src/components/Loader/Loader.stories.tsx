import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Loader } from './Loader';

export default {
  title: 'Loader',
  component: Loader,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  type: 'primary',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'medium',
  type: 'primary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  type: 'primary',
};
