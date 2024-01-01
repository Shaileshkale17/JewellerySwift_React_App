import React from "react";
import "./Card.css";
import { Rating } from "@mui/material";
import { Stack } from "@mui/material";
function Card({ Image, Title, Offer, Id, Dates, RatingVlaue }) {
  return (
    <div>
      <div className="card-box" key={Id}>
        <img src={Image} alt={Title} />
        <div className="upcoming_jewellery-box-text">
          <h5>{Offer}</h5>
          <h3>{Title}</h3>
        </div>
        <div className="like">
          <div className="Dates">{Dates.lingth == "" ? "new" : Dates}</div>
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
    </div>
  );
}

export default Card;
