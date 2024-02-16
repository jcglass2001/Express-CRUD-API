const Product = require("../models/product.model.js");
const express = require("express");

const router = express.Router();
const productController = require("../controllers/product.controller.js")

/* GET ENDPOINTS */
router.get("/api/get/products", productController.getProducts);
router.get("/api/get/products/:id", productController.getProductById);

/* POST ENDPOINTS */
router.post("/api/post/products", productController.createProduct);

/* PUT ENDPOINTS */
router.put("/api/update/products/:id", productController.updateProductById);

/* DELETE ENDPOINTS */
router.delete('/api/delete/products/:id', productController.deleteProductById);
router.delete('/api/delete/products', productController.deleteAllProducts)

module.exports = router;
