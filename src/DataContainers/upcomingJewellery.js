const upcomingJewellery=[
  {
    "Id": 1,
    "urlimage": "https://images.pexels.com/photos/15952894/pexels-photo-15952894/free-photo-of-a-ring-with-a-diamond-in-a-box.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Elegant Diamond Necklace",
    "Description": "A stunning diamond necklace with intricate design and exceptional craftsmanship. This piece is sure to enhance your elegance and charm.",
    "date": "2024-02-15"
  },
  {
    "Id": 2,
    "urlimage": "https://images.pexels.com/photos/6993815/pexels-photo-6993815.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "title": "Sapphire and Gold Earrings",
    "Description": "Exquisite sapphire and gold earrings that blend modern style with timeless beauty. Perfect for adding a touch of sophistication to any outfit.",
    "date": "2024-03-01"
  },
  {
    "Id": 3,
    "urlimage": "https://images.pexels.com/photos/10160060/pexels-photo-10160060.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "title": "Rose Gold Bracelet",
    "Description": "A delicate rose gold bracelet adorned with shimmering crystals. This accessory effortlessly combines femininity and grace, making it a must-have for any occasion.",
    "date": "2024-03-15"
  },
  {
    "Id": 4,
    "urlimage": "https://images.pexels.com/photos/5370640/pexels-photo-5370640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Pearl Drop Earrings",
    "Description": "Timeless pearl drop earrings that exude classic beauty. The pearls are carefully selected for their luster and radiance, creating a refined and elegant look.",
    "date": "2024-04-01"
  },
  {
    "Id": 5,
    "urlimage": "https://images.pexels.com/photos/6438667/pexels-photo-6438667.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "title": "Gemstone Statement Ring",
    "Description": "A bold and vibrant gemstone statement ring that demands attention. The unique design and vibrant colors make this piece a standout accessory for special occasions.",
    "date": "2024-04-15"
  }
]



console.log("upcomingJewellery")
localStorage.setItem("upcomingJewellery", JSON.stringify(upcomingJewellery))

export default upcomingJewellery