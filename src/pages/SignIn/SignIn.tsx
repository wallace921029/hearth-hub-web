import "./SignIn.scss";
import slytherinImage from "../../assets/images/slytherin.png";
import { useForm } from "react-hook-form";
import api from "@/api";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

interface SignInForm {
  username: string;
  password: string;
}

function SignIn() {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const handleSignInSubmit = async (data: SignInForm) => {
    if (isLoading) return;

    setIsLoading(true);
    try {
      const res = await api.auth.signIn(data);
      toast.success("Sign in successful!");
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error(error as string);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="sign-in h-full overflow-y-auto bg-gradient-to-br from-green-950 via-emerald-500 to-[#2A623D] bg-[length:200%_200%]">
      <div className="min-h-full flex flex-col">
        <div className="w-full flex-none px-4 py-8">
          <h1 className="text-5xl font-bold text-white">Slytherin</h1>
          <h2 className="text-xl font-semibold text-white">
            Welcome to the Slytherin House
          </h2>
        </div>

        <div className="w-full flex-grow bg-white/70 rounded-tl-2xl rounded-tr-2xl overflow-y-auto">
          <img
            className="logo h-32 my-4 mx-auto"
            src={slytherinImage}
            alt="Slytherin House"
          />

          <form
            className="form p-6"
            onSubmit={handleSubmit((data) => {
              handleSignInSubmit(data as SignInForm);
            })}
          >
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Username</legend>
              <input
                type="text"
                className="input w-full"
                placeholder="Username"
                {...register("username", { required: true })}
              />
              {errors.username && (
                <p className="label text-red-600">This field is required</p>
              )}
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend">Password</legend>
              <input
                type="password"
                className="input w-full"
                placeholder="password"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="label text-red-600">This field is required</p>
              )}
            </fieldset>
            <fieldset className="fieldset mt-4">
              <button className="btn text-white bg-[#2A623D]">
                {isLoading ? (
                  <span className="loading loading-spinner loading-xs"></span>
                ) : (
                  <span>Sign In</span>
                )}
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
