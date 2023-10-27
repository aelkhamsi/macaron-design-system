import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Slider } from './Slider';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Slider',
  component: Slider,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Plain = Template.bind({});
Plain.args = {
  label: 'Label',
};

