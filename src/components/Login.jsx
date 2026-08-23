import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const Login = ({ setToggle }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onBlur" });

  const onSubmit = (data) => {
    setErrorMsg("");
    try {
      login({ email: data.email, password: data.password });
      navigate("/");
    } catch (err) {
      setErrorMsg(err.message || "INVALID EMAIL OR PASSWORD");
    }
  };

  return (
    <div
      className="min-h-screen h-screen w-screen flex flex-col bg-[#131313] text-[#e5e2e1] overflow-hidden"
      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
    >
      <main className="grow flex flex-col md:flex-row h-full overflow-hidden">
        <div className="hidden md:block w-1/2 bg-[#0e0e0e] border-r border-[#444748]/30 h-full relative overflow-hidden">
          <img
            alt=""
            className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125 brightness-75"
            src="https://i.pinimg.com/736x/3e/d0/44/3ed04419b781536856641c53aafccabc.jpg"
          />
        </div>

        <div className="w-full md:w-1/2 flex items-center justify-center p-6 md:p-12 bg-[#0d0d0d] relative overflow-y-auto h-full">
          <div className="w-full max-w-md space-y-8 z-10 my-auto">
            <div className="space-y-2">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <h1
                  className="text-[120px] leading-27.5 tracking-[-0.02em] text-[#c7c9a3] opacity-20 transform -rotate-90 select-none"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  BLAKOUT CO.
                </h1>
              </div>
              <h1
                className="text-[40px] md:text-[52px] leading-tight text-[#e5e2e1]"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                LOGIN
              </h1>
              <p className="text-[16px] leading-6 text-[#c4c7c7]">
                ACCESS YOUR ACCOUNT
              </p>
            </div>

            {errorMsg && (
              <p
                className="text-red-400 text-[12px] tracking-wider uppercase font-semibold border-l-2 border-red-500 pl-2"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {errorMsg}
              </p>
            )}

            <form
              className="space-y-6"
              onSubmit={handleSubmit(onSubmit)}
              noValidate
            >
              <div className="space-y-5">
                <div className="relative group">
                  <input
                    id="email"
                    type="email"
                    placeholder=" "
                    {...register("email", {
                      required: "EMAIL IS REQUIRED",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "INVALID EMAIL FORMAT",
                      },
                    })}
                    className="block w-full border-0 border-b border-[#c4c7c7]/30 focus:border-[#c7c9a3] focus:ring-0 text-[#e5e2e1] text-[16px] py-3 px-0 bg-[#1c1b1b] transition-colors duration-300 peer"
                  />
                  <label
                    htmlFor="email"
                    className="absolute text-[#c4c7c7] text-[11px] leading-4 tracking-widest font-bold top-3 left-0 -translate-y-5 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-[#c7c9a3] transition-all duration-300"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    EMAIL ADDRESS
                  </label>
                  {errors.email && (
                    <p className="text-red-400 text-[10px] mt-1 tracking-wider uppercase">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div className="relative group">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder=" "
                    {...register("password", {
                      required: "PASSWORD IS REQUIRED",
                    })}
                    className="block w-full border-0 border-b border-[#c4c7c7]/30 focus:border-[#c7c9a3] focus:ring-0 text-[#e5e2e1] text-[16px] py-3 pl-0 pr-10 bg-[#1c1b1b] transition-colors duration-300 peer"
                  />
                  <label
                    htmlFor="password"
                    className="absolute text-[#c4c7c7] text-[11px] leading-4 tracking-widest font-bold top-3 left-0 -translate-y-5 scale-75 origin-left peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5 peer-focus:text-[#c7c9a3] transition-all duration-300"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    PASSWORD
                  </label>

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-3 text-[#c4c7c7] hover:text-[#e5e2e1] transition-colors cursor-pointer p-0 bg-transparent border-none flex items-center"
                    aria-label="Toggle password visibility"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? "visibility_off" : "visibility"}
                    </span>
                  </button>

                  {errors.password && (
                    <p className="text-red-400 text-[10px] mt-1 tracking-wider uppercase">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#c9c6c5] text-[#0d0d0d] text-[12px] leading-4 tracking-widest font-bold py-4 rounded-none flex items-center justify-between px-6 hover:bg-[#c7c9a3] transition-colors duration-300 group cursor-pointer disabled:opacity-50"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                <span>{isSubmitting ? "AUTHENTICATING..." : "CONTINUE"}</span>
                <span className="material-symbols-outlined transform group-hover:translate-x-2 transition-transform duration-300">
                  arrow_forward
                </span>
              </button>
            </form>

            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute inset-0 flex items-center"
              >
                <div className="w-full border-t border-[#444748]/30"></div>
              </div>
              <div className="relative flex justify-center">
                <span
                  className="bg-[#0d0d0d] px-4 text-[11px] leading-4 tracking-widest font-bold text-[#c4c7c7]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  DON'T HAVE ACCOUNT?
                </span>
              </div>
            </div>

            <div className="text-center pt-4">
              <button
                type="button"
                onClick={() => setToggle((prev) => !prev)}
                className="cursor-pointer text-[15px] leading-4 tracking-widest font-bold text-[#c4c7c7] hover:text-[#e5e2e1] transition-colors duration-200 uppercase bg-transparent border-none"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                CREATE AN ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
