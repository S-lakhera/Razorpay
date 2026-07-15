import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="w-full h-[70px] bg-black border-b border-[#313131] flex justify-between items-center px-5 relative z-50">
      <div className="flex items-center gap-2">
        <h1 className="text-[2rem] text-[#00c8ff] font-semibold">Razorpay</h1>
        <p className="text-base text-white hidden sm:block">ByKodex</p>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-10">
        <NavLink to="/">
          <p className="text-base text-white hover:text-[#00c8ff] transition-colors">
            Home
          </p>
        </NavLink>
        <NavLink to="/products">
          <p className="text-base text-white hover:text-[#00c8ff] transition-colors">
            Products
          </p>
        </NavLink>
        <NavLink to="/cart">
          <p className="text-base text-white hover:text-[#00c8ff] transition-colors">
            Cart
          </p>
        </NavLink>
        <NavLink to="/checkout">
          <p className="text-base text-white hover:text-[#00c8ff] transition-colors">
            Checkout
          </p>
        </NavLink>
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex gap-5">
        <NavLink to="/login">
          <button className="bg-transparent border border-[#00c8ff] text-[#00c8ff] hover:bg-[#00c8ff]/10 px-4 py-2 rounded-md transition-colors font-medium">
            Login
          </button>
        </NavLink>
        <NavLink to="/register">
          <button className="bg-[#00c8ff] hover:bg-[#00a3cc] text-black px-4 py-2 rounded-md transition-colors font-medium">
            Register
          </button>
        </NavLink>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white cursor-pointer p-2 hover:bg-[#313131] rounded-md transition-colors flex items-center justify-center"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[#111111] border-b border-[#313131] md:hidden shadow-2xl z-40">
          <div className="flex flex-col py-4 px-6 space-y-4">
            <NavLink to="/" onClick={closeMobileMenu} className="w-full">
              <p className="text-lg text-white hover:text-[#00c8ff] transition-colors py-2 border-b border-[#313131]/50">
                Home
              </p>
            </NavLink>
            <NavLink
              to="/products"
              onClick={closeMobileMenu}
              className="w-full"
            >
              <p className="text-lg text-white hover:text-[#00c8ff] transition-colors py-2 border-b border-[#313131]/50">
                Products
              </p>
            </NavLink>
            <NavLink to="/cart" onClick={closeMobileMenu} className="w-full">
              <p className="text-lg text-white hover:text-[#00c8ff] transition-colors py-2 border-b border-[#313131]/50">
                Cart
              </p>
            </NavLink>
            <NavLink
              to="/checkout"
              onClick={closeMobileMenu}
              className="w-full"
            >
              <p className="text-lg text-white hover:text-[#00c8ff] transition-colors py-2 border-b border-[#313131]/50">
                Checkout
              </p>
            </NavLink>

            <div className="flex flex-col gap-4 pt-4">
              <NavLink to="/login" onClick={closeMobileMenu} className="w-full">
                <button className="w-full bg-transparent border border-[#00c8ff] text-[#00c8ff] hover:bg-[#00c8ff]/10 px-4 py-3 rounded-md transition-colors font-medium">
                  Login
                </button>
              </NavLink>
              <NavLink
                to="/register"
                onClick={closeMobileMenu}
                className="w-full"
              >
                <button className="w-full bg-[#00c8ff] hover:bg-[#00a3cc] text-black px-4 py-3 rounded-md transition-colors font-medium">
                  Register
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
