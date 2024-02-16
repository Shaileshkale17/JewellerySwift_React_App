import React from "react";
import "./SiderFuncgtions.css";
import { Rating } from "@mui/material";
import { Stack } from "@mui/material";
function SiderFuncgtions() {
  return (
    <div className="Functions">
      <ul>
        <li className="star"><input type="checkbox" name="All_deals" id="" /> All deals</li>
        <li className="star"><input type="checkbox" name="Available" id="" /> Available</li>
        <li className="star"><input type="checkbox" name="Upcoming" id="" /> Upcoming</li>
        <li className="star"><input type="checkbox" name="Watchlist" id="" /> Watchlist</li>
        <li className="star">
          <h2>Price</h2>
        </li>
        <li className="star">All</li>
        <li className="star"><input type="checkbox" name="₹500" id="" /> Under ₹500</li>
        <li className="star"><input type="checkbox" name="₹1000" id="" /> ₹500 to ₹1,000</li>
        <li className="star"><input type="checkbox" name="₹2000" id="" /> ₹1,000 to ₹2,000</li>
        <li className="star"><input type="checkbox" name="₹5000" id="" /> ₹2,000 to ₹5,000</li>
        <li className="star"><input type="checkbox" name="₹About" id="" /> ₹5,000 and Above</li>
        <li className="star">
          <h2>Discount</h2>
        </li>
        <li className="star">All deals</li>
        <li className="star"><input type="checkbox" name="10%_off_or_more" id="" /> 10% off or more</li>
        <li className="star"><input type="checkbox" name="25%_off_or_more" id="" /> 25% off or more</li>
        <li className="star"><input type="checkbox" name="50%_off_or_more" id="" /> 50% off or more</li>
        <li className="star"><input type="checkbox" name="70%_off_or_more" id="" /> 70% off or more</li>
        <li className="star">
          <h2>Average Customer Review</h2>
        </li>
        <li className="star">
        <input type="checkbox" name="Rating_4.5" id="" /> <Stack spacing={0}>
            <Rating
              name="half-rating-read"
              defaultValue={4.5}
              precision={0.5}
              readOnly
            />
          </Stack>
          and up
        </li>
        <li className="star">
        <input type="checkbox" name="Rating_3.5" id="" /> <Stack spacing={0}>
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              readOnly
            />
          </Stack>
          and up
        </li>
        <li className="star">
        <input type="checkbox" name="Rating_2.5" id="" /> <Stack spacing={0}>
            <Rating
              name="half-rating-read"
              defaultValue={2.5}
              precision={0.5}
              readOnly
            />
          </Stack>
          and up
        </li>
        <li className="star">
        <input type="checkbox" name="Rating_0.5" id="" /> <Stack spacing={0}>
            <Rating
              name="half-rating-read"
              defaultValue={0.5}
              precision={0.5}
              readOnly
            />
          </Stack>
          and up
        </li>
        <li className="star">
          <h2>Deal type</h2>
        </li>
        <li className="star"><input type="checkbox" name="All_deals" id="" /> All deals</li>
        <li className="star"><input type="checkbox" name="Deal_of_the_day" id="" /> </li>
        <li className="star"><input type="checkbox" name="Lightning_deal" id="" /> Lightning deal</li>
        <li className="star">
          <h2>Best deal</h2>
        </li>
        <li className="star"><input type="checkbox" name="Programmes" id="" /> Prime Programmes</li>
        <li className="star"><input type="checkbox" name="eligible" id="" /> Prime eligible</li>
        <li className="star"><input type="checkbox" name="Early_Access_deals" id="" /> Prime Early Access deals</li>
        <li className="star"><input type="checkbox" name="Exclusive_deals" id="" /> Prime Exclusive deals</li>
      </ul>
       
    </div>
  );
}

export default SiderFuncgtions;
