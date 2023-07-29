import express from "express";
import { CategoryController } from "./category.controller";
const router = express.Router();

// Routes
router.get("/", CategoryController.getAllCategory);

export const CategoryRoutes = router;
