import { z } from "zod";

export const filtersValidator = z.object({
  name: z.string(),
  orderBy: z.string(),
  category: z.string(),
  startPrice: z.number().nullable(),
  endPrice: z.number().nullable(),
  float: z.number().nullable(),
});
