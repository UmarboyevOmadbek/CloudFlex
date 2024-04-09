import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

//img
import Cloudc from "../../Assets/Icon/CLOUD FLEX.png";
import Earth1 from "../../Assets/Img/earth 1.png";

export const Navbar = () => {
  return (
    <>
      <div id="Navbar">
        <div id="Left">
          <div id="a1">
            <NavLink to="/">
              <img src={Cloudc} alt="Cloud" />
            </NavLink>
          </div>
          <NavLink to="/about_us">
            <p>about us</p>
          </NavLink>
          <NavLink to="/contact">contact</NavLink>
        </div>
        <div id="Right">
          <div id="a2">
            <NavLink to="/Portfolios">
              <h2>Portfolios</h2>
            </NavLink>
          </div>
          <div id="a3">
            <NavLink to="https://t.me/only_music_alone">
              <img src={Earth1} alt="Earth" />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
