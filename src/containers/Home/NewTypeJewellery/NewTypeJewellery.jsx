import React, { useEffect, useState } from "react";
import LeftImage from "./leftImage/LeftImage";
import RigthImage from "./RigthImage/RigthImage";
import ImageGGG from "../../../assets/image_container/beautiful-engagement-ring-gemstone-box-260nw-2048190650.webp";
function NewTypeJewellery({ Title }) {
  const [Database, setDatabase] = useState([]);
  const [upcomingJewellery, setUpcomingJewellery] = useState([]);
  useEffect(() => {
    const LocalData = JSON.parse(localStorage.getItem("upcomingJewellery")) || [
      {
        Image: ImageGGG,
        description: "Dive into Opulent Jewelry Creations",
        Id: 1,
      },
    ];

    setDatabase(LocalData);
  }, []);


  useEffect(() => {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem("upcomingJewellery");

    // Parse the data (assuming it's stored as a JSON string)
    const parsedData = storedData ? JSON.parse(storedData) : [];

    // Set the data in the state
    setUpcomingJewellery(parsedData);
  }, []); // The empty dependency array ensures this effect runs only once, similar to componentDidMount


  console.log("Dive into Op", upcomingJewellery[0]);
  return (
    <div key={Date.now()}>
      <h1 className="align">{Title}</h1>
      {Database.length == 0 ? (
        <div className="align">
          <h1>Loading....</h1>
        </div>
      ) : (
        Database.map((Data, index) => (
          <div className="jewelleryContainer" key={Data.Id}>
            {index % 2 === 0 ? (
              <LeftImage
                Image={Data.urlimage}
                title={Data.title}
                description={Data.Description}
                Id={Data.id}
              />
            ) : (
              <RigthImage
                Image={Data.urlimage}
                title={Data.title}
                description={Data.Description}
                Id={Data.id}
              />
            )}
          </div>
        ))
      )}
    </div>
  );
}

export default NewTypeJewellery;
