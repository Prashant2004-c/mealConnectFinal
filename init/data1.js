const sampleListings = [
  {
    name: "Curry & Co.",
    item: "Curry",
    image: "https://plus.unsplash.com/premium_photo-1669831178095-005ed789250a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 12,
    availability:"8 PM - 11 PM",
    street:"15 Lotus Street",
    city: "Delhi",
    state: "New Delhi",
    country: "India"
  },
  {
    name: "Chai & Chutney",
    item:"Bread pakoda",
    image:  "https://dinedelicious.in/wp-content/uploads/2021/07/Bread-Pakora-11.jpg",
    quantity: 25,
    availability:"9 PM - 11 PM",
    street:"99 Bazaari Lane",
    city: "Lucknow",
    state: "Uttar Pradesh",
    country: "India"
  },
  {
    name: "Flavors of India",
    item: "Aloo Paratha",
    image: "https://images.mrcook.app/recipe-image/01919dff-457b-7593-beaa-b2d6d04b1a04?cacheKey=VGh1LCAyOSBBdWcgMjAyNCAxMTo1NzoyMiBHTVQ=",
    quantity: 30,
    availability:"7 PM - 11 PM",
    street:"88 Sher-e-Punjab Road",
    city: "Ludhiana",
    state: "Punjab",
    country: "India"
  },
  {
    name: "Tandoori Nights",
    item:"Tandoori Chicken",
    image: "https://plus.unsplash.com/premium_photo-1661419883163-bb4df1c10109?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 43,
    availability:"8 PM - 10 PM",
    street:"48 Central Mall Road",
    city: "Pune",
    state: "Maharashtra",
    country: "India"
  },
  {
    name: "Royal Rasoi",
    item:"Rajma Chawal",
    image: "https://images.unsplash.com/photo-1668236534990-73c4ed23043c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 70,
    availability:"6 PM - 11 PM",
    street:"78 Maharaja Avenue",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India"
  },
  {
    name: "Maharaja’s Feast",
    item: "Palak Paneer",
    image: "https://seitansociety.com/wp-content/uploads/2021/10/PalakPaneer1280x903-600x423.jpg",
    quantity: 86,
    availability:"8 PM - 10 PM",
    street:"64 Rajpath Marg",
    city: "Jaipur",
    state: "Rajasthan",
    country: "India"
  },
  {
    name: "Lucknowi Darbar",
    item: "Lucknowi Biryani",
    image: "https://plus.unsplash.com/premium_photo-1694141253763-209b4c8f8ace?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 28,
    availability:"8 PM - 12 PM",
    street:"19 College Street",
    city: "Pune",
    state: "Maharashtra",
    country: "India"
  },
  {
    name: "The Chaat Room",
    item: "Litti Chokha",
    image: "https://www.recipefunnel.com/images/recipe/litti-chokha-recipe-1653132568046.webp?compress=false",
    quantity: 34,
    availability:"10 PM - 12 PM",
    street:"101 Charminar Circle",
    city: "Hyderabad",
    state: "Telangana",
    country: "India"
  },
  {
    name: "The Great Indian Thali",
    item: "Pav Bhaji",
    image: "https://images.unsplash.com/photo-1653855301179-84e9f58f28bf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 30,
    availability:"8 PM - 11 PM",
    street:"42 MG Road",
    city: "Bangalore",
    state: "Karnataka",
    country: "India"
  },
  {
    name: "The Naan Stop",
    item: "Paneer makhni with naan",
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    quantity: 40,
    availability:"8 PM - 10 PM",
    street:"55 Backwaters Road",
    city: "Kochi",
    state: "Kerala",
    country: "India"
  },
  {
    name: "Tikka Takeover",
    item: "Masala Tikka",
    image: "https://theeastcoastkitchen.com/wp-content/uploads/2022/02/TIKKA-MASALA-05-1024x576.jpg",
    quantity: 18,
    availability:"7 PM - 11 PM",
    street:"38 Colaba Causeway",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India"
  }
];

module.exports = { data: sampleListings };