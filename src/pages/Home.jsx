import React from "react";

const Home = () => {
  return (
    <div
      className="bg-[#131313] text-[#e5e2e1] antialiased min-h-screen flex flex-col selection:bg-[#c7c9a3] selection:text-[#131313]"
      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
    >
      {/* Hero Section */}
      <main className="grow relative w-full flex items-end sm:items-center bg-[#131313] overflow-hidden min-h-[calc(100vh-70px)]">
        {/* Background Image */}
        <img
          alt="High fashion streetwear person"
          className="absolute inset-0 w-full h-full object-cover object-[60%_20%] sm:object-[50%_35%] grayscale opacity-60 select-none pointer-events-none"
          src="https://i.pinimg.com/1200x/bb/f6/9c/bbf69ce4bd9b424341b0274972873885.jpg"
        />

        {/* Gradient Overlay for Mobile & Desktop */}
        <div className="absolute inset-0 bg-linear-to-t from-[#131313] via-[#131313]/70 to-transparent sm:bg-linear-to-r sm:from-[#131313] sm:via-[#131313]/80 sm:to-transparent pointer-events-none"></div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-5 sm:px-12 md:px-16 lg:px-24 pb-12 pt-20 sm:py-16 flex flex-col items-start justify-center max-w-7xl mx-auto">
          {/* Badge */}
          <span
            className="text-[11px] sm:text-[12px] leading-4 tracking-[0.25em] font-bold text-[#c7c9a3] mb-2 sm:mb-4 uppercase border border-[#c7c9a3]/30 px-2.5 py-1 bg-[#131313]/40 backdrop-blur-sm"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            New Drop
          </span>

          {/* Heading */}
          <h1
            className="text-[54px] xs:text-[64px] sm:text-[84px] md:text-[105px] lg:text-[128px] leading-[0.88] text-[#e5e2e1] uppercase mb-6 sm:mb-8 tracking-tighter"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            MADE TO
            <br />
            STAND
            <br />
            OUT.
          </h1>

          {/* Action Button */}
          <button
            type="button"
            className="w-full sm:w-auto bg-[#e5e2e1] text-[#131313] hover:bg-[#c7c9a3] py-4 px-8 flex justify-between sm:justify-center items-center gap-4 transition-all duration-200 cursor-pointer active:scale-95 shadow-xl"
          >
            <span
              className="text-[12px] sm:text-[13px] leading-none tracking-[0.15em] font-bold uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Shop Now
            </span>
            <span className="material-symbols-outlined text-[18px] sm:text-[20px] font-bold">
              arrow_outward
            </span>
          </button>
        </div>
      </main>
    </div>
  );
};

export default Home;
