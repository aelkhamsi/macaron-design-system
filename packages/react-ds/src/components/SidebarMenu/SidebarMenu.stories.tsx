import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SidebarMenu } from './SidebarMenu';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'SidebarMenu',
  component: SidebarMenu,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof SidebarMenu>;

const Template: ComponentStory<typeof SidebarMenu> = (args) => <SidebarMenu {...args} />;

export const Plain = Template.bind({});
Plain.args = {
  links: [
    {
      children: 'Casing & Tubing',
      url: '#',
      target: '_self',
      download: false,
      icon: {name: 'CASING_TUBING', width: '36px', height: '36px', viewBox: '0 0 36 36'},
    },
    {
      children: 'OCTG Accessories',
      url: '#',
      target: '_self',
      download: false,
      icon: {name: 'OCTG', width: '36px', height: '36px', viewBox: '0 0 36 36'},
    },
    {
      children: 'Oil & Gas Mechanical Tube',
      url: '#',
      target: '_self',
      download: false,
      icon: {name: 'OIL_GAS', width: '36px', height: '36px', viewBox: '0 0 36 36'},
    },
    {
      children: 'Line Pipe - Process',
      url: '#',
      target: '_self',
      download: false,
      icon: {name: 'LINEPIPE', width: '36px', height: '36px', viewBox: '0 0 36 36'},
    },
  ],
};
