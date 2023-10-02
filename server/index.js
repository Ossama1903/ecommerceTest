const express = require("express");
const cors = require("cors");

const app = express();

const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/get-products", (req, res) => {
  const products = [
    {
      src: "https://images.stockx.com/images/adidas-Speedportal1-FG-Messi-Leyenda-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1671022292",
      title: "Nike Air Yeezy 2",
      description: "Nike Air Yeezy 2 Red October 508214-660",
      price: 250,
    },
    {
      src: "https://images.stockx.com/images/Nike-SB-Dunk-Low-Ben-Jerrys-Chunky-Dunky-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607043246",
      title: "Adidas Ultra Boost",
      description: "Adidas Ultra Boost 4.0 Running Shoes",
      price: 180,
    },
    {
      src: "https://images.stockx.com/images/Represent-Bully-Sneaker-StockX-Edition-of-300.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1689352040",
      title: "Puma RS-X",
      description: "Puma RS-X Tech Sneakers",
      price: 120,
    },
    {
      src: "https://images.stockx.com/images/Air-Jordan-1-Retro-High-Off-White-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607656930",
      title: "New Balance 990",
      description: "New Balance 990v5 Made in USA",
      price: 175,
    },
    {
      src: "https://images.stockx.com/360/Air-Jordan-3-Retro-A-Ma-Maniere-W/Images/Air-Jordan-3-Retro-A-Ma-Maniere-W/Lv2/img01.jpg?fm=jpg&auto=compress&w=480&dpr=2&updated_at=1634934382&h=320&q=60",
      title: "Converse Chuck Taylor",
      description: "Converse Chuck Taylor All Star Low Top",
      price: 55,
    },
    {
      src: "https://images.stockx.com/images/Nike-Dunk-Low-Medium-Olive-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1664348197",
      title: "Reebok Classic Leather",
      description: "Reebok Classic Leather Sneakers",
      price: 70,
    },
    {
      src: "https://images.stockx.com/images/Air-Jordan-4-Retro-Off-White-Sail-W-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1607655526",
      title: "Vans Old Skool",
      description: "Vans Old Skool Core Classic Skate Shoes",
      price: 60,
    },
  ];

  res.json(products);
});

// Start the Express server
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
