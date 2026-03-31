import React from "react";
import { ShoppingCart } from "lucide-react";

export default function CartIconWithBadge({ itemCount, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative p-2 hover:bg-gray-100 rounded-full transition-colors"
    >
      <ShoppingCart size={24} strokeWidth={2} className="cursor-pointer"/>

      {itemCount > 0 && (
        <div
          className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold 
                        w-5 h-5 flex items-center justify-center rounded-full border-2 border-white"
        >
          {itemCount > 99 ? "99+" : itemCount}
        </div>
      )}
    </button>
  );
}
