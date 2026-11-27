import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Pricing from "./Routes/Pricing";
import Product from "./Routes/Product";
import Review from "./Routes/Review";
import Contact from "./Routes/Contact";
import Service from "./Routes/Service";
import Cart from "./Cart/Cart";


function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/about" element={<About/>} exact/>
          <Route path="/pricing" element={<Pricing/>} exact/>
          <Route path="/product" element={<Product/>} exact/>
          <Route path="/service" element={<Service/>} exact/>
          <Route path="/review" element={<Review/>} exact/>
          <Route path="/contact" element={<Contact/>} exact/>
          <Route path="/cart" element={<Cart/>} exact/>
        </Routes>
    </div>
  );
}

export default App;
