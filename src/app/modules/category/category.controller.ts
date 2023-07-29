/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, RequestHandler, Response } from "express";
import { CategoryService } from "./category.service";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { ICategory } from "./category.interface";

// Get all Categories
const getAllCategory: RequestHandler = catchAsync(
  async (req: Request, res: Response) => {
    const result = await CategoryService.getAllCategory();

    // Send Response
    sendResponse<ICategory[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Categories retrieved Successfully",
      data: result,
    });
  }
);

export const CategoryController = {
  getAllCategory,
};
