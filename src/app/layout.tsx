import type { Metadata } from "next";
import { Poppins, Inter, Montserrat } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VyomGarud - UAV & Drone Systems",
  description:
    "Military-grade UAV and drone systems for precision engineering and advanced autonomy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} ${montserrat.variable} antialiased bg-gray-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
