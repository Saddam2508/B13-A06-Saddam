import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
const Product = ({ product, cart, setCart }) => {
  const [buttonText, setButtonText] = useState(product.buttonText);
  const handleClick = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setButtonText("Already in Cart");
      toast.warning("Already in Cart")
      return;
    }
    setCart([...cart, product]);
    setButtonText("Added to Cart");
    toast.success("Added to Cart")
  };

  return (
    <motion.div  initial={{opacity: 0, y: 100}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 2}}
      className={
        "rounded-xl shadow-md  p-10  space-y-3 relative flex flex-col border-2 border-gray-100 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-105 hover:shadow-xl"
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
        onClick={() => handleClick(product)}
        className={`text-white px-6 py-2 rounded-full font-bold mt-2 cursor-pointer ${buttonText === "Added to Cart" || buttonText === "Already in Cart" ? "bg-green-500" : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] "}`}
      >
        {buttonText === "Added to Cart" || buttonText === "Already in Cart"
          ? "✓ " + buttonText
          : buttonText}
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
    </motion.div>
  );
};

export default Product;
