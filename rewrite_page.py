import os

content = """import Image from "next/image";
import Link from "next/link";
import { getDictionary } from "@/i18n";
import Header from "@/components/Header";

export default async function Home({ params }: { params: Promise<{ lang: "en" | "tr" | "ar" }> }) {
  const { lang } = await params;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col font-sans">
      <Header dict={dict} lang={lang} />

      {/* Hero */}
      <section id="home" className="relative w-full bg-bitumen" style={{ height: 'min(100svh, 820px)' }}>
        <div className="absolute inset-0 z-0">
          <Image 
            src="/hero-bg.jpg" 
            alt="Hero Background" 
            fill 
            priority 
            className="object-cover" 
          />
          <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(to top, rgba(14,12,10,.88) 0%, rgba(14,12,10,.35) 55%, rgba(14,12,10,.15) 100%)' }}></div>
        </div>

        <div className="relative z-20 h-full max-w-[1440px] mx-auto px-4 md:px-6 flex flex-col justify-end pb-16 md:pb-24">
          <div className="max-w-3xl flex flex-col items-start text-start">
            <div className="text-[18px] text-zinc mb-2 tracking-tight">
              Penetration Grade Bitumen
            </div>
            <h1 className="display text-[var(--t-display)] text-paper mb-4 leading-none">
              60/70
            </h1>
            <div className="text-[15px] text-zinc mb-10 tracking-tight">
              EN 12591 · Produced in Iraq
            </div>
            
            <div className="flex flex-wrap items-center gap-6">
              <Link href="#contact" className="bg-heat text-paper px-7 py-3.5 rounded-[2px] font-semibold text-[14px] transition-opacity hover:opacity-90">
                Request a quotation
              </Link>
              <a href="/Global_Agro_Technical_Specifications.pdf" target="_blank" rel="noopener noreferrer" className="text-paper text-[14px] font-medium border-b border-paper pb-0.5 hover:opacity-80 transition-opacity">
                Download datasheet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Band */}
      <div className="hidden md:flex items-center bg-graphite h-[52px] overflow-hidden whitespace-nowrap">
        <div className="text-paper opacity-55 text-[13px] font-medium tracking-[0.08em] uppercase flex gap-8">
          <span>EN 12591</span><span>·</span>
          <span>ASTM D946</span><span>·</span>
          <span>HS 2713.20</span><span>·</span>
          <span>SGS CERTIFIED</span><span>·</span>
          <span>FOB BASRA / UMM QASR</span><span>·</span>
          <span>PACKING: 180 KG NEW STEEL DRUMS</span><span>·</span>
          <span>EN 12591</span><span>·</span>
          <span>ASTM D946</span><span>·</span>
          <span>HS 2713.20</span><span>·</span>
          <span>SGS CERTIFIED</span><span>·</span>
          <span>FOB BASRA / UMM QASR</span><span>·</span>
          <span>PACKING: 180 KG NEW STEEL DRUMS</span>
        </div>
      </div>

      {/* Product / Spec */}
      <section id="products" className="bg-paper py-16 md:py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <h2 className="text-[var(--t-h2)] font-sans font-bold text-graphite mb-12 tracking-tight">
            Product Specification
          </h2>
          
          <div className="w-full overflow-x-auto">
            <table className="w-full text-start min-w-[700px]">
              <thead className="border-b border-rule-firm">
                <tr className="text-[13px] text-zinc font-semibold">
                  <th className="py-4 font-semibold text-start">Property</th>
                  <th className="py-4 font-semibold text-start">Method</th>
                  <th className="py-4 font-semibold text-end">Specification</th>
                  <th className="py-4 font-semibold text-end pe-4">Typical</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-paper-alt border-b border-rule">
                  <td colSpan={4} className="py-3 px-2 text-[13px] font-semibold text-zinc">Physical & safety</td>
                </tr>
                <tr className="border-b border-rule hover:bg-paper-alt transition-colors duration-100 h-[52px]">
                  <td className="py-2 text-[14px] text-graphite">Penetration @ 25°C</td>
                  <td className="py-2 text-[14px] text-zinc">ASTM D5</td>
                  <td className="py-2 text-[14px] text-graphite text-end data">60–70</td>
                  <td className="py-2 text-[14px] text-graphite text-end pe-4 data">64</td>
                </tr>
                <tr className="border-b border-rule hover:bg-paper-alt transition-colors duration-100 h-[52px] border-s-2 border-heat bg-paper-alt/30">
                  <td className="py-2 text-[14px] text-graphite ps-3">Softening point</td>
                  <td className="py-2 text-[14px] text-zinc">ASTM D36</td>
                  <td className="py-2 text-[14px] text-graphite text-end data">49–56</td>
                  <td className="py-2 text-[14px] text-graphite text-end pe-4 data">52</td>
                </tr>
                <tr className="border-b border-rule hover:bg-paper-alt transition-colors duration-100 h-[52px]">
                  <td className="py-2 text-[14px] text-graphite">Ductility @ 25°C</td>
                  <td className="py-2 text-[14px] text-zinc">ASTM D113</td>
                  <td className="py-2 text-[14px] text-graphite text-end data">≥100</td>
                  <td className="py-2 text-[14px] text-graphite text-end pe-4 data">>150</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="bg-paper-alt py-16 md:py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <h2 className="text-[var(--t-h2)] font-sans font-bold text-graphite mb-12 tracking-tight">
            Primary Applications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] bg-zinc">
                <Image src="/roofing.png" alt="Roofing" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-graphite mb-1">{dict.products.app1}</h3>
                <p className="text-[14px] text-zinc">{dict.products.app1Desc}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] bg-zinc">
                <Image src="/pipe-wrap.png" alt="Pipe Wrap" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-graphite mb-1">{dict.products.app2}</h3>
                <p className="text-[14px] text-zinc">{dict.products.app2Desc}</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative w-full aspect-[4/3] bg-zinc">
                <Image src="/paving.png" alt="Paving" fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-[17px] font-semibold text-graphite mb-1">{dict.products.app3}</h3>
                <p className="text-[14px] text-zinc">{dict.products.app3Desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Supply / Stats */}
      <section id="supply" className="bg-paper py-16 md:py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 border-t border-b border-rule divide-x divide-rule">
            <div className="py-8 md:py-12 px-4 flex flex-col gap-2 text-center md:text-start">
              <div className="text-[48px] md:text-[64px] font-sans font-bold text-graphite leading-none stat">25+</div>
              <div className="text-[14px] text-zinc font-medium">Years Experience</div>
            </div>
            <div className="py-8 md:py-12 px-4 flex flex-col gap-2 text-center md:text-start">
              <div className="text-[48px] md:text-[64px] font-sans font-bold text-graphite leading-none stat">100%</div>
              <div className="text-[14px] text-zinc font-medium">Quality Assured</div>
            </div>
            <div className="py-8 md:py-12 px-4 flex flex-col gap-2 text-center md:text-start border-t md:border-t-0 border-rule">
              <div className="text-[48px] md:text-[64px] font-sans font-bold text-graphite leading-none stat">40+</div>
              <div className="text-[14px] text-zinc font-medium">Countries Served</div>
            </div>
            <div className="py-8 md:py-12 px-4 flex flex-col gap-2 text-center md:text-start border-t md:border-t-0 border-rule">
              <div className="text-[48px] md:text-[64px] font-sans font-bold text-graphite leading-none stat">24/7</div>
              <div className="text-[14px] text-zinc font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company / Features */}
      <section id="about" className="bg-paper-alt py-16 md:py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <h2 className="text-[var(--t-h2)] font-sans font-bold text-graphite mb-12 tracking-tight">
            Excellence in Production
          </h2>
          <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-rule border-t border-b border-rule">
            <div className="py-6 md:py-8 px-4 flex-1">
              <h4 className="text-[16px] font-semibold text-graphite mb-1">Made in Iraq</h4>
              <p className="text-[14px] text-zinc">Proudly produced with advanced technology.</p>
            </div>
            <div className="py-6 md:py-8 px-4 flex-1">
              <h4 className="text-[16px] font-semibold text-graphite mb-1">Competitive pricing</h4>
              <p className="text-[14px] text-zinc">Best value for long-term success.</p>
            </div>
            <div className="py-6 md:py-8 px-4 flex-1">
              <h4 className="text-[16px] font-semibold text-graphite mb-1">Flexible supply</h4>
              <p className="text-[14px] text-zinc">Bulk supply & reliable logistics.</p>
            </div>
            <div className="py-6 md:py-8 px-4 flex-1">
              <h4 className="text-[16px] font-semibold text-graphite mb-1">Fast delivery</h4>
              <p className="text-[14px] text-zinc">On time, everywhere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact / Quote */}
      <section id="contact" className="bg-paper py-16 md:py-24 lg:py-32">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6 max-w-[560px] mx-auto ms-0">
          <h2 className="text-[var(--t-h2)] font-sans font-bold text-graphite mb-10 tracking-tight">
            Request a Quotation
          </h2>
          <form className="flex flex-col gap-6 w-full max-w-[560px]">
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-zinc font-medium">Full Name</label>
              <input type="text" className="h-[48px] bg-transparent border-b border-rule text-graphite text-[17px] focus:outline-none focus:border-graphite transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-zinc font-medium">Email Address</label>
              <input type="email" className="h-[48px] bg-transparent border-b border-rule text-graphite text-[17px] focus:outline-none focus:border-graphite transition-colors" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[13px] text-zinc font-medium">Company</label>
              <input type="text" className="h-[48px] bg-transparent border-b border-rule text-graphite text-[17px] focus:outline-none focus:border-graphite transition-colors" />
            </div>
            <button type="submit" className="mt-4 bg-heat text-paper h-[48px] rounded-[2px] font-semibold text-[14px] w-full md:w-auto md:px-10 self-start hover:opacity-90 transition-opacity">
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-bitumen text-paper pt-16 md:pt-24 pb-12">
        <div className="max-w-[1440px] mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6 mb-16">
            <div>
              <div className="font-sans font-bold text-[17px] tracking-tight uppercase mb-6 text-paper">GLOBAL AGRO</div>
              <p className="text-[15px] opacity-70 leading-relaxed max-w-[280px]">
                A leading manufacturer and exporter of premium blown asphalt 60/70. Quality you can trust, durability you can build on.
              </p>
            </div>
            <div>
              <div className="font-semibold border-b border-rule-firm pb-2 mb-4 inline-block opacity-90">Product</div>
              <ul className="flex flex-col gap-3 text-[15px] opacity-70">
                <li><Link href="#products" className="hover:opacity-100 transition-opacity">Specification</Link></li>
                <li><Link href="#applications" className="hover:opacity-100 transition-opacity">Applications</Link></li>
                <li><Link href="#supply" className="hover:opacity-100 transition-opacity">Supply</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold border-b border-rule-firm pb-2 mb-4 inline-block opacity-90">Downloads</div>
              <ul className="flex flex-col gap-3 text-[15px] opacity-70">
                <li><a href="/Global_Agro_Technical_Specifications.pdf" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">TDS (PDF)</a></li>
                <li><Link href="#" className="hover:opacity-100 transition-opacity">MSDS (PDF)</Link></li>
              </ul>
            </div>
            <div>
              <div className="font-semibold border-b border-rule-firm pb-2 mb-4 inline-block opacity-90">Contact</div>
              <ul className="flex flex-col gap-3 text-[15px] opacity-70">
                <li>Iraq: Basra</li>
                <li>Turkey: Istanbul</li>
                <li><a href="https://wa.me/905327448587" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">WhatsApp: +90 532 744 85 87</a></li>
                <li><a href="mailto:info@global-agro.net" className="hover:opacity-100 transition-opacity">info@global-agro.net</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-paper/20 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] opacity-55">
            <div>&copy; {new Date().getFullYear()} GLOBAL AGRO Co. All rights reserved.</div>
            <div className="flex gap-4">
              <span>EN</span>
              <span>TR</span>
              <span>AR</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
"""

with open('src/app/[lang]/page.tsx', 'w', encoding='utf-8') as f:
    f.write(content)
print("page.tsx rewritten for Phase B")
