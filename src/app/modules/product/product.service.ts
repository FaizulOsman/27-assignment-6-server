/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { IProduct } from "./product.interface";
import { Product } from "./product.model";

// Get All Products (can also filter)
const getAllProducts = async () => {
  const result = await Product.find({});

  return result;
};

// Get Single Product
const getSingleProduct = async (id: string): Promise<IProduct | null> => {
  const result = await Product.findById(id);
  return result;
};

// Get Single Product
const getProductsByCategory = async (
  category: string
): Promise<IProduct[] | null> => {
  const result = await Product.find({ category });

  return result;
};

export const ProductService = {
  getAllProducts,
  getSingleProduct,
  getProductsByCategory,
};
