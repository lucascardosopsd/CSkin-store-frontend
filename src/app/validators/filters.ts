import { z } from "zod";

export const filtersValidator = z.object({
  name: z.string().optional(),
  orderBy: z.string().optional(),
  category: z.string().optional(),
  startPrice: z.number().nullable().optional(),
  endPrice: z.number().nullable().optional(),
  float: z.number().nullable().optional(),
});
