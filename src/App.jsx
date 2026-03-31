import { Suspense } from "react";
import "./App.css";
import ActiveUsers from "./components/ActiveUsers";
import Banner from "./components/Banner";
import GetStarted from "./components/GetStarted";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Products from "./components/Products";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";

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
  return (
    <>
      <Navbar />
      <Banner />
      <ActiveUsers />
      <Suspense fallback={<div>Loading...</div>}>
        <Products productsPromise={productsPromise} />
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
