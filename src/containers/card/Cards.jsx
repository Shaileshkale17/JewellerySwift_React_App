import React, { useEffect, useState } from "react";
import "./Card.css";
import { Rating } from "@mui/material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
function Card({
  Image,
  Title,
  Offer,
  discountPercentage = "0",
  freeShipping = "freeShipping",
  Id,
  Dates = Date.toString,
  RatingVlaue,
  price = "100",
}) {
  const [discount, setdiscount] = useState(0);

  const discountprice = (discountPercentage, price) => {
    if (discountPercentage !== undefined && freeShipping !== undefined) {

      let calculator = Math.abs( Math.round(
        price - (price / discountPercentage) * 100,
        2
      ));

      setdiscount(calculator);
    }
  };
  useEffect(() => {
    discountprice(discountPercentage, price);
  }, [discountprice]);

  return (
    <div>
      <Link to={String(Id)} className="linkClass">
        <div className="card-box" key={Id}>
          <img src={Image} alt={Title} />
          <div className="upcoming_jewellery-box-text">
            <div className="MainPrice">
              <div>
                <p>Discount: {discountPercentage}%</p>
              </div>
              <div>
                <p className={discountPercentage !== "" ? "textdecoration" : ""}>
                  M.R.P ₹{price}
                </p>
                <h4>Price: ₹{discount}</h4>
              </div>
            </div>
            <h3>{Title}</h3>
          </div>
          <div className="like">
            <div className="Dates">{Dates.length == "" ? "new" : Dates}</div>
            <div className="star">
              <Stack spacing={0}>
                <Rating
                  name="half-rating-read"
                  defaultValue={RatingVlaue}
                  precision={0.5}
                  readOnly
                />
              </Stack>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
