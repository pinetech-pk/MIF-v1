import { Nunito } from "next/font/google";
import Header from "@/components/Header";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.variable}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
