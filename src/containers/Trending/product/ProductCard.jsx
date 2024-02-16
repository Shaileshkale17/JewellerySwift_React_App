import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import Card from "../../card/Cards";
import "../../loader/Loader"
import Thisimage from "../../../assets/image_container/pexels-photo-1454171.webp";
import Loader from "../../loader/Loader";
function ProductCard({ Title = "title" }) {
  const [ProductCard, setProductCard] = useState([]);
  const [search, setsearch] = useState('');
  useEffect(() => {
    const DataBase = JSON.parse(localStorage.getItem("jewelryItems"));
    setProductCard(DataBase[0].jewelryItems);
  }, [setProductCard]);

  return (
    <div className="product">
      <h1>{Title}</h1>
      <div className="">
        {ProductCard.length === 0 ? (
          <div className="loading"><Loader/> </div>
        ) : (
          <div className="productCard">
            {ProductCard.filter((item)=>{
              return search.toLowerCase() === ""? item: item.title.toLowerCase().includes(search);
            }).map((ProductCard) => (
              <div className="productCard" key={ProductCard.id}>
                {ProductCard.imageUrl &&
                ProductCard.title &&
                ProductCard.id &&
                ProductCard.date &&
                ProductCard.rating ? (
                  <Card
                    Image={Thisimage}
                    Title={ProductCard.title}
                    Offer={ProductCard.Offer}
                    discountPercentage={ProductCard.offers.discountPercentage}
                    freeShipping={ProductCard.offers.freeShipping}
                    Id={ProductCard.id}
                    Dates={ProductCard.date}
                    RatingVlaue={ProductCard.rating}
                    price={ProductCard.price}
                  />
                ) : (
                  <div>Invalid ProductCard</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
