import { Schema, model } from "mongoose";
import { IProduct, ProductModel } from "./product.interface";

// Product Schema
const ProductSchema = new Schema<IProduct, ProductModel>(
  {
    averageRating: {
      type: Number,
      required: [true, "averageRating is missing!"],
    },
    individualRating: {
      type: Number,
      required: [true, "individualRating is missing!"],
    },
    rating: {
      type: Number,
      required: [true, "rating is missing!"],
    },
    price: {
      type: Number,
      required: [true, "price is missing!"],
    },
    productName: {
      type: String,
      required: [true, "productName is missing!"],
    },
    category: {
      type: String,
      required: [true, "category is missing!"],
    },
    description: {
      type: String,
      required: [true, "description is missing!"],
    },
    image: {
      type: String,
      required: [true, "image is missing!"],
    },
    keyFeatures: {
      type: Object,
      required: [true, "keyFeatures is missing!"],
    },
    reviews: {
      type: Object,
      required: [true, "reviews is missing!"],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Product = model<IProduct, ProductModel>("products", ProductSchema);
