"use client";
import Link from "next/link";
import { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import schema from "./schema";
import { useAuth } from "@/contexts/AuthContext";
// import { useQueryClient } from "@tanstack/react-query";

export type FormData = {
  password: string;
  email: string;
};

const Login = () => {
  const [isPwdHidden, setIsPwdHidden] = useState(true);
  const [error, setError] = useState("");

  const auth = useAuth();
  // const queryClient = useQueryClient();

  const handleChangePwdHidden = () => {
    setIsPwdHidden(!isPwdHidden);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    // console.log(data);
    // const res = await auth?.logIn(data);
    try {
      await auth?.logIn(data);
    } catch (error) {
      setError(error as string);
    }
    // queryClient.clear();
    // console.log("Cache cleared on successful login");
  };

  return (
    <div className="bg-yellow-300 flex items-center min-h-[600px] justify-end px-2 lg:pr-56">
      <div className="max-w-md  bg-white shadow-lg rounded-lg p-8 min-w-[450px]">
        <div className="text-center mb-4">
          <h1 className="text-2xl font-bold text-left mb-6">Log In</h1>
        </div>

        <form className="" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-200"
              placeholder="Phone Number / Email / Username"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-red-500 -mb-2 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="mb-4">
            <div className="w-full px-4 py-2 border rounded-md focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-200 justify-between flex">
              <input
                type={isPwdHidden ? "password" : "text"}
                id="pwd"
                placeholder="Password"
                className="focus:outline-none"
                {...register("password")}
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
          {error && (
            <p className=" justify-self-center text-red-500 ">{error}</p>
          )}
          <button
            type="submit"
            className="w-full py-2 bg-yellow-200 text-white font-bold rounded-md hover:bg-yellow-300"
          >
            LOG IN
          </button>
        </form>
        <div className="flex w-full justify-end text-sm pt-1 pr-2 text-[#0055AA]">
          <p>Forgot Password?</p>
        </div>
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

        <div className="text-center mt-4">
          <p className="text-gray-500">
            New to Shopee?{" "}
            <Link
              href="/auth/signup"
              className="text-orange-500 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
export default Login;
