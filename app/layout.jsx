import { Inter } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Portfolio | Piyush",
  description:
    "Hey, I’m Piyush. Coding isn’t just my skill—it’s my passion. A student by tradition, a developer by heart.",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-bold antialiased`}>
        {children}
      </body>
    </html>
  );
}
