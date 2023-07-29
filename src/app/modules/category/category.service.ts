/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Category } from "./category.model";

// Get All Categories (can also filter)
const getAllCategory = async () => {
  const result = await Category.find({});

  return result;
};

export const CategoryService = {
  getAllCategory,
};
