import React from "react";

const Product = ({ product }) => {
  return (
    <div
      className={
        "rounded-xl shadow-md  p-10  space-y-3 relative flex flex-col border-2 border-gray-100"
      }
    >
      <div className="space-y-3">
        <img
          src={product.image}
          alt={product.title}
          className={"w-12 h-12 mb-5 rounded-full border-2 border-gray-300 p-2"}
        />

        <h3 className={"text-2xl  font-bold"}>{product.title}</h3>
        <p className={"text-gray-500"}>{product.description}</p>
        <p>
          {" "}
          <span className={" text-xl font-bold"}>${product.price}</span>/
          {product.billing}
        </p>
      </div>
      <div className="flex-1">
        {product.features.map((feature, index) => (
          <p key={index} className="flex items-center space-x-2">
            <span className={"text-green-500"}>✓</span>
            <span
              className={product.highlight ? "text-white" : "text-gray-600"}
            >
              {feature}
            </span>
          </p>
        ))}
      </div>
      <button
        className={
          "bg-[#4F39F6] text-white px-6 py-2 rounded-full font-bold mt-2"
        }
      >
        {product.buttonText}
      </button>
      {product.tag && (
        <div
          className={`absolute right-3 top-3 ${
            product.tag.toLowerCase() === "best seller"
              ? "bg-amber-100 text-amber-500"
              : product.tag.toLowerCase() === "new"
                ? "bg-green-100 text-green-500"
                : product.tag.toLowerCase() === "popular"
                  ? "bg-purple-100 text-purple-500"
                  : ""
          } px-2 py-1 rounded-full transform font-bold`}
        >
          {product.tag}
        </div>
      )}
    </div>
  );
};

export default Product;
