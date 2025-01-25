import { z } from "zod";



export const programmingExperienceSchema = z.object({
    language: z
    .array(z.string())
    .nonempty("Please select at least one programming language."),
  programmingExperience: z
    .string()
    .min(1, "Programming experience is required.")
    .refine((val) => !isNaN(Number(val)), {
      message: "Programming experience must be a number.",
    }),
  portfolioLink: z
    .string()
    .url("Please enter a valid URL for your portfolio.")
    .optional(),
});
