import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdLocalPhone } from "react-icons/md";
import NavberTopLift from "./NavberTopLift";
import NavberTopRight from "./NavberTopRight";
import "./Header.css";
import Navber_Main from "./Navber_Main";

function Header() {
  return (
    <div className="Main_Navber">
      <div className="Navber">
        <div className="Lift-side">
          <NavberTopLift />
        </div>
        <div className="Maide-side">
          <img
            src="https://shaileshkale17.github.io/JewellerySwift/image/jewellery_swift.png"
            alt=""
          />
        </div>
        <div className="Right-side">
          <NavberTopRight />
        </div>
      </div>
      <Navber_Main/>
    </div>
  );
}

export default Header;
