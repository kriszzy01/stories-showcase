import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Icon from "../components/Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const EyeOpen = Template.bind({});
EyeOpen.args = {
  icon: "eyeOpen",
};

export const EyeClosed = Template.bind({});
EyeClosed.args = {
  icon: "eyeClosed",
};
