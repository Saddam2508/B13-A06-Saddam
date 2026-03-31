import React, { use, useEffect, useState } from "react";
import Product from "./Product";

const AllProducts = ({ productsPromise }) => {
  const [products, setProducts] = useState([]);
  const productsData = use(productsPromise);
  useEffect(() => {
    setProducts(productsData);
  }, [productsData]);

  return (
    <div className="grid grid-cols-3 gap-6  p-10 mt-10">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
