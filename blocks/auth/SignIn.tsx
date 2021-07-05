import React, { ChangeEvent, useCallback, useState } from "react";

import Form from "@/components/Form";
import Button from "@/components/Button";
import Input from "@/components/Input";

const SignIn = () => {
  const [user, setUser] = useState({ userName: "", password: "" });

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      console.log(user);
    },
    [user]
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const updatedUserInfo = {
      ...user,
      [event.target.name]: event.target.value,
    };
    setUser(updatedUserInfo);
  };

  return (
    <Form
      handleSubmit={handleSubmit}
      heading="Login"
      subheading="Log into your existing account"
    >
      <Input
        type="text"
        label="Username or Email"
        value={user.userName}
        handler={handleChange}
        placeholder="eg. John Doe"
        name="userName"
      />

      <Input
        type="password"
        label="Password"
        value={user.password}
        handler={handleChange}
        name="password"
      />

      <Button label="Sign In" type="submit" variant="primary" size="small"/>
    </Form>
  );
};

export default SignIn;
