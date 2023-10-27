import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Label',
  size: 'large',
  disabled: false,
  loading: false,
  pressed: false,
  type: 'primary',
};


export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Label',
  size: 'large',
  disabled: false,
  loading: false,
  pressed: false,
  type: 'secondary',
};


export const Outline = Template.bind({});
Outline.args = {
  children: 'Label',
  size: 'large',
  disabled: false,
  loading: false,
  pressed: false,
  type: 'outline',
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Label',
  size: 'large',
  disabled: true,
  loading: false,
  pressed: false,
  type: 'outline',
};

export const PrimaryLoading = Template.bind({});
PrimaryLoading.args = {
  children: 'Label',
  size: 'large',
  disabled: false,
  loading: true,
  pressed: false,
  type: 'primary',
};

export const SecondaryLoading = Template.bind({});
SecondaryLoading.args = {
  children: 'Label',
  size: 'large',
  disabled: false,
  loading: true,
  pressed: false,
  type: 'secondary',
};

export const OultlineLoading = Template.bind({});
OultlineLoading.args = {
  children: 'Label',
  size: 'large',
  disabled: false,
  loading: true,
  pressed: false,
  type: 'outline',
};

export const  Large = Template.bind({});
Large.args = {
  children: 'Label',
  size: 'large',
  disabled: false,
  loading: false,
  pressed: false,
  type: 'primary',
};

export const Medium = Template.bind({});
Medium.args = {
  children: 'Label',
  size: 'medium',
  disabled: false,
  loading: false,
  pressed: false,
  type: 'primary',
};

export const Small = Template.bind({});
Small.args = {
  children: 'Label',
  size: 'small',
  disabled: false,
  loading: false,
  pressed: false,
  type: 'primary',
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  children: 'Label',
  size: 'small',
  type: 'primary',
  fullWidth: true,
  disabled: false,
  loading: false,
  pressed: false,
};
