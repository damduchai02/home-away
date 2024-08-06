import { z, ZodSchema } from "zod";

export const profileSchema = z.object({
  firstName: z.string().min(2, "First Name must be at least 2 characters"),
  lastName: z.string().min(2, "Last Name must be at least 2 characters"),
  username: z.string().min(2, "Username must be at least 2 characters"),
});

export const validateWithZodSchema = <T>(
  schema: ZodSchema<T>,
  data: unknown,
): T => {
  const result = schema.safeParse(data);
  if (!result.success) {
    const errors = result.error?.errors.map((error) => error.message);
    throw new Error(errors?.join(", "));
  }
  return result.data;
};

export const imageSchema = z.object({
  image: validateFile(),
});

function validateFile() {
  const maxUploadSize = 1024 * 1024;
  const acceptedFileType = ["image/"];
  return z
    .instanceof(File)
    .refine((file) => {
      return !file || file.size < maxUploadSize;
    }, "File size must be less than 1MB")
    .refine((file) => {
      return (
        !file || acceptedFileType.some((type) => file.type.startsWith(type))
      );
    }, "File must be an image");
}

export const propertySchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(20, { message: "Name must be less than 20 characters" }),
  tagline: z
    .string()
    .min(2, { message: "Tagline must be at least 2 characters" })
    .max(30, { message: "Tagline must be less than 30 characters" }),
  category: z.string(),
  country: z.string(),
  description: z.string().refine(
    (description) => {
      const countWord = description.split(" ").length;
      return countWord >= 10 && countWord <= 1000;
    },
    {
      message: "Description must be between 10 and 1000 words",
    },
  ),
  price: z.coerce.number().int().min(0, {
    message: "Price must be a positive number",
  }),
  guests: z.coerce.number().int().min(0, {
    message: "Guests must be a positive number",
  }),
  bedrooms: z.coerce.number().int().min(0, {
    message: "Bedrooms must be a positive number",
  }),
  beds: z.coerce.number().int().min(0, {
    message: "Beds must be a positive number",
  }),
  baths: z.coerce.number().int().min(0, {
    message: "Bahts must be a positive number",
  }),
  amenities: z.string(),
});
