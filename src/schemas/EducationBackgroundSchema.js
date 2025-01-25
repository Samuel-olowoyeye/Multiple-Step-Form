import { z } from "zod";



export const educationBackgroundSchema = z.object({
    levelOfEducation: z
    .string()
    .min(2, { message: "Educational level must be at least 2 characters long." })
    .max(50, { message: "Educational level must be at most 50 characters long." }),

  
    previousInstitution: z
    .string()
    .min(2, { message: "Name of Institution   must be at least 2 characters long." })
    .max(50, { message: "Name of Institution must be at most 50 characters long." }),

    graduationYear: z
    .string()
    .min(2, { message: "Input Year of graduation only." })
    .max(4, { message: "Year cannot be more than 4 characters long." }),
});
