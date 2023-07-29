/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from "express";
import { ProductService } from "./product.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { IProduct } from "./product.interface";

// Get all Products
const getAllProducts: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await ProductService.getAllProducts();

    // Send Response
    sendResponse<IProduct[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Products retrieved Successfully",
      data: result,
    });
  }
);

// Get single Product by id
const getSingleProduct: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const id = req.params.id;
    const result = await ProductService.getSingleProduct(id);

    // Send Response
    sendResponse<IProduct>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Get Single Product Successfully",
      data: result,
    });
  }
);

// Get Products By Category
const getProductsByCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const category = req.params.category;
    const result = await ProductService.getProductsByCategory(category);

    // Send Response
    sendResponse<IProduct[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Get Products Successfully",
      data: result,
    });
  }
);

export const ProductController = {
  getAllProducts,
  getSingleProduct,
  getProductsByCategory,
};
