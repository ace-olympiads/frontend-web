import { useCallback, useState } from "react";
import { BsGoogle, BsFacebook, BsInstagram } from "react-icons/bs";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { signIn } from 'next-auth/react';
import SocialAuthButton from "./SocialAuthButton";
import Button from "./Button";
import Input from "./Input";

type Variant = "LOGIN" | "REGISTER";

const LoginPage: React.FC = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const toggleVariant = useCallback(() => {
    setVariant((prevVariant) =>
      prevVariant === "LOGIN" ? "REGISTER" : "LOGIN"
    );
  }, []);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    if (variant === "REGISTER") {
      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          const { token } = await response.json();
          localStorage.setItem("token", token);
        } else {
          const errorData = await response.json();
          console.error("Signup error:", errorData.error);
        }
      } catch (error) {
        console.error("Error during signup:", error);
      }

      setIsLoading(false);
    }
    if (variant === "LOGIN") {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        if (response.ok) {
          const { token } = await response.json();
          localStorage.setItem("token", token);
        } else {
          const errorData = await response.json();
          console.error("Login error:", errorData.error);
        }
      } catch (error) {
        console.error("Error during login:", error);
      }

      setIsLoading(false);
    }
  };
  
  const handleSocialAuth = async (provider: string) => {
    signIn(provider);
  };

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="email"
            label="Email address"
            type="email"
          />
          {variant === "REGISTER" && (
            <Input
              disabled={isLoading}
              register={register}
              errors={errors}
              required
              id="username"
              label="Name"
            />
          )}
          <Input
            disabled={isLoading}
            register={register}
            errors={errors}
            required
            id="password"
            label="Password"
            type="password"
          />
          <div>
            <Button disabled={isLoading} fullWidth type="submit">
              {variant === "LOGIN" ? "Sign in" : "Register"}
            </Button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>

          <div className="mt-6 flex gap-2">
            <SocialAuthButton
              icon={BsFacebook}
              onClick={() => handleSocialAuth("facebook")}
            />
            <SocialAuthButton
              icon={BsGoogle}
              onClick={() => handleSocialAuth("google")}
            />
            <SocialAuthButton
              icon={BsInstagram}
              onClick={() => handleSocialAuth("instagram")}
            />
          </div>
        </div>
        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "New to AceOlympiads?"
              : "Already have an account?"}
          </div>
          <div onClick={toggleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
