"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import LanguageToggle from "./LanguageToggle";

export default function Header({ dict, lang }: { dict: any, lang: string }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hardcoding the nav items for now based on the dictionary structure
  const navItems = [
    { key: "Product", href: "#products" },
    { key: "Supply", href: "#supply" }, // Will map later
    { key: "Quality", href: "#quality" },
    { key: "Company", href: "#about" }
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full h-[60px] md:h-[72px] bg-paper border-b border-rule flex items-center px-4 md:px-6">
        <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between">
          
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="GLOBAL AGRO Logo" 
              width={32} 
              height={32} 
              className="object-contain"
            />
            <span className="font-sans font-bold text-[17px] text-graphite tracking-tight uppercase">
              {dict.logoTitle}
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-graphite">
            {navItems.map((item) => (
              <Link key={item.key} href={item.href} className="hover:underline underline-offset-4 decoration-1">
                {item.key}
              </Link>
            ))}
          </nav>

          {/* Right Area: Lang & Mobile Menu Toggle */}
          <div className="flex items-center gap-6">
            <div className="hidden md:block">
              <LanguageToggle currentLang={lang} />
            </div>
            <button 
              className="md:hidden text-graphite p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 8h16M4 16h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-paper p-6 flex flex-col gap-6 md:hidden">
          <nav className="flex flex-col gap-6 text-[28px] font-medium text-graphite text-start">
            {navItems.map((item) => (
              <Link 
                key={item.key} 
                href={item.href} 
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.key}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-6 border-t border-rule">
            <LanguageToggle currentLang={lang} />
          </div>
        </div>
      )}
    </>
  );
}
