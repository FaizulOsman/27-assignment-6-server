import { Model } from "mongoose";

export type ICategory = {
  category: string;
  image: string;
};

// Category Model
export type CategoryModel = Model<ICategory, Record<string, unknown>>;
