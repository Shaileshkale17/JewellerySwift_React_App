import React from "react";
import AddTOcard from "../AddToCart/AddTOCart";
import UserLogin from "../User/UserLogin";

function NavberTopRight() {
  return (
    <div className="card_user">
      <div className="CardMain">
        <AddTOcard />
      </div>
      <div className="UserMain">
        <UserLogin />
      </div>
    </div>
  );
}

export default NavberTopRight;
