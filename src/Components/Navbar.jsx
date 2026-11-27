import Logo from "../Assets/logo.jpg";
import { Link } from "react-router-dom";
import "../Styles/Navbar.css";
import { useSelector } from "react-redux";
import React from "react";

function Navbar()
{
      const item = useSelector((state) => state.cart);

    return(
         <div className="navbar">
                <div className="title">
                    <img src={Logo} title="narayans_yard" alt="Narayans_Yard"/>
                </div>
                <div className="navInfo">
                   <ul>
                    <li>
                        <Link to="/" className="navLink">Home</Link>
                    </li>
                                        <li>
                        <Link to="/about" className="navLink">About</Link>
                    </li>
                    <li>
                        <Link to="/pricing" className="navLink">Pricing</Link>
                    </li>
                    <li>
                        <Link to="/product" className="navLink">Product</Link>
                    </li>
                    <li>
                        <Link to="/service" className="navLink">Service</Link>
                    </li>
                    <li>
                        <Link to="/review" className="navLink">Review</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="navLink">Contact</Link>
                    </li>
                    <li>
                        <Link to="/cart" className="navLink">
                          <i className="fas fa-shopping-cart"></i>
                            <span>{item.length}</span>
                        </Link>
                    </li>
                   </ul>
                </div>
            </div>
    )
}
export default Navbar;