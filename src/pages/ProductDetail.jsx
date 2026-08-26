import React from "react";
import { useNavigate, useLocation } from "react-router";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cartItems, addToCart, updateQuantity } = useCart();

  const product = location.state?.product;

  if (!product) {
    return (
      <div className="min-h-screen bg-[#131313] flex flex-col items-center justify-center text-[#e5e2e1]">
        <h2
          style={{ fontFamily: "'Anton', sans-serif" }}
          className="text-4xl uppercase tracking-widest mb-4"
        >
          Product Not Found
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="border border-[#444748] px-6 py-2 hover:bg-[#e5e2e1] hover:text-[#131313] transition-colors uppercase tracking-widest text-sm"
          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
        >
          Go Back
        </button>
      </div>
    );
  }

  const title = product.title || product.name || "Exclusive Drop";
  const price = product.price;
  const originalPrice = product.compareAtPrice || product.originalPrice;
  const image = product.image;
  const category =
    product.category || product.fit || product.fabric || "Streetwear";

  const cartProduct = cartItems?.find((item) => item.id === product.id);
  const currentQty = cartProduct ? cartProduct.quantity : 0;

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      title: title,
      price: price,
      image: image,
    });
  };

  return (
    <div
      className="bg-[#131313] text-[#e5e2e1] antialiased min-h-screen flex flex-col pt-24 sm:pt-28 md:pt-32 selection:bg-[#c7c9a3] selection:text-[#2f3217]"
      style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
    >
      <main className="max-w-6xl mx-auto w-full px-4 sm:px-6 md:px-16 pb-20 grow">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#c4c7c7] hover:text-[#e5e2e1] mb-8 transition-colors group cursor-pointer w-fit"
        >
          <span className="material-symbols-outlined transform group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          <span
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            className="text-sm font-bold uppercase tracking-widest"
          >
            Back
          </span>
        </button>

        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          <div className="w-full md:w-1/2 bg-[#141414] border border-[#2a2a2a] p-4 flex items-center justify-center relative aspect-4/5">
            {image ? (
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-[#444748] uppercase tracking-widest text-sm">
                No Image Available
              </span>
            )}

            {(product.badge || product.discount) && (
              <div
                className="absolute top-4 right-4 bg-[#0d0d0d] text-[#c9c6c5] text-[12px] tracking-widest font-bold px-3 py-1.5 uppercase border border-[#333]"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                {product.badge || product.discount}
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <span
              className="text-[#c7c9a3] uppercase tracking-widest text-[11px] font-bold mb-3 block"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {category}
            </span>

            <h1
              className="text-4xl md:text-6xl lg:text-7xl uppercase text-[#e5e2e1] leading-[0.9] tracking-tighter mb-6"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              {title}
            </h1>

            <div
              className="flex items-baseline gap-4 mb-8"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-2xl md:text-3xl font-bold text-[#e5e2e1]">
                ₹{price}
              </span>
              {originalPrice && Number(originalPrice) > Number(price) && (
                <span className="text-[#8e9192] line-through text-lg">
                  ₹{originalPrice}
                </span>
              )}
            </div>

            <p className="mb-10 text-[#c4c7c7] text-sm md:text-[15px] leading-relaxed max-w-lg border-l-2 border-[#c7c9a3] pl-4">
              Engineered for high-mobility streetwear. This premium piece
              delivers an oversized aesthetic with raw urban style. Limited
              drop, built to last.
            </p>

            <div className="w-full max-w-sm">
              {currentQty === 0 ? (
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full bg-[#e5e2e1] text-[#131313] hover:bg-[#c7c9a3] border border-[#e5e2e1] hover:border-[#c7c9a3] py-4 px-6 flex items-center justify-center gap-3 transition-colors duration-300 active:scale-[0.98] cursor-pointer"
                >
                  <span className="material-symbols-outlined">
                    shopping_bag
                  </span>
                  <span
                    className="font-bold uppercase tracking-widest text-sm"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    Add To Cart
                  </span>
                </button>
              ) : (
                <div className="flex items-center justify-between border border-[#444748] bg-[#141414] py-2 px-4 w-full">
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, currentQty - 1)}
                    className="text-[#c4c7c7] hover:text-[#e5e2e1] w-10 h-10 flex items-center justify-center text-2xl font-bold cursor-pointer"
                  >
                    -
                  </button>
                  <span
                    className="text-lg font-bold text-[#e5e2e1] select-none"
                    style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                  >
                    {currentQty}
                  </span>
                  <button
                    type="button"
                    onClick={() => updateQuantity(product.id, currentQty + 1)}
                    className="text-[#c4c7c7] hover:text-[#e5e2e1] w-10 h-10 flex items-center justify-center text-2xl font-bold cursor-pointer"
                  >
                    +
                  </button>
                </div>
              )}
            </div>

            <div
              className="mt-12 pt-8 border-t border-[#444748]/20 flex flex-col gap-4 text-[11px] md:text-xs text-[#8e9192] uppercase tracking-widest"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-base">
                  local_shipping
                </span>{" "}
                Free Shipping Across India
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-base">
                  assignment_return
                </span>{" "}
                7 Days Easy Returns
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-base">
                  verified
                </span>{" "}
                100% Authentic Quality
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
