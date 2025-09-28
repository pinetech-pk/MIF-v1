// src/lib/fonts.ts - Configure Google Fonts for MIF
import { Nunito, Montserrat } from "next/font/google";

// Nunito - For body text, paragraphs, descriptions
export const nunito = Nunito({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-nunito",
  display: "swap",
});

// Montserrat - For headings, titles, emphasis
export const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-montserrat",
  display: "swap",
});

// Combined font classes for easy usage
export const fontClasses = `${nunito.variable} ${montserrat.variable}`;
