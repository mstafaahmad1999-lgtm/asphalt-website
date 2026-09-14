import type { Metadata } from "next";
import { Archivo, IBM_Plex_Sans_Arabic } from "next/font/google";
import "../globals.css";

const archivo = Archivo({ 
  subsets: ["latin"], 
  variable: "--font-latin",
  display: 'swap',
});

const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({ 
  weight: ["400", "500", "600", "700"], 
  subsets: ["arabic"], 
  variable: "--font-arabic",
  display: 'swap',
});

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
  
  return (
    <html lang={lang} dir={dir} className={`${archivo.variable} ${ibmPlexSansArabic.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
