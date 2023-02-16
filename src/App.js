import Home from "./Component/Home";
import Cart from "./Component/Cart";
import Navbar from "./Component/Navbar";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  const [cartItems,setCartItems] = useState([])
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar cartItems={cartItems} />
        <Routes>
          <Route path="Home" index element={<Home cartItems={cartItems} setCartItems ={setCartItems} />} />

          <Route path="Cart" element={<Cart cartItems={cartItems} setCartItems ={setCartItems} />} />
        </Routes>
      </BrowserRouter>
      <nav>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
