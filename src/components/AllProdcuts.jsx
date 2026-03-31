import React, { use, useEffect, useState } from "react";
import Product from "./Product";

const AllProducts = ({ productsPromise, cart, setCart }) => {
  const [products, setProducts] = useState([]);
  const productsData = use(productsPromise);
  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6  p-10 mt-10">
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </div>
  );
};

export default AllProducts;
