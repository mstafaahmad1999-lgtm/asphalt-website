import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "GLOBAL AGRO Co. Oxidized Asphalt",
  description: "Premium Quality Oxidized Bitumen Blown Asphalt 60/70. High performance oxidized bitumen for waterproofing, industrial coatings, roofing membranes, pipe-wrap and paving applications.",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'tr' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  
  return (
    <html lang={lang} dir="ltr">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-gray-50 text-gray-900`}>
        {children}
      </body>
    </html>
  );
}
