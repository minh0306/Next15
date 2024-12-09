"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import schema from "./schema";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { signUp } from "@/services/authService";
import { redirect } from "next/navigation";
export type FormData = {
  phone: string;
  name?: string;
  password?: string;
  address?: string;
  email?: string;
};

const SignUp = () => {
  const [isNextClicked, setIsNextClicked] = useState(false);
  const [isPwdHidden, setIsPwdHidden] = useState(true);
  const [error, setError] = useState("");
  const handleChangePwdHidden = () => {
    setIsPwdHidden(!isPwdHidden);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
    context: { isNextClicked: isNextClicked },
  });

  const onSubmit = async (data: FormData) => {
    if (!isNextClicked) {
      setIsNextClicked(true);
      return;
    }
    try {
      await signUp(data);
    } catch (error) {
      if (typeof error == "string") setError(error as string);
    }
  };

  return (
    <div className="bg-yellow-300 flex items-center min-h-[600px] justify-end  px-2 lg:pr-56 ">
      <div className="max-w-md my-2 bg-white shadow-lg rounded-lg p-6 px-8">
        <div className="text-center ">
          <h1 className="text-2xl font-bold text-left mb-6">Sign up</h1>
        </div>
        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              {...register("phone")}
              type="text"
              id="phone"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-200"
              placeholder="Phone Number"
            />
            {errors.phone && (
              <p className="text-red-500 -mb-2 text-sm">
                {errors.phone.message}
              </p>
            )}
          </div>
          {isNextClicked && (
            <>
              <div className="mb-4">
                <input
                  {...register("name")}
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-200"
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-500 -mb-2 text-sm">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <input
                  {...register("email")}
                  type="email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-200"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 -mb-2 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <input
                  {...register("address")}
                  type="text"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-200"
                  placeholder="Address"
                />
                {errors.address && (
                  <p className="text-red-500 -mb-2 text-sm">
                    {errors.address.message}
                  </p>
                )}
              </div>

              <div className="mb-4">
                <div className="w-full px-4 py-2 border rounded-md focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-200 justify-between flex">
                  <input
                    {...register("password")}
                    type={isPwdHidden ? "password" : "text"}
                    className="focus:outline-none"
                    placeholder="Password"
                  />
                  <button type="button" onClick={handleChangePwdHidden}>
                    {!isPwdHidden ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 -mb-2 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </>
          )}
          {error && (
            <p className=" justify-self-center text-red-500 ">{error}</p>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-yellow-200 text-white font-bold rounded-md hover:bg-yellow-300"
          >
            {isNextClicked ? "SUBMIT" : "NEXT"}
          </button>
        </form>
        <div className="text-center text-gray-400 my-4 flex items-center gap-5">
          <div className="w-full bg-[#dbdbdb] h-0.5" />
          OR
          <div className="w-full bg-[#dbdbdb] h-0.5" />
        </div>

        <div className="flex justify-between gap-4">
          <button className="w-full py-2 bg-blue-600 text-white rounded-md flex items-center justify-center hover:bg-blue-700">
            <span className="font-bold">Facebook</span>
          </button>
          <button className="w-full py-2 bg-red-500 text-white rounded-md flex items-center justify-center hover:bg-red-600">
            <span className="font-bold">Google</span>
          </button>
        </div>

        <div className="text-center text-sm text-gray-600 mt-2">
          By signing up, you agree to Shopee&apos;s{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Terms of Service{" "}
          </a>
          &amp;
          <a href="#" className="text-blue-600 hover:underline">
            {" "}
            Privacy Policy
          </a>
        </div>

        <div className="text-center mt-2">
          <p className="text-gray-500">
            Have an account?{" "}
            <Link
              href="/auth/login"
              className="text-orange-500 font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
