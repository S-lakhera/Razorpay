import React from "react";
import { NavLink } from "react-router";

export const Navbar = () => {
  return (
    <nav className="w-full h-[70px] bg-black border-b-[1px] border-[#313131] flex justify-between items-center px-5">
      <div className="flex items-center gap-2">
        <h1 className="text-[2rem] text-[#00c8ff] font-semibold">Razorpay</h1>
        <p className="text-base text-white">ByKodex</p>
      </div>
      <div className="flex items-center gap-10">
        {/* <p className="text-base text-white hover:text-[#00c8ff]">Home</p>
        <p className="text-base text-white hover:text-[#00c8ff]">About</p>
        <p className="text-base text-white hover:text-[#00c8ff]">Contact</p>
        <p className="text-base text-white hover:text-[#00c8ff]">Checkout</p> */}
        <NavLink to="/">
          <p className="text-base text-white hover:text-[#00c8ff]">Home</p>
        </NavLink>

        <NavLink to="/products">
          <p className="text-base text-white hover:text-[#00c8ff]">Products</p>
        </NavLink>

        <NavLink to="/cart">
          <p className="text-base text-white hover:text-[#00c8ff]">Cart</p>
        </NavLink>

        <NavLink to="/checkout">
          <p className="text-base text-white hover:text-[#00c8ff]">Checkout</p>
        </NavLink>
      </div>

      <div className="flex gap-5">
        <NavLink to="/login">
          <button className="bg-[#00c8ff] text-black px-4  py-2 rounded-md">
            Login
          </button>
        </NavLink>
        <NavLink to="/register">
          <button className="bg-[#00c8ff] text-black px-4  py-2 rounded-md">
            Register
          </button>
        </NavLink>
      </div>
    </nav>
  );
};
