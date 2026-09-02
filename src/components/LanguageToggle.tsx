"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageToggle({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  
  const targetLang = currentLang === 'en' ? 'tr' : 'en';
  // safely replace the current language segment in the path
  const targetPath = pathname ? pathname.replace(`/${currentLang}`, `/${targetLang}`) : `/${targetLang}`;

  return (
    <Link 
      href={targetPath}
      className="bg-brand-gray/80 backdrop-blur-md border border-white/20 text-white font-bold py-2 px-4 rounded-full text-xs shadow-lg hover:bg-brand-gold hover:text-brand-dark transition-all duration-300 uppercase tracking-widest flex items-center gap-2"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path></svg>
      {currentLang === 'en' ? 'TR' : 'EN'}
    </Link>
  );
}
