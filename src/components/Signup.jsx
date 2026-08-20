import React from "react";

const Signup = ({ setToggle }) => {
  return (
    <div
      className="bg-[#131313] text-[#e5e2e1] h-screen w-screen flex flex-col md:flex-row antialiased selection:bg-[#c7c9a3] selection:text-[#2f3217] overflow-hidden"
      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
    >
      {/* Left Side: Image */}
      <div className="hidden md:block md:w-1/2 lg:w-[55%] h-full relative overflow-hidden bg-[#20201f]">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="https://lh3.googleusercontent.com/aida/AP1WRLuStl_5ZILsMzZPFmDGIF_-SvwOGi5qRK8VAHq3PTXEFMLk7kReKMJKUUYLWTbKyGLf_bUrRHfTsehgic9y5M7X4VnG8gAumwF5vZPA7L9dkBnjliMLlvwWS5Gj7MAlqheYIGa5bvNcCcTdH-JvJFcKlKv297jxf_3_0Qcq3YqV0mWZ_mpnauKTM8vOagmJtFLwhMrqAOczBfIQ_aZQYICgeB--TmWMddHVH3KwwyPrQDxjI4MzTSlIOA"
        />
        {/* Overlay gradient for depth */}
        <div className="absolute inset-0 bg-linear-to-t from-[#131313]/80 via-transparent to-transparent"></div>
        <div className="absolute bottom-12 left-12 right-12">
          <h2
            className="text-[56px] leading-tight text-[#e5e2e1] mb-2"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            BLAKOUT CO.
          </h2>
          <p className="text-[16px] leading-6 text-[#c4c7c7] max-w-md">
            FUNCTIONAL AESTHETICS. ARCHITECTURAL PRECISION. JOIN THE ARCHIVE.
          </p>
        </div>
      </div>

      {/* Right Side: Form */}
      <div className="w-full md:w-1/2 lg:w-[45%] bg-[#0d0d0d] h-full flex flex-col px-6 md:px-12 py-8 justify-center overflow-y-auto relative z-10">
        {/* Mobile Logo */}
        <div className="md:hidden mb-6">
          <h1
            className="text-[28px] leading-tight text-[#e5e2e1]"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            BLAKOUT CO.
          </h1>
        </div>

        <div className="max-w-120 w-full mx-auto md:mx-0 my-auto">
          <div className="mb-8">
            <h1
              className="text-[40px] md:text-[52px] leading-tight text-[#e5e2e1] uppercase mb-1"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              JOIN THE ARCHIVE
            </h1>
            <p
              className="text-[12px] leading-4 tracking-widest text-[#c4c7c7] uppercase font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              CREATE YOUR ACCOUNT
            </p>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            {/* Full Name */}
            <div
              className="flex flex-col gap-1 pb-1 transition-colors duration-300"
              style={{ borderBottom: "1px solid rgba(229, 226, 225, 0.2)" }}
            >
              <label
                className="text-[11px] leading-4 tracking-widest text-[#c4c7c7] font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                htmlFor="fullName"
              >
                FULL NAME
              </label>
              <input
                className="bg-transparent border-none p-0 text-[16px] leading-6 text-[#e5e2e1] focus:ring-0 placeholder:text-[#353535] focus:outline-none"
                id="fullName"
                name="fullName"
                placeholder="ENTER YOUR NAME"
                required
                type="text"
              />
            </div>

            {/* Email */}
            <div
              className="flex flex-col gap-1 pb-1 transition-colors duration-300"
              style={{ borderBottom: "1px solid rgba(229, 226, 225, 0.2)" }}
            >
              <label
                className="text-[11px] leading-4 tracking-widest text-[#c4c7c7] font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                htmlFor="email"
              >
                EMAIL ADDRESS
              </label>
              <input
                className="bg-transparent border-none p-0 text-[16px] leading-6 text-[#e5e2e1] focus:ring-0 placeholder:text-[#353535] focus:outline-none"
                id="email"
                name="email"
                placeholder="ENTER YOUR EMAIL"
                required
                type="email"
              />
            </div>

            {/* Password */}
            <div
              className="flex flex-col gap-1 pb-1 transition-colors duration-300 relative group"
              style={{ borderBottom: "1px solid rgba(229, 226, 225, 0.2)" }}
            >
              <label
                className="text-[11px] leading-4 tracking-widest text-[#c4c7c7] font-bold flex justify-between"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                htmlFor="password"
              >
                <span>PASSWORD</span>
              </label>
              <input
                className="bg-transparent border-none p-0 text-[16px] leading-6 text-[#e5e2e1] focus:ring-0 placeholder:text-[#353535] focus:outline-none pr-10"
                id="password"
                name="password"
                placeholder="••••••••"
                required
                type="password"
              />
            </div>

            {/* Confirm Password */}
            <div
              className="flex flex-col gap-1 pb-1 transition-colors duration-300 relative group"
              style={{ borderBottom: "1px solid rgba(229, 226, 225, 0.2)" }}
            >
              <label
                className="text-[11px] leading-4 tracking-widest text-[#c4c7c7] font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                htmlFor="confirmPassword"
              >
                <span>CONFIRM PASSWORD</span>
              </label>
              <input
                className="bg-transparent border-none p-0 text-[16px] leading-6 text-[#e5e2e1] focus:ring-0 placeholder:text-[#353535] focus:outline-none pr-10"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="••••••••"
                required
                type="password"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-3">
              <button
                className="w-full bg-[#c9c6c5] text-[#313030] hover:bg-white transition-colors duration-300 py-3.5 px-6 flex justify-between items-center group cursor-pointer"
                type="submit"
              >
                <span
                  className="text-[12px] leading-4 tracking-widest uppercase font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  CREATE ACCOUNT
                </span>
                <span className="material-symbols-outlined text-[#313030] group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-[#444748]/20 flex flex-col gap-4">
            <a
              className="cursor-pointer text-[12px] leading-4 tracking-widest text-[#c4c7c7] hover:text-[#e5e2e1] transition-colors duration-200 uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              onClick={(e) => {
                e.preventDefault();
                setToggle((prev) => !prev);
              }}
            >
              ALREADY HAVE AN ACCOUNT? LOGIN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
