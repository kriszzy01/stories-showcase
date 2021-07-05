import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "../components/Input";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: { handler: { action: "changed" } },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: "default",
  value: "",
  name: "default",
  placeholder: "Enter Default Value",
  type: "text",
};

export const Password = Template.bind({});
Password.args = {
  label: "password",
  value: "",
  name: "password",
  placeholder: "Enter Default Value",
  type: "password",
  toggleShowPassword: false,
  handleToggleShowPassword: () => console.log("clicked"),
};

export const Number = Template.bind({});
Number.args = {
  label: "number",
  value: "",
  name: "number",
  placeholder: "Enter Default Value",
  type: "number",
};
