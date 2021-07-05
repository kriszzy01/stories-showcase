import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from "../components/Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: { handler: { action: "clicked" } },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "primary",
  label: "Sign In",
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Default.args,
  variant: "secondary",
  size: "small",
  type: "submit",
};
