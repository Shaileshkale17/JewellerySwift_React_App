import React, { useEffect, useState } from "react";
import Card from "../../card/card";
import "./Offer.css";


function Offer({Title}) {
  const [OfferDatas, setOfferDatas] = useState([]);
  useEffect(() => {
    const OfferData = JSON.parse(localStorage.getItem("OfferData")) || [];

    setOfferDatas(OfferData);
  }, [setOfferDatas]);

  console.log(OfferDatas);
  return (
      <div className="container-Offer">
        <div className="container-Offer-box">
          <h1 className="align">{Title}</h1>
          {OfferDatas.length === 0 ? (
            <div className="align">Loading...</div>
          ) : (
            <div className="cardContainer">
           { OfferDatas.map((OfferItem) => (
              <div className="card-offer" key={OfferItem.id}>
                {OfferItem.url && OfferItem.title && OfferItem.Offer && OfferItem.id && OfferItem.Dates && OfferItem.Rating ? (
                  <Card
                    Image={OfferItem.url}
                    Title={OfferItem.title}
                    Offer={OfferItem.Offer}
                    Id={OfferItem.id}
                    Dates={OfferItem.Dates}
                    RatingVlaue={OfferItem.Rating}
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

export default Offer;
