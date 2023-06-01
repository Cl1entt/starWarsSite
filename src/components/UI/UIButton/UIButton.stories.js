import UIButton from "./UIButton";

export default {
    title: 'UI-Kit/UIButton',
    component: UIButton
}
const Template = (args) => <UIButton {...args} />

const props = {
    text: 'Hello',
    onClick: () => console.log('Button Click'),
    disabled: false,
    theme: "dark",
    classes: '',
}

export const Light = Template.bind({});

Light.args = {
    ...props,
    theme: 'light',
}

export const Dark = Template.bind({});

Dark.args = {
    ...props,
    theme: 'dark',
}

export const Disables = Template.bind({});

Disables.args = {
    ...props,
    disabled: true,
}