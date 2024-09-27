import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const scandia = localFont({
  src: [
    {
      path: "./fonts/Scandia-Regular.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Scandia-Light.woff",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Scandia-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title:
    "ILDNORD – Modern Scandinavian Fireplaces | Manufacturer of Eco-Friendly Heating Solutions",
  description:
    "A Polish fireplace manufacturer offering modern and eco-friendly solutions for the Scandinavian market. High quality, Scandinavian design, and energy efficiency. Discover our fireplaces and enjoy the warmth of nature in your home.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={scandia.className}>{children}</body>
    </html>
  );
}
