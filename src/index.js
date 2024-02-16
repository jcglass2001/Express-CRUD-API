const express = require("express");
const mongoose = require("mongoose");
const config = require("../config.js");
const productRoutes = require("./routes/product.routes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));


mongoose
  .connect(config.db_uri, {})
  .then(() => {
    console.log("Connected to Database...");

    app.listen(3000, () => {
      console.log(`${config.app_name} is running on port 3000 ...`);
    });

    app.get("/", (req, res) => {
      res.send("Hello from API");
    });

    app.use(productRoutes); 
  })
  .catch(() => {
    console.log("DB URI:", config.db_uri)
    console.log("Failed to connect to database...");
  });
