import type { Metadata } from "next";
import { Playfair, DM_Sans } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar";

const playfair = Playfair({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const dm_sans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "OneStreet | Luxury Real Estate in Nairobi, Kenya",
  description: "Experience the pinnacle of luxury living with OneStreet. We specialize in exclusive properties in Kenya, from the sprawling estates of Karen to the avant-garde penthouses of Westlands. Redefining the standard of luxury real estate in Nairobi since 2015.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dm_sans.variable} antialiased bg-secondary`}
      >
      <NavBar />
      <main>
        {children}
      </main>
      </body>
    </html>
  );
}
