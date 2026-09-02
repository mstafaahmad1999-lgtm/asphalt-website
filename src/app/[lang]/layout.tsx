import type { Metadata } from "next";
import { Inter, Playfair_Display, Cairo } from "next/font/google";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const cairo = Cairo({ weight: ["400", "500", "600", "700"], subsets: ["arabic"], variable: "--font-cairo" });

export const metadata: Metadata = {
  title: "GLOBAL AGRO Co. Oxidized Asphalt",
  description: "Premium Quality Oxidized Bitumen Blown Asphalt 60/70. High performance oxidized bitumen for waterproofing, industrial coatings, roofing membranes, pipe-wrap and paving applications.",
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'tr' }, { lang: 'ar' }];
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const sansFont = lang === 'ar' ? cairo.variable : inter.variable;
  
  return (
    <html lang={lang} dir={dir} className={`${sansFont} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}
