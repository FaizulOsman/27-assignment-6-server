import { Schema, model } from "mongoose";
import { ICategory, CategoryModel } from "./category.interface";

// Category Schema
const CategorySchema = new Schema<ICategory, CategoryModel>(
  {
    category: {
      type: String,
      required: [true, "category is missing!"],
    },
    image: {
      type: String,
      required: [true, "image is missing!"],
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const Category = model<ICategory, CategoryModel>(
  "categories",
  CategorySchema
);
