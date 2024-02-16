import axios from "axios";
import React, { useState } from "react";

function Products() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    image: null,
    rating: 0,
    date: "",
    price: 0,
    discountPercentage: 0,
    freeShipping: false,
    images: [],
  });

  // handle the Data object

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : type === "file" ? files : value,
    }));
  };

  const heandlesubmit = async (e) => {
    e.preventDefault();
    // create form data to send to server
    const productData = new formData();
    Object.entries(formData).forEach(([key, value]) => {
      if (key === "images") {
        value.forEach((image) => productData.append("Images", image));
      } else {
        productData.append(key, value);
      }
    });

    // send data to the server

    try {
      const response = await axios.post("", productData);
      console.log("Api data send", response);
      // Reset the form after successful submission if needed
      setFormData({
        title: "",
        description: "",
        image: null,
        rating: 0,
        date: "",
        price: 0,
        discountPercentage: 0,
        freeShipping: false,
        images: [],
      });
    } catch (error) {
      console.log("Error submitting product: " + error.message);
    }
  };

  const HandleImageUploding = (e) => {
    // handle multiple images uploaded
    const files = Array.from(e.target.files);
    setFormData((prevData) => ({
      ...prevData,
      images: [...prevData.images, ...files],
    }));
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="title">
            Product Title
            <input
              type="text"
              name="title"
              id="title"
              value={formData.title}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="description">Product Description</label>

          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={formData.description}
            onChange={handleChange}></textarea>
        </div>
        <div>
          <label htmlFor="imageUrl">Product Image</label>
          <input
            type="file"
            name="imageUrl"
            accept="Image/*"
            id="imageUrl"
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="rating">Product Rating</label>
          <input
            type="tel"
            name="rating"
            id="rating"
            value={formData.rating}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="date">Product Date</label>
          <input
            type="date"
            name="date"
            id="date"
            value={formData.date}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Product Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={formData.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="discountPercentage">
            Product discount Percentage
          </label>
          <input
            type="number"
            name="discountPercentage"
            id="discountPercentage"
            value={formData.discountPercentage}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            Free Shipping:
            <input
              type="checkbox"
              checked={formData.freeShipping}
              onChange={setFormData}
            />
            you can select to activate the discount
          </label>
          <div>
            <label>
              Upload Five Images:
              <input
                type="file"
                name="images"
                multiple
                onChange={HandleImageUploding}
              />
            </label>
          </div>
        </div>
        <button type="submit">Uploading Products</button>
      </form>
    </div>
  );
}

export default Products;
