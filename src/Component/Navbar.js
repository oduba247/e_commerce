import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import '../Style/Navbar.css'
const Navbar = ({cartItems}) => {
    let saleInfo = 'Flash Sales!!!!      Flash Sales!!!!       Flash Sales!!!!' 
  return (
    <div>
      <header>
      <a href="/home"> <h1>Tommy</h1></a>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Cart">Cart ({cartItems.length})</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Marquee speed={60} gradient={false} style={{backgroundColor:'pink',color:'blue',width:'80%' ,margin:'auto'}}>
        <h2>{saleInfo}</h2>

      </Marquee>
    </div>
  );
};

export default Navbar;
