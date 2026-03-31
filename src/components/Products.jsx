import React, { useState } from "react";

import Cart from "./Cart";
import AllProducts from "./AllProdcuts";

const Products = ({ productsPromise, cart, setCart }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="max-w-350 mx-auto mt-8 md:mt-20">
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
        <p>
          Choose from our curated collection of premium digital products
          designed <br className="hidden sm:hidden md:block"/> to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex gap-4 justify-center my-10">
        <button
          onClick={() => setToggle(true)}
          className={
            toggle
              ? "btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white"
              : "btn rounded-full"
          }
        >
          Products
        </button>
        <button
          onClick={() => setToggle(false)}
          className={
            !toggle
              ? "btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white"
              : "btn rounded-full"
          }
        >
          Cart ({cart.length})
        </button>
      </div>
      {toggle ? (
        <AllProducts
          productsPromise={productsPromise}
          cart={cart}
          setCart={setCart}
        />
      ) : (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
};

export default Products;
