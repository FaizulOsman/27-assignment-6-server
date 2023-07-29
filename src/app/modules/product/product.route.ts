import express from "express";
import { ProductController } from "./product.controller";
const router = express.Router();

// Routes
router.get("/products/:id", ProductController.getSingleProduct);

router.get("/categories/:category", ProductController.getProductsByCategory);

router.get("/products", ProductController.getAllProducts);

export const ProductRoutes = router;
