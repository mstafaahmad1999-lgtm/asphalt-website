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
    <div className="flex items-center gap-2" dir="ltr">
      {langs.map((lang, index) => (
        <span key={lang.code} className="flex items-center gap-2">
          <Link 
            href={getPath(lang.code)}
            className={`text-sm transition-opacity duration-180 ${currentLang === lang.code ? 'font-semibold text-graphite' : 'font-normal text-zinc hover:text-graphite'}`}
          >
            {lang.label}
          </Link>
          {index < langs.length - 1 && <span className="text-zinc select-none text-xs">|</span>}
        </span>
      ))}
    </div>
  );
}
