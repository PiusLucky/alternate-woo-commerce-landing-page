import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Roboto } from "next/font/google";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});



export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


