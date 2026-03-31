import React from "react";
import { ShoppingCart } from "lucide-react";

const Cart = ({ cart, setCart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  const handleRemove = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const handleCheckout = ()=>{
    setCart([])
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Your Cart</h2>
      <div className="py-15 rounded-xl bg-white p-6  border-2 border-gray-100">
        {cart.length > 0 ? (
          <div>
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center p-6 bg-gray-50 rounded-lg mb-4 shadow-md"
              >
                <div className="flex items-center justify-center gap-5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10 object-contain"
                  />
                  <div>
                    <h3>{item.title}</h3>
                    <p>${item.price}</p>
                  </div>
                </div>
                <div>
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="btn text-red-500 font-bold text-xl bg-transparent"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-between items-center px-6 ">
              <p>Total</p>
              <p className="text-xl font-bold">${total.toFixed(2)}</p>
            </div>
            <button onClick={handleCheckout} className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] w-full rounded-full text-white my-5">Proceed to Checkout</button>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center gap-6">
            <ShoppingCart size={50} strokeWidth={2} />
            <p>Your cart is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
