import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { registerUser } from "../../api/auth.api";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await registerUser(data.name, data.email, data.password);
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      reset();
    }
  };

  return (
    <div className="flex justify-center items-center h-[calc(100vh-70px)] bg-black text-white">
      <div className="w-full max-w-md p-8 space-y-6 bg-[#111111] border border-[#313131] rounded-xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#00c8ff]">
            Create an Account
          </h1>
          <p className="text-sm text-gray-400 mt-2">
            Join us and start your journey
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300" htmlFor="name">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 bg-black border border-[#313131] rounded-lg focus:outline-none focus:border-[#00c8ff] focus:ring-1 focus:ring-[#00c8ff] transition-colors"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium text-gray-300"
              htmlFor="email"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="name@example.com"
              className="w-full px-4 py-3 bg-black border border-[#313131] rounded-lg focus:outline-none focus:border-[#00c8ff] focus:ring-1 focus:ring-[#00c8ff] transition-colors"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              className="text-sm font-medium text-gray-300"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a strong password"
                className="w-full px-4 py-3 bg-black border border-[#313131] rounded-lg focus:outline-none focus:border-[#00c8ff] focus:ring-1 focus:ring-[#00c8ff] transition-colors pr-10"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-[#00c8ff] transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#00c8ff] hover:bg-[#00a3cc] text-black font-semibold rounded-lg shadow-md transition-colors mt-2"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <a href="/login" className="text-[#00c8ff] hover:underline">
            Sign in here
          </a>
        </p>
      </div>
    </div>
  );
};
