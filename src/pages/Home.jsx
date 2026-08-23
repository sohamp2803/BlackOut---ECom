import React from "react";

const Home = () => {
  return (
    <div
      className="bg-[#131313] text-[#e5e2e1] antialiased min-h-screen flex flex-col selection:bg-[#c7c9a3] selection:text-[#131313] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] scrollbar-none"
      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
    >
      {/* Hero Section */}
      <main className="grow relative w-full flex items-center bg-[#2a2a2a] overflow-hidden min-h-130 sm:min-h-145 lg:min-h-160">
        {/* Background Image */}
        <img
          alt="High fashion streetwear person"
          className="absolute inset-0 w-full h-full object-cover object-[50%_35%] grayscale opacity-70 select-none"
          src="https://i.pinimg.com/1200x/bb/f6/9c/bbf69ce4bd9b424341b0274972873885.jpg"
        />

        {/* Dynamic Responsive Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-[#131313] via-[#131313]/80 to-transparent sm:bg-linear-to-r sm:from-[#131313] sm:via-[#131313]/75 sm:to-transparent"></div>

        {/* Hero Content */}
        <div className="relative z-10 w-full px-6 sm:px-12 md:px-16 lg:px-24 py-12 flex flex-col items-start justify-center max-w-7xl mx-auto">
          {/* Badge */}
          <span
            className="text-[11px] sm:text-[12px] leading-4 tracking-widest font-bold text-[#c7c9a3] mb-3 sm:mb-4 uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            New Drop
          </span>

          {/* Heading with fluid typography */}
          <h2
            className="text-[44px] sm:text-[68px] md:text-[96px] lg:text-[115px] xl:text-[128px] leading-[0.9] text-[#e5e2e1] uppercase mb-6 sm:mb-8"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            MADE TO
            <br />
            STAND
            <br />
            OUT.
          </h2>

          {/* Action Button */}
          <button
            className="bg-[#e5e2e1] text-[#131313] py-3.5 px-6 sm:py-4 sm:px-8 flex justify-between items-center hover:bg-[#c9c6c5] transition-all duration-200 rounded-none gap-3 sm:gap-4 cursor-pointer active:scale-95"
            type="button"
          >
            <span
              className="text-[11px] sm:text-[12px] leading-4 tracking-widest font-bold uppercase"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Shop Now
            </span>
            <span className="material-symbols-outlined text-[18px] sm:text-[20px]">
              arrow_outward
            </span>
          </button>
        </div>
      </main>

      {/* Yahan aap aage ka section/content add kar sakte ho */}
    </div>
  );
};

export default Home;
