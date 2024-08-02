import { z } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, "max length is 2"),
  lastName: z.string(),
  username: z.string(),
});
