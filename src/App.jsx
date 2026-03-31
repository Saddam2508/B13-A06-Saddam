import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";

import "./App.css";
import ActiveUsers from "./components/ActiveUsers";
import Banner from "./components/Banner";
import GetStarted from "./components/GetStarted";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Products from "./components/Products";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Count from "./components/Count";


const pricingDataFun = async () => {
  const response = await fetch("/pricing.json");
  return response.json();
};
const productsDataFun = async () => {
  const response = await fetch("/products.json");
  return response.json();
};

const pricingPromise = pricingDataFun();
const productsPromise = productsDataFun();

function App() {
  const [cart, setCart] = useState([]);
  return (
    <>
    <ToastContainer />
      <Navbar cart={cart} />
      <Banner />
      <ActiveUsers />
      <Suspense fallback={<div>Loading...</div>}>
        <Products
          productsPromise={productsPromise}
          cart={cart}
          setCart={setCart}
        />
      </Suspense>
      <GetStarted />
      <Suspense fallback={<div>Loading...</div>}>
        <Pricing pricingPromise={pricingPromise} />
      </Suspense>
      <Workflow />
      <Footer />
    </>
  );
}

export default App;
