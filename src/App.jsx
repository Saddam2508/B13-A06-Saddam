import { Suspense } from "react";
import "./App.css";
import ActiveUsers from "./components/ActiveUsers";
import Banner from "./components/Banner";
import GetStarted from "./components/GetStarted";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Products from "./components/Products";

const pricingDataFun = async () => {
  const response = await fetch("/pricing.json");
  return response.json();
};

const pricingPromise = pricingDataFun();

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ActiveUsers />
      <Products />
      <GetStarted />
      <Suspense fallback={<div>Loading...</div>}>
        <Pricing pricingPromise={pricingPromise} />
      </Suspense>
    </>
  );
}

export default App;
