import "./App.css";
import ActiveUsers from "./components/ActiveUsers";
import Banner from "./components/Banner";
import GetStarted from "./components/GetStarted";
import Navbar from "./components/Navbar";
import Products from "./components/Products";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <ActiveUsers />
      <Products />
      <GetStarted />
    </>
  );
}

export default App;
