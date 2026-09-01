"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
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
    <div className="min-h-screen flex flex-col font-sans">
      {/* 1. Fixed Top Center Logo */}
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
              alt="GLOBAL AGRO Co. Logo" 
              className={`relative z-10 w-10 h-10 md:w-12 md:h-12 object-contain transition-all duration-500 ${isScrolled ? 'drop-shadow-sm' : 'drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]'}`} 
            />
          </div>
          <div className="flex flex-col text-left">
            <span className={`font-serif font-bold text-lg md:text-2xl leading-none tracking-wide uppercase transition-colors duration-500 whitespace-nowrap ${isScrolled ? 'text-brand-dark' : 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]'}`}>
              GLOBAL AGRO Co.
            </span>
            <span className={`text-[9px] md:text-[10px] tracking-[0.2em] uppercase mt-1 font-medium transition-colors duration-500 ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
              Oxidized Asphalt
            </span>
          </div>
        </Link>
      </div>

      {/* 2. Hero Section */}
      <section id="home" className="relative min-h-[90vh] flex flex-col justify-center py-20 lg:py-32 pt-40 md:pt-48 lg:pt-56">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 bg-black overflow-hidden">
          {/* Main Hero Image - Constrained width prevents over-zooming so it looks normal */}
          <img 
            src="/hero-bg.jpg" 
            alt="Hero Background" 
            className="absolute inset-y-0 right-0 w-full lg:w-[70%] h-full object-cover object-right z-0"
          />
          {/* Half black, blurry line transition */}
          <div className="absolute inset-0 bg-gradient-to-r from-black from-0% via-black via-40% md:via-40% to-transparent to-80% md:to-80% z-10 pointer-events-none"></div>
        </div>

        <div className="container mx-auto px-6 relative z-20">
          
          <div className="max-w-3xl">
            <h3 className="text-brand-gold font-serif text-base md:text-lg tracking-widest uppercase mb-4">Premium Quality</h3>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white font-bold leading-tight mb-6">
              OXIDIZED BITUMEN<br />
              <span className="text-brand-gold">BLOWN ASPHALT 60/70</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl leading-relaxed">
              High performance oxidized bitumen for waterproofing, industrial coatings, roofing membranes, pipe-wrap and paving applications.
            </p>
            
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-6 md:gap-10 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">CONSISTENT</div>
                  <div className="text-white font-bold text-sm">QUALITY</div>
                  <div className="text-gray-400 text-xs mt-0.5">You Can Rely On</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">TESTED & CERTIFIED</div>
                  <div className="text-gray-400 text-xs mt-0.5">To International</div>
                  <div className="text-gray-400 text-xs">Standards</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center text-brand-gold">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">BUILT FOR</div>
                  <div className="text-white font-bold text-sm">SUSTAINABILITY</div>
                  <div className="text-gray-400 text-xs mt-0.5">Safer for the Future</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#products" className="bg-brand-gold hover:bg-brand-gold-dark text-white px-8 py-3.5 rounded text-sm font-bold transition-colors flex items-center gap-2 uppercase tracking-wide shadow-lg shadow-brand-gold/20">
                Explore Products
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
              <Link href="#contact" className="bg-white hover:bg-gray-100 text-brand-dark px-8 py-3.5 rounded text-sm font-bold transition-colors flex items-center gap-2 uppercase tracking-wide">
                Contact Us
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>

            {/* Mobile & Tablet Stats Grid (Visible only on screens smaller than lg) */}
            <div className="mt-16 lg:hidden grid grid-cols-2 gap-4 w-full">
              <div className="bg-brand-gray/80 backdrop-blur border border-white/10 rounded-xl p-6 text-center flex flex-col items-center justify-center">
                <div className="text-brand-gold mb-2"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>
                <div className="text-white text-2xl font-serif mb-1">25+</div>
                <div className="text-gray-400 text-[9px] tracking-widest uppercase">Years of<br/>Experience</div>
              </div>
              <div className="bg-brand-gray/80 backdrop-blur border border-white/10 rounded-xl p-6 text-center flex flex-col items-center justify-center">
                <div className="text-brand-gold mb-2"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                <div className="text-white text-2xl font-serif mb-1">10+</div>
                <div className="text-gray-400 text-[9px] tracking-widest uppercase">Countries<br/>Served</div>
              </div>
              <div className="bg-brand-gray/80 backdrop-blur border border-white/10 rounded-xl p-6 text-center flex flex-col items-center justify-center">
                <div className="text-brand-gold mb-2"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                <div className="text-white text-2xl font-serif mb-1">100%</div>
                <div className="text-gray-400 text-[9px] tracking-widest uppercase">Quality<br/>Assured</div>
              </div>
              <div className="bg-brand-gray/80 backdrop-blur border border-white/10 rounded-xl p-6 text-center flex flex-col items-center justify-center">
                <div className="text-brand-gold mb-2"><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                <div className="text-white text-2xl font-serif mb-1">24/7</div>
                <div className="text-gray-400 text-[9px] tracking-widest uppercase">Customer<br/>Support</div>
              </div>
            </div>

          </div>
        </div>

        {/* Stats Card Overlapping (Desktop Only) */}
        <div className="absolute right-0 bottom-20 z-30 hidden lg:block max-w-2xl xl:max-w-3xl bg-brand-gray/90 backdrop-blur border border-white/10 rounded-l-2xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-4 divide-x divide-white/10">
            <div className="p-6 xl:p-8 text-center flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-default">
              <div className="text-brand-gold mb-3 group-hover:scale-110 transition-transform"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>
              <div className="text-white text-2xl xl:text-3xl font-serif mb-1">25+</div>
              <div className="text-gray-400 text-[10px] tracking-widest uppercase">Years of<br/>Experience</div>
            </div>
            <div className="p-6 xl:p-8 text-center flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-default">
              <div className="text-brand-gold mb-3 group-hover:scale-110 transition-transform"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
              <div className="text-white text-2xl xl:text-3xl font-serif mb-1">10+</div>
              <div className="text-gray-400 text-[10px] tracking-widest uppercase">Countries<br/>Served</div>
            </div>
            <div className="p-6 xl:p-8 text-center flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-default">
              <div className="text-brand-gold mb-3 group-hover:scale-110 transition-transform"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
              <div className="text-white text-2xl xl:text-3xl font-serif mb-1">100%</div>
              <div className="text-gray-400 text-[10px] tracking-widest uppercase">Quality<br/>Assured</div>
            </div>
            <div className="p-6 xl:p-8 text-center flex flex-col items-center justify-center group hover:bg-white/5 transition-colors cursor-default">
              <div className="text-brand-gold mb-3 group-hover:scale-110 transition-transform"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
              <div className="text-white text-2xl xl:text-3xl font-serif mb-1">24/7</div>
              <div className="text-gray-400 text-[10px] tracking-widest uppercase">Customer<br/>Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Features Strip */}
      <section className="bg-brand-darker py-8 border-y border-white/5 relative z-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/5">
            <div className="flex items-center gap-4 pt-4 md:pt-0">
              <div className="text-brand-gold"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg></div>
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1">Manufactured<br className="hidden md:block" />In Iraq</h4>
                <p className="text-gray-400 text-[10px]">Proudly made with advanced technology</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
              <div className="text-brand-gold"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg></div>
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1">Competitive<br className="hidden md:block" />Pricing</h4>
                <p className="text-gray-400 text-[10px]">Best value for long-term success</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
              <div className="text-brand-gold"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg></div>
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1">Flexible<br className="hidden md:block" />Supply</h4>
                <p className="text-gray-400 text-[10px]">Bulk supply & reliable logistics</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
              <div className="text-brand-gold"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg></div>
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1">Fast & Safe<br className="hidden md:block" />Delivery</h4>
                <p className="text-gray-400 text-[10px]">On time, every time, wherever you are</p>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-4 md:pt-0 md:px-6">
              <div className="text-brand-gold"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg></div>
              <div>
                <h4 className="text-white text-xs font-bold uppercase tracking-wider mb-1">Customer<br className="hidden md:block" />Focused</h4>
                <p className="text-gray-400 text-[10px]">Your satisfaction is our priority</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 4. Product Section */}
      <section id="products" className="bg-[#fafafa] py-16 md:py-24 relative pt-24 md:pt-32">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <div className="text-brand-gold font-bold text-xs tracking-widest uppercase mb-4">Premium Quality</div>
            <h2 className="text-4xl md:text-5xl font-serif text-brand-dark font-bold mb-6">OXIDIZED BITUMEN 60/70</h2>
            <p className="text-gray-600 leading-relaxed text-lg max-w-2xl mx-auto">
              Specially oxidized for enhanced performance in demanding conditions. Our blown asphalt 60/70 delivers excellent adhesion, durability and resistance for industrial and commercial applications.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Technical Data Table */}
            <div className="w-full lg:w-1/2 flex flex-col">
              <h3 className="text-2xl font-serif text-brand-dark font-bold mb-8 flex items-center gap-3 shrink-0">
                <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Technical Specifications
              </h3>
              
              <div className="bg-brand-dark rounded-2xl shadow-2xl p-[1px] relative overflow-hidden flex-grow flex flex-col mt-4">
                {/* Glow effects in the background */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
                
                <div className="bg-[#111]/90 backdrop-blur-xl rounded-[15px] relative z-10 flex-grow flex flex-col">
                  
                  {/* Header */}
                  <div className="flex justify-between items-center bg-white/5 border-b border-white/10 p-5 md:px-8">
                    <div className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest w-1/2">Test Property</div>
                    <div className="text-brand-gold text-[10px] md:text-xs font-bold uppercase tracking-widest text-center hidden md:block">Method</div>
                    <div className="text-gray-400 text-[10px] md:text-xs font-bold uppercase tracking-widest text-right">Result</div>
                  </div>
                  
                  <div className="flex flex-col p-4 md:p-6 gap-8 overflow-y-auto">
                    
                    {/* Category: Physical & Safety */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-px bg-gradient-to-r from-transparent to-white/10 flex-grow"></div>
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold">Physical & Safety</span>
                        <div className="h-px bg-gradient-to-l from-transparent to-white/10 flex-grow"></div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {[
                          { label: "Penetration @ 25°C", method: "ASTM D5", value: "64", unit: "mm/10" },
                          { label: "Ductility @ 25°C", method: "ASTM D113", value: "> 150", unit: "cm" },
                          { label: "Specific Gravity @ 25°C", method: "ASTM D70", value: "1.053", unit: "" },
                          { label: "Solubility in T.C.E.", method: "ASTM D2042", value: "99.8", unit: "%" },
                          { label: "Flash Point", method: "ASTM D92", value: "304", unit: "°C" }
                        ].map((spec, i) => (
                          <div key={i} className="flex items-center justify-between p-3 md:p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-gold/30 transition-all group">
                            <div className="w-1/2 flex items-center gap-3 md:gap-4">
                              <div className="hidden md:flex w-8 h-8 rounded-full bg-black/50 border border-white/10 items-center justify-center text-brand-gold group-hover:scale-110 transition-transform shadow-inner">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path></svg>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-white font-medium text-xs md:text-sm">{spec.label}</span>
                                <span className="text-[9px] md:hidden font-mono text-brand-gold mt-1">{spec.method}</span>
                              </div>
                            </div>
                            <div className="hidden md:block text-center">
                              <span className="text-xs font-mono text-gray-400 bg-black/60 px-3 py-1 rounded-full border border-white/5 group-hover:text-white transition-colors">{spec.method}</span>
                            </div>
                            <div className="text-right">
                              <span className="text-white font-bold text-base md:text-lg">{spec.value}</span>
                              {spec.unit && <span className="text-gray-400 text-[10px] md:text-xs ml-1">{spec.unit}</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Category: Thermal & Rheological */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-px bg-gradient-to-r from-transparent to-white/10 flex-grow"></div>
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold">Thermal & Rheological</span>
                        <div className="h-px bg-gradient-to-l from-transparent to-white/10 flex-grow"></div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {[
                          { label: "Softening Point", method: "ASTM D36", value: "48", unit: "°C" },
                          { label: "Breaking Point (Fraass)", method: "IP 80", value: "-8", unit: "°C" },
                          { label: "Viscosity @ 135°C", method: "ASTM D4402", value: "404", unit: "cP" },
                          { label: "Dynamic Viscosity @ 60°C", method: "ASTM D2171", value: "1779", unit: "cP" }
                        ].map((spec, i) => (
                          <div key={i} className="flex items-center justify-between p-3 md:p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-gold/30 transition-all group">
                            <div className="w-1/2 flex items-center gap-3 md:gap-4">
                              <div className="hidden md:flex w-8 h-8 rounded-full bg-black/50 border border-white/10 items-center justify-center text-orange-400 group-hover:scale-110 transition-transform shadow-inner">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"></path></svg>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-white font-medium text-xs md:text-sm">{spec.label}</span>
                                <span className="text-[9px] md:hidden font-mono text-brand-gold mt-1">{spec.method}</span>
                              </div>
                            </div>
                            <div className="hidden md:block text-center">
                              <span className="text-xs font-mono text-gray-400 bg-black/60 px-3 py-1 rounded-full border border-white/5 group-hover:text-white transition-colors">{spec.method}</span>
                            </div>
                            <div className="text-right">
                              <span className="text-white font-bold text-base md:text-lg">{spec.value}</span>
                              {spec.unit && <span className="text-gray-400 text-[10px] md:text-xs ml-1">{spec.unit}</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Category: Purity & Composition */}
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <div className="h-px bg-gradient-to-r from-transparent to-white/10 flex-grow"></div>
                        <span className="text-brand-gold text-[10px] uppercase tracking-[0.2em] font-bold">Purity & Composition</span>
                        <div className="h-px bg-gradient-to-l from-transparent to-white/10 flex-grow"></div>
                      </div>
                      <div className="flex flex-col gap-2">
                        {[
                          { label: "Ash Content", method: "ASTM D3104", value: "0.08", unit: "%" },
                          { label: "Water Content", method: "ASTM D95", value: "Nil", unit: "" }
                        ].map((spec, i) => (
                          <div key={i} className="flex items-center justify-between p-3 md:p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-brand-gold/30 transition-all group">
                            <div className="w-1/2 flex items-center gap-3 md:gap-4">
                              <div className="hidden md:flex w-8 h-8 rounded-full bg-black/50 border border-white/10 items-center justify-center text-blue-300 group-hover:scale-110 transition-transform shadow-inner">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-white font-medium text-xs md:text-sm">{spec.label}</span>
                                <span className="text-[9px] md:hidden font-mono text-brand-gold mt-1">{spec.method}</span>
                              </div>
                            </div>
                            <div className="hidden md:block text-center">
                              <span className="text-xs font-mono text-gray-400 bg-black/60 px-3 py-1 rounded-full border border-white/5 group-hover:text-white transition-colors">{spec.method}</span>
                            </div>
                            <div className="text-right">
                              <span className="text-white font-bold text-base md:text-lg">{spec.value}</span>
                              {spec.unit && <span className="text-gray-400 text-[10px] md:text-xs ml-1">{spec.unit}</span>}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Applications Cards */}
            <div id="applications" className="w-full lg:w-1/2 scroll-mt-24 flex flex-col">
               <h3 className="text-2xl font-serif text-brand-dark font-bold mb-8 flex items-center gap-3 shrink-0">
                 <svg className="w-6 h-6 text-brand-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                 Primary Applications
               </h3>
               
               <div className="flex flex-col gap-6 flex-grow">
                 {/* Roofing */}
                 <div className="group relative flex-1 min-h-[140px] rounded-xl overflow-hidden shadow-lg cursor-pointer">
                   <div className="absolute inset-0 bg-[url('/roofing.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                   <div className="absolute bottom-6 left-6 z-10">
                     <h4 className="text-white font-serif text-2xl font-bold tracking-wide">Waterproofing & Roofing</h4>
                     <p className="text-gray-300 text-sm mt-1">Superior protection for industrial membranes.</p>
                   </div>
                 </div>

                 {/* Pipe Wrap */}
                 <div className="group relative flex-1 min-h-[140px] rounded-xl overflow-hidden shadow-lg cursor-pointer">
                   <div className="absolute inset-0 bg-[url('/pipe-wrap.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                   <div className="absolute bottom-6 left-6 z-10">
                     <h4 className="text-white font-serif text-2xl font-bold tracking-wide">Pipe-Wrap & Coatings</h4>
                     <p className="text-gray-300 text-sm mt-1">Anti-corrosion barriers for pipelines.</p>
                   </div>
                 </div>

                 {/* Paving */}
                 <div className="group relative flex-1 min-h-[140px] rounded-xl overflow-hidden shadow-lg cursor-pointer">
                   <div className="absolute inset-0 bg-[url('/paving.png')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110"></div>
                   <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                   <div className="absolute bottom-6 left-6 z-10">
                     <h4 className="text-white font-serif text-2xl font-bold tracking-wide">Paving Grade Applications</h4>
                     <p className="text-gray-300 text-sm mt-1">High-resistance asphalt for durable roads.</p>
                   </div>
                 </div>
               </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. About Section */}
      <section id="about" className="bg-brand-dark py-16 md:py-24 relative overflow-hidden scroll-mt-10">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1563810162589-8a4a7538a7c2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Text Side */}
            <div className="w-full lg:w-1/3">
              <div className="text-brand-gold font-bold text-[10px] tracking-widest uppercase mb-2">About GLOBAL AGRO Co.</div>
              <h3 className="text-2xl font-serif text-white font-bold mb-4">EXPERIENCE. QUALITY. TRUST.</h3>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                GLOBAL AGRO Co. Company for Oxidized Asphalt Production Ltd. is a leading manufacturer and exporter of high quality oxidized bitumen from Nineveh, Iraq, serving global markets with dedication and integrity.
              </p>
              <Link href="#contact" className="inline-flex items-center gap-2 border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white px-5 py-2 rounded text-xs font-bold uppercase tracking-wider transition-colors">
                Learn More About Us
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
              </Link>
            </div>
            
            {/* Badges Side */}
            <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 lg:gap-4 xl:gap-6 pl-0 lg:pl-10 lg:border-l border-white/10 items-start lg:items-center mt-10 lg:mt-0">
              <div className="text-center">
                <div className="text-brand-gold mb-3 flex justify-center"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>
                <h4 className="text-white text-[11px] font-bold uppercase tracking-wider mb-2">State of the Art<br/>Production</h4>
                <p className="text-gray-500 text-[10px] hidden xl:block">Advanced facilities and<br/>modern technology</p>
              </div>
              <div className="text-center">
                <div className="text-brand-gold mb-3 flex justify-center"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg></div>
                <h4 className="text-white text-[11px] font-bold uppercase tracking-wider mb-2">Strict Quality<br/>Control</h4>
                <p className="text-gray-500 text-[10px] hidden xl:block">Rigorous testing at every<br/>stage of production</p>
              </div>
              <div className="text-center">
                <div className="text-brand-gold mb-3 flex justify-center"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                <h4 className="text-white text-[11px] font-bold uppercase tracking-wider mb-2">Global<br/>Standards</h4>
                <p className="text-gray-500 text-[10px] hidden xl:block">Compliance with international<br/>quality standards</p>
              </div>
              <div className="text-center">
                <div className="text-brand-gold mb-3 flex justify-center"><svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg></div>
                <h4 className="text-white text-[11px] font-bold uppercase tracking-wider mb-2">Sustainable<br/>Practices</h4>
                <p className="text-gray-500 text-[10px] hidden xl:block">Committed to safety<br/>and responsibility</p>
              </div>
              
              {/* Made in Iraq - Now a grid column */}
              <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col items-center justify-center p-4 bg-brand-gold/10 border border-brand-gold/20 rounded-lg lg:ml-2">
                 <div className="text-brand-gold text-[10px] font-bold tracking-[0.2em] uppercase mb-1 whitespace-nowrap">Made In</div>
                 <div className="text-white text-2xl xl:text-3xl font-serif font-bold tracking-wider">IRAQ</div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 6. Insights & Resources Section */}
      <section id="resources" className="bg-white py-16 md:py-24 scroll-mt-10 border-t border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <div className="text-brand-gold font-bold text-xs tracking-widest uppercase mb-3">Insights & Resources</div>
             <h2 className="text-3xl md:text-4xl font-serif text-brand-dark font-bold mb-6">EVERYTHING YOU NEED</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Quality Assurance */}
            <div className="bg-gray-50 rounded-xl p-8 md:p-10 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="bg-brand-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path></svg>
              </div>
              <h3 className="text-xl font-serif text-brand-dark font-bold mb-4 uppercase">Quality Assurance</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                We are committed to delivering the highest quality oxidized asphalt. Our product is rigorously tested at every stage of production to ensure it meets strict international standards for performance, durability, and safety.
              </p>
            </div>

            {/* Technical Documents */}
            <div className="bg-brand-dark rounded-xl p-8 md:p-10 text-center shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden flex flex-col">
              <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1563810162589-8a4a7538a7c2?q=80&w=600&auto=format&fit=crop')] bg-cover bg-center"></div>
              <div className="relative z-10 flex flex-col h-full">
                <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold shrink-0">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                </div>
                <h3 className="text-xl font-serif text-white font-bold mb-4 uppercase">Technical Documents</h3>
                <p className="text-gray-400 leading-relaxed text-sm mb-8">
                  Download our product data sheets, safety data sheets, and certification documents.
                </p>
                <div className="flex flex-col gap-3 mt-auto">
                   <button className="w-full border border-brand-gold text-brand-gold py-3 rounded font-bold hover:bg-brand-gold hover:text-white transition-colors uppercase tracking-wider text-xs flex items-center justify-center gap-2">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                     TDS Download
                   </button>
                   <button className="w-full border border-brand-gold text-brand-gold py-3 rounded font-bold hover:bg-brand-gold hover:text-white transition-colors uppercase tracking-wider text-xs flex items-center justify-center gap-2">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                     MSDS Download
                   </button>
                </div>
              </div>
            </div>

            {/* Latest News */}
            <div className="bg-gray-50 rounded-xl p-8 md:p-10 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="bg-brand-gold/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-gold shrink-0">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15M9 11l3 3m0 0l3-3m-3 3V8"></path></svg>
              </div>
              <h3 className="text-xl font-serif text-brand-dark font-bold mb-4 uppercase">Latest News</h3>
              <p className="text-gray-600 leading-relaxed text-sm mb-6">
                Stay up to date with the latest announcements, industry insights, and production updates from the GLOBAL AGRO Co. team.
              </p>
              <div className="mt-auto pt-6 border-t border-gray-200 text-gray-500 italic text-sm">
                No recent news articles yet. Check back soon!
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Contact Section & Footer */}
      <section id="contact" className="bg-brand-darker pt-16 md:pt-24 pb-12 scroll-mt-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-brand-gold font-bold text-xs tracking-widest uppercase mb-3">Get in Touch</div>
            <h2 className="text-3xl md:text-4xl font-serif text-white font-bold mb-6">CONTACT US</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              Reach out to our team today for quotes, inquiries, and logistics support. We are ready to assist you 24/7.
            </p>
            <Link href="mailto:info@global-agro.net" className="bg-brand-gold hover:bg-brand-gold-dark text-white px-10 py-4 rounded text-sm font-bold transition-colors inline-flex items-center gap-2 uppercase tracking-wider shadow-lg shadow-brand-gold/20">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              Request a Quote
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center border-t border-white/10 pt-12 mt-12">
            <div>
               <h4 className="text-white font-bold mb-2">Locations</h4>
               <p className="text-gray-500 text-sm flex flex-col gap-1">
                 <span>Nineveh, Iraq</span>
                 <span>Turkey</span>
               </p>
            </div>
            <div>
               <h4 className="text-white font-bold mb-2">Email</h4>
               <p className="text-gray-500 text-sm">
                 <a href="mailto:info@global-agro.net" className="hover:text-brand-gold transition-colors">info@global-agro.net</a>
               </p>
            </div>
            <div>
               <h4 className="text-white font-bold mb-2">Phone / WhatsApp</h4>
               <p className="text-gray-500 text-sm flex flex-col gap-1">
                 <a href="https://wa.me/9647701548776" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center justify-center gap-2">
                   <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                   +964 770 154 8776
                 </a>
                 <a href="https://wa.me/9647729899799" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors flex items-center justify-center gap-2">
                   <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                   +964 772 989 9799
                 </a>
               </p>
            </div>
          </div>
          
          <div className="text-center text-gray-600 text-xs mt-16 pt-8 border-t border-white/5">
            &copy; {new Date().getFullYear()} GLOBAL AGRO Co. Company for Oxidized Asphalt Production Ltd. All rights reserved.
          </div>
        </div>
      </section>

    </div>
  );
}
