import React from "react";
import './Navber_Main.css'
function Navber_Main() {
  return (
    <div>
      <div className="Changing_page">
        <ul>
          <li class="color_li">
            <a href="/">HOME</a>
          </li>
          <li class="color_li">
            <a href="/Trending">TRENDING</a>
          </li>
          <li class="color_li">
            <a href="/Bridal">BRIDAL</a>
          </li>
          <li class="color_li">
            <a href="/Designers">DESIGNERS</a>
          </li>
          <li class="color_li">
            <a href="/TimePieces">TIMEPIECES</a>
          </li>
          <li class="color_li">
            <a href="/Jewellery">JEWELLERY</a>
          </li>
          <li class="color_li">
            <a href="/Services">SERVICES</a>
          </li>
          <li class="color_li">
            <a href="/Contact">CONTACT</a>
          </li>
          <li class="color_li">
            <a href="/About">ABOUT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navber_Main;
