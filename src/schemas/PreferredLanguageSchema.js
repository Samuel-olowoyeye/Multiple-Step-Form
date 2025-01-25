import { z } from "zod";



export const preferredLanguageSchema = z.object({
    preferredLanguages: z
    .enum(["javascript", "python", "php", "c++","java"], { message: "Must be atleast one language  " }),

    levelOfEducation: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name must be at most 50 characters long." }),

    levelOfEducation: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name must be at most 50 characters long." }),


});
