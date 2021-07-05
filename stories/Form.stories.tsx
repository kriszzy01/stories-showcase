import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";

import Form from "../components/Form";

import { Password } from "./Input.stories";
import { Secondary } from "./Button.stories";

export default {
  title: "Auth/Forms",
  component: Form,
  argTypes: { handleSubmit: { action: "click" } },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => <Form {...args} />;

export const ResetPassword = Template.bind({});

const ResetPasswordChildren = (
  <>
    <Password
      label="password"
      type="password"
      value="hh"
      handler={() => console.log("")}
      name="password"
      placeholder="Enter Password"
    />
    <Secondary label="Submit" type="submit" />
  </>
);

ResetPassword.args = {
  heading: "Reset Password",
  subheading: "Reset Password",
  handleSubmit: (event: any) => event.preventDefault(),
  children: ResetPasswordChildren,
};
