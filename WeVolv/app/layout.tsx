import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "WeVolv - Health & Wellness Transformation",
  description: "Your partner in health and wellness transformation. Expert consultations, weight management, fitness, and nutrition programs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
