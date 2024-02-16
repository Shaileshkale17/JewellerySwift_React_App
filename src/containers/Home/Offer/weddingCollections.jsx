import React, { useEffect, useState } from "react";
import Card from "../../card/Cards";
import "./Offer.css";
import images from "../../../assets/image_container/beautiful-engagement-ring-gemstone-box-260nw-2048190650.webp"
function WeddingCollections({ Title }) {
  const [OfferDatas, setOfferDatas] = useState([]);
  

  useEffect(() => {
    const storedData = localStorage.getItem("DisplayData");
    const DisplayData = JSON.parse(storedData);
    console.log(DisplayData[0].weddingCollections);
    setOfferDatas(DisplayData[0].weddingCollections);
  }, [setOfferDatas]);
  return (
    <div className="container-Offer">
      <div className="container-Offer-box">
        <h1 className="align">{Title}</h1>
        {OfferDatas.length === 0 ? (
          <div className="align">Loading...</div>
        ) : (
          <div className="cardContainer">
            {OfferDatas.map((OfferItem) => (
              <div className="card-offer" key={OfferItem.id}>
                {OfferItem.imageUrl &&
                OfferItem.title &&
                OfferItem.id &&
                OfferItem.date &&
                OfferItem.rating ? (
                  <Card
                    Image={OfferItem.imageUrl}
                    Title={OfferItem.title}
                    Offer={OfferItem.Offer}
                    discountPercentage={OfferItem.offers.discountPercentage}
                    freeShipping={OfferItem.offers.freeShipping}
                    Id={OfferItem.id}
                    Dates={OfferItem.date}
                    RatingVlaue={OfferItem.rating}
                    price={OfferItem.price}
                  />
                ) : (
                  <div>Invalid OfferItem</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default WeddingCollections;
