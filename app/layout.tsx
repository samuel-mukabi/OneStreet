import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/app/components/NavBar";
import React from "react";

const pgfNow = localFont({
  src: [
    { path: "../public/fonts/pgf-now-font-family/pgf-now-thin.ttf", weight: "100", style: "normal" },
    { path: "../public/fonts/pgf-now-font-family/pgf-now-thin-italic.ttf", weight: "100", style: "italic" },
    { path: "../public/fonts/pgf-now-font-family/pgf-now-extra-light.ttf", weight: "200", style: "normal" },
    { path: "../public/fonts/pgf-now-font-family/pgf-now-extra-light-italic.ttf", weight: "200", style: "italic" },
    { path: "../public/fonts/pgf-now-font-family/pgf-now-light.ttf", weight: "300", style: "normal" },
    { path: "../public/fonts/pgf-now-font-family/pgf-now-light-italic.ttf", weight: "300", style: "italic" },
    { path: "../public/fonts/pgf-now-font-family/pgf-now-regular.ttf", weight: "400", style: "normal" },
    { path: "../public/fonts/pgf-now-font-family/pgf-now-italic.ttf", weight: "400", style: "italic" },
    { path: "../public/fonts/pgf-now-font-family/pgf-now-medium.ttf", weight: "500", style: "normal" },
    { path: "../public/fonts/pgf-now-font-family/pgf-now-medium-italic.ttf", weight: "500", style: "italic" },
    { path: "../public/fonts/pgf-now-font-family/pgf-now-bold.ttf", weight: "700", style: "normal" },
    { path: "../public/fonts/pgf-now-font-family/pgf-now-bold-italic.ttf", weight: "700", style: "italic" },
    { path: "../public/fonts/pgf-now-font-family/pgf-now-extra-bold.ttf", weight: "800", style: "normal" },
    { path: "../public/fonts/pgf-now-font-family/pgf-now-extra-bold-italic.ttf", weight: "800", style: "italic" },
    { path: "../public/fonts/pgf-now-font-family/pgf-now-black.ttf", weight: "900", style: "normal" },
    { path: "../public/fonts/pgf-now-font-family/pgf-now-black-italic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-pgf-now",
});

export const metadata: Metadata = {
  title: "OneStreet | Luxury Real Estate in Nairobi, Kenya",
  description: "Experience the pinnacle of luxury living with OneStreet. We specialize in exclusive properties in Kenya, from the sprawling estates of Karen to the avant-garde penthouses of Westlands. Redefining the standard of luxury real estate in Nairobi since 2015.",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${pgfNow.variable} font-pgf-now antialiased bg-linear-to-r from-primary to-primary-light`}
      >
        <NavBar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
