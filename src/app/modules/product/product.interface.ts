import { Model } from "mongoose";

export type IProduct = {
  averageRating: number;
  individualRating: number;
  rating: number;
  price: number;
  productName: string;
  category: string;
  description: string;
  image: string;
  keyFeatures?: object;
  reviews?: object;
};

// Product Model
export type ProductModel = Model<IProduct, Record<string, unknown>>;
