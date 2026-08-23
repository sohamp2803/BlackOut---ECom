import React, { useState } from "react";
import { NavLink } from "react-router";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount } = useCart();

  const handleLogout = () => {
    // Yahan apna logout logic add karein
    console.log("Logged out");
  };

  return (
    <header className="fixed top-0 left-0 w-full flex justify-between items-center px-5 sm:px-8 md:px-12 py-5 md:py-6 bg-[#131313] z-50 border-b border-[#2a2a2a]/40">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden flex items-center justify-center text-[#e5e2e1] hover:text-[#c9c6c5] transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-[24px]">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Logo */}
        <NavLink
          to="/"
          className="text-[26px] sm:text-[32px] leading-none font-normal text-[#e5e2e1] tracking-tighter cursor-pointer"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          BLAKOUT.
        </NavLink>
      </div>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-[12px] leading-4 tracking-widest font-bold transition-colors ${
              isActive
                ? "text-[#c7c9a3]"
                : "text-[#e5e2e1] hover:text-[#c9c6c5]"
            }`
          }
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          HOME
        </NavLink>
        <NavLink
          to="/store"
          className={({ isActive }) =>
            `text-[12px] leading-4 tracking-widest font-bold transition-colors ${
              isActive
                ? "text-[#c7c9a3]"
                : "text-[#e5e2e1] hover:text-[#c9c6c5]"
            }`
          }
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          STORE
        </NavLink>
      </nav>

      {/* Action Icons */}
      <div className="flex items-center gap-4 sm:gap-6 text-[#e5e2e1]">
        {/* Cart Icon */}
        <span className="relative cursor-pointer">
          <span className="material-symbols-outlined hover:text-[#c9c6c5] transition-colors text-[20px] sm:text-[24px]">
            shopping_bag
          </span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#c7c9a3] text-[#131313] text-[10px] font-bold w-4.5 h-4.5 flex items-center justify-center rounded-full leading-none">
              {cartCount}
            </span>
          )}
        </span>

        {/* Logout Button */}
        <button
          type="button"
          onClick={handleLogout}
          title="Logout"
          className="flex items-center justify-center cursor-pointer hover:text-[#c9c6c5] transition-colors"
        >
          <span className="material-symbols-outlined text-[20px] sm:text-[24px]">
            logout
          </span>
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#131313] border-b border-[#2a2a2a] px-6 py-6 flex flex-col gap-4 md:hidden shadow-2xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[13px] tracking-widest font-bold py-2 transition-colors ${
                isActive
                  ? "text-[#c7c9a3]"
                  : "text-[#e5e2e1] hover:text-[#c7c9a3]"
              }`
            }
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/store"
            className={({ isActive }) =>
              `text-[13px] tracking-widest font-bold py-2 transition-colors ${
                isActive
                  ? "text-[#c7c9a3]"
                  : "text-[#e5e2e1] hover:text-[#c7c9a3]"
              }`
            }
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            STORE
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
