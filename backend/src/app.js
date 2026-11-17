require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.status(200).json({ status: "ok" });
});

app.use("/api/auth", require("./modules/auth/auth.route"));
app.use("/api/popproducts", require("./modules/popProducts/popProduct.routes"));
app.use("/api/new-products", require("./modules/newProduct/newProduct.routes"));
app.use("/api/products", require("./modules/products/product.routes"));

module.exports = app;
