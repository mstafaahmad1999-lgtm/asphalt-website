"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageToggle({ currentLang }: { currentLang: string }) {
  const pathname = usePathname();
  
  // A helper function to build the path for a given language
  const getPath = (lang: string) => {
    return pathname ? pathname.replace(`/${currentLang}`, `/${lang}`) : `/${lang}`;
  };

  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'tr', label: 'TR' },
    { code: 'ar', label: 'AR' }
  ];

  return (
    <div className="bg-brand-gray/80 backdrop-blur-md border border-white/20 rounded-full shadow-lg p-1 flex items-center" dir="ltr">
      {langs.map((lang) => (
        <Link 
          key={lang.code}
          href={getPath(lang.code)}
          className={`py-1.5 px-3 rounded-full text-[10px] sm:text-xs font-bold transition-all duration-300 uppercase tracking-widest flex items-center justify-center
            ${currentLang === lang.code 
              ? 'bg-brand-gold text-brand-dark shadow-sm' 
              : 'text-white hover:bg-white/10'}`}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
}
