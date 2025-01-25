import { z } from "zod";
import { parsePhoneNumberFromString } from "libphonenumber-js";


export const personalInfoSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long." })
    .max(50, { message: "Name must be at most 50 characters long." }),
  
    email: z
    .string({
    required_error: "Email is required",
    })
     .email({
    message: "Please enter a valid email address.",
     }),
  
     phoneNumber: z
    .string()
    .refine((phone) => {
      try {
        const phoneNumber = parsePhoneNumberFromString(phone);
        return phoneNumber?.isValid() || false;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (error) {
        return false;
      }
    }, { message: "Invalid phone number. Please use a valid international format (e.g., +123456789)." }),

    dateOfBirth: z.string().min(1, "Date of Birth is required"),

  country: z
    .string()
    .min(2, { message: "Country must be at least 2 characters long." }),
  
  address: z
    .string()
    .min(5, { message: "Address must be at least 5 characters long." })
    .max(100, { message: "Address must be at most 100 characters long." }),
  
  gender: z
    .enum(["male", "female"], { message: "Gender must be male or female " }),
});

