import React, { useEffect, useState } from "react";
import LeftImage from "./leftImage/LeftImage";
import RigthImage from "./RigthImage/RigthImage";
import ImageGGG from "../../../assets/image_container/beautiful-engagement-ring-gemstone-box-260nw-2048190650.webp";
function NewTypeJewellery({Title}) {
  const [Database, setDatabase] = useState([]);
  useEffect(() => {
    const LocalData = JSON.parse(localStorage.getItem("ImageDatabase")) || [
      {
        Image: ImageGGG,
        description: "Dive into Opulent Jewelry Creations",
        Id: 1,
      },
    ];
    setDatabase(LocalData);
  }, []);

  return (
    <div>
      <h1 className="align">{Title}</h1>
      {Database.length == 0 ? (
        <div className="align">
          <h1>Loading....</h1>
        </div>
      ) : (Database.map((Data , index) => (
          <div className="jewelleryContainer" key={Data.Id}>
            {index % 2 === 0 ? (
              
              
              <LeftImage
                Image={Data.url}
                title={Data.title}
                description={Data.body}
                Id={Data.id}
              />):(
              <RigthImage
                Image={Data.url}
                title={Data.title}
                description={Data.body}
                Id={Data.id}
              />)
            }
          </div>
        ))
      )}
    </div>
  );
}

export default NewTypeJewellery;
