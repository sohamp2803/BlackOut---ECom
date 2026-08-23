import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useCart } from "../context/CartContext";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cartItems = [], updateQuantity, cartCount = 0 } = useCart();

  // Esc key press karne par drawer close ho jaye
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden"; // background scroll lock
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Subtotal calculation
  const subtotal = cartItems.reduce((acc, item) => {
    const priceNum = Number(String(item.price).replace(/[^0-9.]/g, "")) || 0;
    return acc + priceNum * (item.quantity || 1);
  }, 0);

  const drawerContent = (
    <div className="fixed inset-0 z-9999 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity cursor-pointer"
        onClick={onClose}
      />

      {/* Drawer Body */}
      <aside
        className="relative w-full max-w-md bg-[#131313] border-l border-[#2a2a2a] text-[#e5e2e1] h-full flex flex-col shadow-2xl z-10000"
        style={{ fontFamily: "'Hanken Grotesk', sans-serif" }}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-[#2a2a2a] bg-[#131313]">
          <div className="flex items-baseline gap-2">
            <h2
              className="text-2xl uppercase tracking-tighter text-[#e5e2e1]"
              style={{ fontFamily: "'Anton', sans-serif" }}
            >
              YOUR CART
            </h2>
            <span
              className="text-xs text-[#c7c9a3] font-bold"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              ({cartCount} ITEMS)
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors cursor-pointer p-1"
          >
            <span className="material-symbols-outlined text-[24px]">close</span>
          </button>
        </div>

        {/* Items List */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <span className="material-symbols-outlined text-5xl text-[#444748] mb-3">
                shopping_bag
              </span>
              <p
                className="text-gray-400 uppercase text-xs tracking-widest"
                style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              >
                Your bag is empty
              </p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 bg-[#181818] border border-[#2a2a2a] rounded-sm"
              >
                <div className="w-20 h-24 bg-[#141414] overflow-hidden shrink-0 border border-[#222]">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title || item.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-[10px] text-gray-500">
                      No Image
                    </div>
                  )}
                </div>

                <div className="flex flex-col justify-between flex-1 min-w-0">
                  <div>
                    <h4 className="text-xs sm:text-sm font-semibold text-[#e5e2e1] truncate uppercase">
                      {item.title || item.name}
                    </h4>
                    <p
                      className="text-[#c7c9a3] font-bold text-sm mt-0.5"
                      style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                    >
                      ₹{item.price}
                    </p>
                  </div>

                  {/* Quantity & Delete */}
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border border-[#333333] bg-[#141414]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-2 py-0.5 text-gray-400 hover:text-white text-xs active:scale-90 cursor-pointer"
                      >
                        -
                      </button>
                      <span
                        className="px-2 text-xs font-semibold text-[#e5e2e1]"
                        style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-2 py-0.5 text-gray-400 hover:text-white text-xs active:scale-90 cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, 0)}
                      className="text-gray-500 hover:text-red-400 text-xs transition-colors cursor-pointer"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        delete
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-6 border-t border-[#2a2a2a] bg-[#111111]">
            <div
              className="flex justify-between items-baseline mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              <span className="text-xs uppercase tracking-widest text-gray-400">
                Subtotal
              </span>
              <span className="text-xl font-bold text-[#e5e2e1]">
                ₹{subtotal.toLocaleString()}
              </span>
            </div>
            <button
              type="button"
              onClick={() => alert("Proceeding to Checkout...")}
              className="w-full bg-[#c7c9a3] hover:bg-[#b5b88e] text-[#131313] py-3 text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer rounded-sm active:scale-[0.99]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Checkout Now
            </button>
          </div>
        )}
      </aside>
    </div>
  );

  return typeof document !== "undefined"
    ? createPortal(drawerContent, document.body)
    : null;
};

export default CartDrawer;