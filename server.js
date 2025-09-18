const express = require("express");
const app = express();
const data = require("./products.json");

app.get("/", (req, res) => {
  res.send("🎸 Welcome to the Music Store API! Try /api/products");
});
// Get all products
app.get("/api/products", (req, res) => {
  res.json(data.products);
});

// Get product by ID
app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((p) => p.id === parseInt(req.params.id));
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
});

// Export for Vercel
module.exports = app;
