/* eslint-disable no-unused-vars */
// import { Model } from 'mongoose';

import { IBook } from "../product/product.interface";

export type IWishlist = {
  _id: string;
  userId: string;
  email: string;
  bookId?: string;
  wishlist: IBook[];
};
