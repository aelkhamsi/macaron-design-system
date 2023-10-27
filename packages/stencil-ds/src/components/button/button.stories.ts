export default {
  title: 'Button',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
}

const Template = (args) => `<ds-button label="${args.label}"></ds-button>`;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Label',
};
