import type { Metadata } from "next";
import { Bebas_Neue, Montserrat } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "FixLocal — Локальный ремонт автомобилей",
  description:
    "Локальный и кузовной ремонт автомобилей. Точный подбор цвета, быстрый ремонт и гарантия.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${bebasNeue.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-black font-montserrat">
        {children}
      </body>
    </html>
  );
}