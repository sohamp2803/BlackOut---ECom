import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Signup = ({ setToggle }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { signup } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  const password = watch("password");

  const onSubmit = (data) => {
    setErrorMsg("");
    try {
      signup({
        name: data.fullName,
        email: data.email,
        password: data.password,
      });
      navigate("/");
    } catch (err) {
      setErrorMsg(err.message || "REGISTRATION FAILED");
    }
  };

  return (
    <div
      className="bg-[#131313] text-[#e5e2e1] h-screen w-screen flex flex-col md:flex-row antialiased selection:bg-[#c7c9a3] selection:text-[#2f3217] overflow-hidden"
      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
    >
      <div className="hidden md:block md:w-1/2 lg:w-[55%] h-full relative overflow-hidden bg-[#20201f]">
        <img
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center"
          src="https://i.pinimg.com/736x/3f/b6/10/3fb6100042f1b9725d80d831dd2bf446.jpg"
        />
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

      <div className="w-full md:w-1/2 lg:w-[45%] bg-[#0d0d0d] h-full flex flex-col px-6 md:px-12 py-8 justify-center overflow-y-auto relative z-10">
        <div className="max-w-120 w-full mx-auto md:mx-0 my-auto">
          <div className="mb-6">
            <h1
              className="text-[40px] md:text-[52px] leading-tight text-[#e5e2e1] uppercase mb-1"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              BECOME AN INSIDER
            </h1>
            <p
              className="text-[12px] leading-4 tracking-widest text-[#c4c7c7] uppercase font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              CREATE YOUR ACCOUNT
            </p>
          </div>

          {errorMsg && (
            <p
              className="text-red-400 text-[12px] tracking-wider uppercase font-semibold border-l-2 border-red-500 pl-2 mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {errorMsg}
            </p>
          )}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
            noValidate
          >
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
                placeholder="ENTER YOUR NAME"
                {...register("fullName", {
                  required: "NAME IS REQUIRED",
                  minLength: { value: 2, message: "AT LEAST 2 CHARACTERS" },
                })}
                type="text"
              />
              {errors.fullName && (
                <p className="text-red-400 text-[10px] tracking-wider uppercase mt-0.5">
                  {errors.fullName.message}
                </p>
              )}
            </div>

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
                placeholder="ENTER YOUR EMAIL"
                {...register("email", {
                  required: "EMAIL IS REQUIRED",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "INVALID EMAIL FORMAT",
                  },
                })}
                type="email"
              />
              {errors.email && (
                <p className="text-red-400 text-[10px] tracking-wider uppercase mt-0.5">
                  {errors.email.message}
                </p>
              )}
            </div>

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
              <div className="relative flex items-center">
                <input
                  className="w-full bg-transparent border-none p-0 text-[16px] leading-6 text-[#e5e2e1] focus:ring-0 placeholder:text-[#353535] focus:outline-none pr-10"
                  id="password"
                  placeholder="••••••••"
                  {...register("password", {
                    required: "PASSWORD IS REQUIRED",
                    minLength: { value: 6, message: "MINIMUM 6 CHARACTERS" },
                  })}
                  type={showPassword ? "text" : "password"}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 text-[#c4c7c7] hover:text-[#e5e2e1] transition-colors cursor-pointer bg-transparent border-none flex items-center"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {errors.password && (
                <p className="text-red-400 text-[10px] tracking-wider uppercase mt-0.5">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div
              className="flex flex-col gap-1 pb-1 transition-colors duration-300 relative group"
              style={{ borderBottom: "1px solid rgba(229, 226, 225, 0.2)" }}
            >
              <label
                className="text-[11px] leading-4 tracking-widest text-[#c4c7c7] font-bold"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                htmlFor="confirmPassword"
              >
                CONFIRM PASSWORD
              </label>
              <div className="relative flex items-center">
                <input
                  className="w-full bg-transparent border-none p-0 text-[16px] leading-6 text-[#e5e2e1] focus:ring-0 placeholder:text-[#353535] focus:outline-none pr-10"
                  id="confirmPassword"
                  placeholder="••••••••"
                  {...register("confirmPassword", {
                    required: "CONFIRM YOUR PASSWORD",
                    validate: (val) =>
                      val === password || "PASSWORDS DO NOT MATCH",
                  })}
                  type={showConfirmPassword ? "text" : "password"}
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-0 text-[#c4c7c7] hover:text-[#e5e2e1] transition-colors cursor-pointer bg-transparent border-none flex items-center"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {showConfirmPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
              {errors.confirmPassword && (
                <p className="text-red-400 text-[10px] tracking-wider uppercase mt-0.5">
                  {errors.confirmPassword.message}
                </p>
              )}
            </div>

            <div className="pt-3">
              <button
                disabled={isSubmitting}
                className="w-full bg-[#c9c6c5] text-[#313030] hover:bg-white transition-colors duration-300 py-3.5 px-6 flex justify-between items-center group cursor-pointer disabled:opacity-50"
                type="submit"
              >
                <span
                  className="text-[12px] leading-4 tracking-widest uppercase font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {isSubmitting ? "CREATING..." : "CREATE ACCOUNT"}
                </span>
                <span className="material-symbols-outlined text-[#313030] group-hover:translate-x-1 transition-transform duration-300">
                  arrow_forward
                </span>
              </button>
            </div>
          </form>

          <div className="mt-8 pt-6 border-t border-[#444748]/20 flex flex-col gap-4">
            <button
              type="button"
              className="cursor-pointer text-[12px] leading-4 tracking-widest text-[#c4c7c7] hover:text-[#e5e2e1] transition-colors duration-200 uppercase bg-transparent border-none text-left"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              onClick={() => setToggle((prev) => !prev)}
            >
              ALREADY HAVE AN ACCOUNT? LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
