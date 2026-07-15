import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff } from "lucide-react";
import { loginUser } from "../../api/auth.api";

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await loginUser(data.email, data.password);
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
          <h1 className="text-3xl font-bold text-[#00c8ff]">Welcome Back</h1>
          <p className="text-sm text-gray-400 mt-2">Sign in to your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                placeholder="Enter your password"
                className="w-full px-4 py-3 bg-black border border-[#313131] rounded-lg focus:outline-none focus:border-[#00c8ff] focus:ring-1 focus:ring-[#00c8ff] transition-colors pr-10"
                {...register("password", { required: "Password is required" })}
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

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-[#313131] bg-black text-[#00c8ff] focus:ring-[#00c8ff]"
              />
              <span className="text-gray-400 hover:text-white transition-colors">
                Remember me
              </span>
            </label>
            <a href="#" className="text-[#00c8ff] hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full py-3 px-4 bg-[#00c8ff] hover:bg-[#00a3cc] text-black font-semibold rounded-lg shadow-md transition-colors"
          >
            Sign In
          </button>
        </form>

        <p className="text-center text-sm text-gray-400 mt-6">
          Don't have an account?{" "}
          <a href="/register" className="text-[#00c8ff] hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};
