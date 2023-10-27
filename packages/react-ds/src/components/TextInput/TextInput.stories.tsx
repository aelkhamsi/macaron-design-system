import { ComponentStory, ComponentMeta } from '@storybook/react';

import { TextInput } from './TextInput';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'TextInput',
  component: TextInput,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Plain = Template.bind({});
Plain.args = {
  type: 'text',
  placeholder: 'Placeholder',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  type: 'text',
  placeholder: 'Placeholder',
  label: 'Label',
  mandatory: true,
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  type: 'text',
  placeholder: 'Placeholder',
  label: 'Label',
  mandatory: true,
  errorMessage: "This is an error message",
};

export const Numerical = Template.bind({});
Numerical.args = {
  type: 'number',
  placeholder: 'Enter a number',
  label: 'Number',
};

export const Password = Template.bind({});
Password.args = {
  type: 'password',
  placeholder: 'Password',
  label: 'Enter your password',
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  type: 'text',
  placeholder: 'Placeholder',
  value: 'Readonly value',
};

