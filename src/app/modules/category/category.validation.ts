import { z } from "zod";

const createCategoryZodValidation = z.object({
  body: z.object({
    image: z.string(),
    category: z.string(),
  }),
});

export const CategoryValidation = {
  createCategoryZodValidation,
};
