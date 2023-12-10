"use client";

//@components
import { Button, Input } from "@components/ui";

//@hooks
import { useSignIn } from "@hooks";
import { SubmitHandler, useForm } from "react-hook-form";

interface LoginFormInputs {
  email: string;
  password: string;
}

/**
 * Returns the Login form component
 * @returns JSX.Element
 */
const LoginForm = () => {
  const { isCredentialProviderLoading, signInWithCredentials } = useSignIn();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    mode: "onChange",
  });

  const emailError = errors.email?.message;
  const passwordError = errors.password?.message;

  const onSubmit: SubmitHandler<LoginFormInputs> = async ({
    email,
    password,
  }) => {
    await signInWithCredentials(email, password);
  };

  return (
    <div className="w-full flex-col space-y-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="my-auto flex flex-col space-y-4"
      >
        <Input
          id="email"
          label="Email"
          {...register("email", {
            required: "Email is required!",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Entered value does not match email format",
            },
          })}
          type="email"
          isError={Boolean(emailError)}
          helperText={emailError}
        />

        <Input
          id="password"
          label="Password"
          {...register("password", {
            required: "Password is required!",
            minLength: {
              value: 3,
              message: "min length is 3",
            },
          })}
          type="password"
          isError={Boolean(passwordError)}
          helperText={passwordError}
        />

        <Button
          disabled={isCredentialProviderLoading}
          loading={isCredentialProviderLoading}
          type="submit"
          className="mb-2"
        >
          Sign In
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
