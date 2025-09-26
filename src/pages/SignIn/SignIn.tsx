import { Button, Form, Input } from "@heroui/react";
import "./SignIn.scss";
import type { FormEvent } from "react";

function SignIn() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.currentTarget as HTMLFormElement)
    );
    console.log("Form Data:", data);
  };

  return (
    <div className="sign-in w-full h-full overflow-y-auto">
      <div className="form p-4">
        <Form validationBehavior="native" onSubmit={handleSubmit}>
          <Input
            name="username"
            label="USERNAME"
            labelPlacement="outside"
            placeholder="Please enter username"
            isRequired
            errorMessage="Username is required"
          />
          <Input
            name="password"
            label="PASSWORD"
            labelPlacement="outside"
            placeholder="Please enter password"
            type="password"
            isRequired
            errorMessage="Password is required"
          />
          <Button
            className="w-full mt-4"
            color="primary"
            variant="solid"
            type="submit"
          >
            Sign In
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
