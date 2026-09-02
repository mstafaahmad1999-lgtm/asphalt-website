"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import LanguageToggle from "./LanguageToggle";

export default function Header({ dict, lang }: { dict: any, lang: string }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // The hero section is dark, swap colors after scrolling past most of it
      if (window.scrollY > window.innerHeight * 0.7) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-none w-[90%] md:w-auto flex justify-center">
        <Link 
          href="#home" 
          className={`pointer-events-auto flex items-center gap-3 md:gap-4 backdrop-blur-xl shadow-2xl rounded-full px-5 py-2.5 md:px-8 md:py-3 transition-all duration-500 group
            ${isScrolled 
              ? 'bg-white/70 border border-gray-200/50 hover:bg-white/90' 
              : 'bg-white/5 border border-white/20 hover:bg-white/10'}`}
        >
          <div className="relative transition-transform duration-500 group-hover:scale-105 flex items-center justify-center shrink-0">
            <div className={`absolute inset-0 rounded-full transition-opacity duration-500 ${isScrolled ? 'opacity-0' : 'opacity-100 bg-white/20 blur-md scale-110'}`}></div>
            <img 
              src="/logo.png" 
              alt="{dict.logoTitle} Logo" 
              className={`relative z-10 w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-500 ${isScrolled ? 'drop-shadow-sm' : 'drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'}`} 
            />
          </div>
          <div className="flex flex-col text-left">
            <span className={`font-serif font-bold text-lg md:text-2xl leading-none tracking-wide uppercase transition-colors duration-500 whitespace-nowrap ${isScrolled ? 'text-brand-dark' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'}`}>
              {dict.logoTitle}
            </span>
            <span className={`text-[9px] md:text-[10px] tracking-[0.2em] uppercase mt-1 font-medium transition-colors duration-500 ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
              {dict.logoSubtitle}
            </span>
          </div>
        </Link>
      </div>


      {/* Language Toggle placed top right */}
      <div className="fixed top-6 right-6 z-50">
        <LanguageToggle currentLang={lang} />
      </div>
    </>
  );
}
