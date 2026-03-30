import React from "react";

const Products = () => {
  return (
    <div className="max-w-350 mx-auto mt-20">
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold">Premium Digital Tools</h2>
        <p>
          Choose from our curated collection of premium digital products
          designed <br /> to boost your productivity and creativity.
        </p>
      </div>
      <div className="flex gap-4 justify-center my-10">
        <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white">
          Products
        </button>
        <button className="btn rounded-full">Cart</button>
      </div>
    </div>
  );
};

export default Products;
