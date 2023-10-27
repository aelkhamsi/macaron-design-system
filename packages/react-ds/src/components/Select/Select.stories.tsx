import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from './Select';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Select',
  component: Select,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Plain = Template.bind({});
Plain.args = {
  label: 'Label',
  options: [
    {
      value: 'option_1',
      label: 'Option 1',
      disabled: false,
      selected: false,
    },
    {
      value: 'option_2',
      label: 'Option 2',
      disabled: false,
      selected: false,
    },
    {
      value: 'option_3',
      label: 'Option 3',
      disabled: false,
      selected: false,
    },
    {
      value: 'option_4',
      label: 'Option 4',
      disabled: false,
      selected: false,
    },
    {
      value: 'option_5',
      label: 'Option 5',
      disabled: false,
      selected: false,
    },
  ],
  placeholder: 'Select',
};

export const PreSelected = Template.bind({});
PreSelected.args = {
  label: 'Label',
  options: [
    {
      value: 'option_1',
      label: 'Option 1',
      disabled: false,
      selected: false,
    },
    {
      value: 'option_2',
      label: 'Option 2',
      disabled: false,
      selected: true,
    },
    {
      value: 'option_3',
      label: 'Option 3',
      disabled: false,
      selected: false,
    },
    {
      value: 'option_4',
      label: 'Option 4',
      disabled: false,
      selected: false,
    },
    {
      value: 'option_5',
      label: 'Option 5',
      disabled: false,
      selected: false,
    },
  ],
  placeholder: 'Select',
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  options: [
    {
      value: 'option_1',
      label: 'Option 1',
      disabled: false,
      selected: false,
    },
    {
      value: 'option_2',
      label: 'Option 2',
      disabled: false,
      selected: false,
    },
    {
      value: 'option_3',
      label: 'Option 3',
      disabled: false,
      selected: false,
    },
    {
      value: 'option_4',
      label: 'Option 4',
      disabled: false,
      selected: false,
    },
    {
      value: 'option_5',
      label: 'Option 5',
      disabled: false,
      selected: false,
    },
  ],
  placeholder: 'Select',
};

