import React from "react";
import { hotWheelsTshirts } from "../data/hotWheelsTshirts";
import { useCart } from "../context/CartContext";
import TextLoop from "../components/TextLoop";
import { useNavigate } from "react-router";

const Tshirts = () => {
  const navigate = useNavigate();
  const { cartItems, addToCart, updateQuantity } = useCart();

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      title: item.name,
      price: item.price,
      image: item.image,
    });
  };

  return (
    <div
      className="bg-[#131313] text-[#e5e2e1] antialiased min-h-screen flex flex-col pt-20 sm:pt-24 md:pt-28 selection:bg-[#c7c9a3] selection:text-[#2f3217]"
      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
    >
      <main className="max-w-360 mx-auto w-full px-3 sm:px-5 md:px-16 pb-16 grow">
        <header className="pt-4 pb-8 sm:py-12 md:py-16 border-b border-[#444748]/20 mb-8 sm:mb-12">
          <div>
            <h1
              className="text-[40px] sm:text-[64px] md:text-[120px] leading-none text-[#e5e2e1] uppercase mb-4 tracking-tighter"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              HOT WHEELS TEES
            </h1>
            <p className="text-[13px] sm:text-[16px] md:text-[18px] text-[#c4c7c7] max-w-2xl">
              Official drop. 240 GSM Heavyweight oversized t-shirts built for
              speed and street aesthetics.
            </p>
          </div>
        </header>

        <div className="w-full">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
            {hotWheelsTshirts.map((item) => {
              const cartProduct = cartItems?.find(
                (cartItem) => cartItem.id === item.id,
              );
              const currentQty = cartProduct ? cartProduct.quantity : 0;

              return (
                <div
                  key={item.id}
                  className="group relative flex flex-col justify-between bg-[#181818] border border-[#2a2a2a] p-2.5 sm:p-3.5 hover:border-[#444748] transition-colors duration-300"
                >
                  <div
                    className="cursor-pointer"
                    onClick={() =>
                      navigate(`/detail/${item.id}`, {
                        state: { product: item },
                      })
                    }
                  >
                    <div className="relative w-full aspect-4/5 bg-[#141414] overflow-hidden mb-3 flex items-center justify-center">
                      {item.image ? (
                        <img
                          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500 ease-out"
                          src={item.image}
                          alt={item.name}
                        />
                      ) : (
                        <span className="text-[#444748] text-[10px] sm:text-xs uppercase tracking-widest">
                          No Image
                        </span>
                      )}

                      {item.discount && (
                        <div
                          className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 bg-[#0d0d0d] text-[#c9c6c5] text-[9px] sm:text-[11px] tracking-widest font-bold px-1.5 py-0.5 uppercase"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {item.discount}
                        </div>
                      )}
                    </div>

                    <h4 className="text-[13px] sm:text-[15px] text-[#e5e2e1] font-medium mb-1 uppercase tracking-wide truncate">
                      {item.name}
                    </h4>

                    <div
                      className="flex items-baseline gap-1.5 sm:gap-2 text-[12px] sm:text-[14px] mb-3"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      <span className="text-[#e5e2e1] font-semibold">
                        ₹{item.price}
                      </span>
                      {item.originalPrice &&
                        Number(item.originalPrice) > Number(item.price) && (
                          <span className="text-[#8e9192] line-through text-[10px] sm:text-[12px]">
                            ₹{item.originalPrice}
                          </span>
                        )}
                    </div>
                  </div>

                  {currentQty === 0 ? (
                    <button
                      type="button"
                      onClick={() => handleAddToCart(item)}
                      className="w-full bg-[#202020] hover:bg-[#e5e2e1] text-[#e5e2e1] hover:text-[#131313] border border-[#333333] hover:border-[#e5e2e1] py-2 sm:py-3 px-2 sm:px-4 flex items-center justify-center gap-1.5 sm:gap-2 transition-all duration-200 cursor-pointer active:scale-[0.98]"
                    >
                      <span className="material-symbols-outlined text-[15px] sm:text-[18px]">
                        shopping_bag
                      </span>
                      <span
                        className="text-[10px] sm:text-[12px] font-bold tracking-wider sm:tracking-widest uppercase truncate"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        Add To Cart
                      </span>
                    </button>
                  ) : (
                    <div className="flex items-center justify-between border border-[#333333] bg-[#141414] py-1.5 px-3 w-full">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, currentQty - 1)}
                        className="text-[#c4c7c7] hover:text-[#e5e2e1] w-7 h-7 flex items-center justify-center text-base font-bold active:scale-90 select-none cursor-pointer"
                      >
                        -
                      </button>
                      <span
                        className="text-[13px] font-semibold text-[#e5e2e1] select-none"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {currentQty}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, currentQty + 1)}
                        className="text-[#c4c7c7] hover:text-[#e5e2e1] w-7 h-7 flex items-center justify-center text-base font-bold active:scale-90 select-none cursor-pointer"
                      >
                        +
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <div className="w-full pb-8 overflow-hidden bg-[#131313]">
        <TextLoop
          text="HOT WHEELS TEES"
          shape="wave"
          speed={210}
          direction="forward"
          separator="✦"
          curviness={0}
          fontSize={58}
          fontWeight={800}
          letterSpacing={2}
          uppercase
          color="#ffffff"
          ribbon
          ribbonColor="#5227FF"
          ribbonWidth={0}
          pauseOnHover
        />
      </div>

      <footer className="w-full py-12 sm:py-16 bg-[#0e0e0e] border-t border-[#444748]/20 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 gap-6">
        <div
          className="text-[28px] md:text-[32px] text-[#e5e2e1] uppercase tracking-tighter"
          style={{ fontFamily: "'Anton', sans-serif" }}
        >
          BLAKOUT.
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

export default Tshirts;
