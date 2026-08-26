import React from "react";
import { useNavigate } from "react-router";
import CurvedLoop from "../components/CurvedLoop";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-[#131313] text-[#e5e2e1] antialiased min-h-screen flex flex-col selection:bg-[#c7c9a3] selection:text-[#131313]"
      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
    >
      <main className="relative w-full flex items-end sm:items-center bg-[#131313] overflow-hidden min-h-[calc(100vh-70px)]">
        <img
          alt="High fashion streetwear person"
          className="absolute inset-0 w-full h-full object-cover object-[60%_20%] sm:object-[50%_35%] grayscale opacity-50 select-none pointer-events-none"
          src="https://i.pinimg.com/1200x/bb/f6/9c/bbf69ce4bd9b424341b0274972873885.jpg"
        />

        <div className="absolute inset-0 bg-linear-to-t from-[#131313] via-[#131313]/70 to-transparent sm:bg-linear-to-r sm:from-[#131313] sm:via-[#131313]/80 sm:to-transparent pointer-events-none"></div>

        <div className="absolute top-8 left-8 text-[#444748] text-sm hidden md:block select-none">
          +
        </div>
        <div className="absolute top-8 right-8 text-[#444748] text-sm hidden md:block select-none">
          +
        </div>
        <div className="absolute bottom-8 right-8 text-[#444748] text-sm hidden md:block select-none">
          +
        </div>

        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex select-none pointer-events-none">
          <span
            className="text-[10px] uppercase tracking-[0.4em] text-[#8e9192]"
            style={{
              writingMode: "vertical-rl",
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            FW // 2026 COLLECTION
          </span>
        </div>

        <div className="relative z-10 w-full px-5 sm:px-12 md:px-16 lg:px-24 pb-12 pt-20 sm:py-16 flex flex-col items-start justify-center max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4 sm:mb-6">
            <span
              className="text-[11px] sm:text-[12px] leading-4 tracking-[0.25em] font-bold text-[#c7c9a3] uppercase border border-[#c7c9a3]/30 px-3 py-1.5 bg-[#131313]/60 backdrop-blur-md"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              New Drop
            </span>
            <span className="h-px w-12 bg-[#444748] hidden sm:block"></span>
          </div>

          <h1
            className="text-[54px] xs:text-[64px] sm:text-[84px] md:text-[105px] lg:text-[128px] leading-[0.88] text-[#e5e2e1] uppercase mb-8 sm:mb-10 tracking-tighter"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            MADE TO
            <br />
            STAND
            <br />
            OUT.
          </h1>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 sm:gap-12 w-full sm:w-auto">
            <button
              onClick={() => navigate("/store")}
              type="button"
              className="w-full sm:w-auto bg-[#e5e2e1] text-[#131313] hover:bg-[#c7c9a3] py-4 px-8 flex justify-between sm:justify-center items-center gap-4 transition-all duration-300 cursor-pointer active:scale-[0.98] shadow-xl group"
            >
              <span
                className="text-[12px] sm:text-[13px] leading-none tracking-[0.15em] font-bold uppercase"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Shop Now
              </span>
              <span className="material-symbols-outlined text-[18px] sm:text-[20px] font-bold transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                arrow_outward
              </span>
            </button>

            <div className="flex items-center gap-6 text-[#c4c7c7] border-l-2 border-[#444748]/50 pl-6 sm:pl-8">
              <div className="flex flex-col">
                <span
                  className="text-2xl sm:text-3xl font-bold text-[#e5e2e1] tracking-tight"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  240
                </span>
                <span
                  className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8e9192]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  GSM Heavyweight
                </span>
              </div>
              <div className="flex flex-col">
                <span
                  className="text-2xl sm:text-3xl font-bold text-[#e5e2e1] tracking-tight"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  100%
                </span>
                <span
                  className="text-[9px] sm:text-[10px] uppercase tracking-widest text-[#8e9192]"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  Authentic Fit
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="w-full bg-[#131313]">
        <CurvedLoop
          marqueeText=" ✦ BLAKOUT CO. ✦ HEAVYWEIGHT GEAR ✦ STREET CULTURE"
          speed={1.5}
          curveAmount={350}
          direction="right"
          interactive={true}
        />
      </section>

      <section className="w-full max-w-7xl mx-auto px-5 sm:px-12 md:px-16 lg:px-24 py-20 sm:py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 sm:mb-16 gap-4">
          <h2
            className="text-[40px] sm:text-[64px] md:text-[80px] leading-[0.9] text-[#e5e2e1] uppercase tracking-tighter"
            style={{ fontFamily: "'Anton', sans-serif" }}
          >
            EXPLORE
            <br />
            THE GEAR.
          </h2>
          <button
            onClick={() => navigate("/store")}
            className="text-[12px] text-[#c4c7c7] hover:text-[#e5e2e1] uppercase tracking-[0.2em] underline underline-offset-8 transition-colors"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            View All Catalog
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          <div
            onClick={() => navigate("/tshirts")}
            className="group relative aspect-4/5 sm:aspect-square md:aspect-4/5 bg-[#1a1a1a] cursor-pointer overflow-hidden border border-[#2a2a2a] hover:border-[#c7c9a3] transition-colors duration-500"
          >
            <img
              src="https://www.bonkerscorner.com/cdn/shop/files/19_960x_crop_center.png"
              alt="Heavyweight Tees"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#131313] via-[#131313]/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <span
                  className="block text-[#c7c9a3] text-[10px] sm:text-[12px] tracking-[0.2em] uppercase mb-2 font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  01 // Category
                </span>
                <h3
                  className="text-3xl sm:text-4xl uppercase text-[#e5e2e1] tracking-tighter"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  Oversized Tees
                </h3>
              </div>
              <span className="material-symbols-outlined text-[#e5e2e1] text-3xl transform group-hover:translate-x-2 transition-transform duration-300">
                arrow_right_alt
              </span>
            </div>
          </div>

          <div
            onClick={() => navigate("/bottoms")}
            className="group relative aspect-4/5 sm:aspect-square md:aspect-4/5 bg-[#1a1a1a] cursor-pointer overflow-hidden border border-[#2a2a2a] hover:border-[#c7c9a3] transition-colors duration-500 mt-0 md:mt-16"
          >
            <img
              src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1785482926_3757469.jpg"
              alt="Utility Cargos"
              className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#131313] via-[#131313]/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
              <div>
                <span
                  className="block text-[#c7c9a3] text-[10px] sm:text-[12px] tracking-[0.2em] uppercase mb-2 font-bold"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  02 // Category
                </span>
                <h3
                  className="text-3xl sm:text-4xl uppercase text-[#e5e2e1] tracking-tighter"
                  style={{ fontFamily: "'Anton', sans-serif" }}
                >
                  Utility Cargos
                </h3>
              </div>
              <span className="material-symbols-outlined text-[#e5e2e1] text-3xl transform group-hover:translate-x-2 transition-transform duration-300">
                arrow_right_alt
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#c7c9a3] text-[#131313] py-20 sm:py-32 px-5 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 sm:gap-20">
          <div className="md:w-1/3">
            <h3
              className="text-[32px] sm:text-[48px] uppercase tracking-tighter leading-none mb-6"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              WE DON'T
              <br />
              DO BASICS.
            </h3>
            <p
              className="text-sm sm:text-base font-medium leading-relaxed max-w-sm"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Blakout is engineered for the bold. High-mobility streetwear built
              with heavy-duty fabrics and raw urban aesthetics. No compromises,
              just raw fits.
            </p>
          </div>
          <div className="md:w-2/3 grid grid-cols-2 gap-4 sm:gap-8">
            <div className="border-t-2 border-[#131313] pt-4">
              <span
                className="block text-4xl sm:text-5xl font-bold mb-2 tracking-wide"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                100%
              </span>
              <span
                className="text-[11px] sm:text-xs font-bold uppercase tracking-widest"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Authentic Quality
              </span>
            </div>
            <div className="border-t-2 border-[#131313] pt-4">
              <span
                className="block text-4xl sm:text-5xl font-bold mb-2 tracking-wide"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                24/7
              </span>
              <span
                className="text-[11px] sm:text-xs font-bold uppercase tracking-widest"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Street Comfort
              </span>
            </div>
            <div className="border-t-2 border-[#131313] pt-4">
              <span
                className="block text-4xl sm:text-5xl font-bold mb-2 tracking-wide"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                0.0
              </span>
              <span
                className="text-[11px] sm:text-xs font-bold uppercase tracking-widest"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Compromise
              </span>
            </div>
            <div className="border-t-2 border-[#131313] pt-4">
              <span
                className="block text-4xl sm:text-5xl font-bold mb-2 tracking-wide"
                style={{ fontFamily: "'Anton', sans-serif" }}
              >
                IND
              </span>
              <span
                className="text-[11px] sm:text-xs font-bold uppercase tracking-widest"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Nationwide Drop
              </span>
            </div>
          </div>
        </div>
      </section>

      <footer className="w-full py-12 sm:py-16 bg-[#0e0e0e] border-t border-[#444748]/20 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 gap-6 mt-auto">
        <div
          className="text-[28px] md:text-[32px] text-[#e5e2e1] uppercase tracking-tighter"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          BLAKOUT.
        </div>
        <div className="flex gap-4 sm:gap-6 flex-wrap justify-center text-[12px] sm:text-[14px]">
          <a
            className="text-[#c4c7c7] hover:text-[#e5e2e1] underline transition-all duration-300 uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            href="#privacy"
          >
            PRIVACY
          </a>
          <a
            className="text-[#c4c7c7] hover:text-[#e5e2e1] underline transition-all duration-300 uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            href="#terms"
          >
            TERMS
          </a>
          <a
            className="text-[#c4c7c7] hover:text-[#e5e2e1] underline transition-all duration-300 uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            href="#contact"
          >
            CONTACT
          </a>
          <a
            className="text-[#c4c7c7] hover:text-[#e5e2e1] underline transition-all duration-300 uppercase"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            href="#shipping"
          >
            SHIPPING
          </a>
        </div>
        <div
          className="text-[12px] sm:text-[14px] text-[#c4c7c7] text-center"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          © 2026 BLAKOUT. ALL RIGHTS RESERVED.
        </div>
      </footer>
    </div>
  );
};

export default Home;
