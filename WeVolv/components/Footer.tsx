'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState({
    shop: false,
    learn: false,
    company: false
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      shop: prev[section] && section === 'shop' ? !prev[section] : false,
      learn: prev[section] && section === 'learn' ? !prev[section] : false,
      company: prev[section] && section === 'company' ? !prev[section] : false,
      [section]: !prev[section]
    }));
  };

  return (
    <footer style={{ backgroundColor: 'var(--footer-bg)', color: 'var(--footer-text)', margin: 0, fontFamily: 'var(--font-inter), Inter, sans-serif' }}>
      <div className="border-t border-gray-300 w-full"></div>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-4 md:items-stretch" style={{ minHeight: '300px' }}>
          {/* Company Info */}
          <div className="hidden md:flex flex-col py-10 md:px-10 md:pl-16 items-center md:items-start px-8">
            <div className="mb-4">
              <Image
                src="/images/WeVolv-logo-transparent.png"
                alt="WeVolv Logo"
                width={540}
                height={180}
                className="object-contain"
                style={{width: "220px", height: "auto"}}
              />
            </div>
            <p className="text-xs uppercase tracking-wide font-medium text-center md:text-left" style={{ lineHeight: '1.5', maxWidth: '300px' }}>
              <a href="tel:+17025278520" className="hover:opacity-70 transition-opacity">(702) 527-8520</a>
            </p>
            <p className="text-xs uppercase tracking-wide font-medium text-center md:text-left" style={{ lineHeight: '1.8', maxWidth: '300px', marginTop: '0.75rem' }}>
              Southwest<br />
              6675 S. Tenaya Way<br />
              Suite 200<br />
              Las Vegas, Nevada 89113
            </p>
          </div>
          
          {/* Mobile: Company Logo and Info */}
          <div className="md:hidden flex flex-col py-10 px-10 items-center justify-center">
            <div className="mb-8 flex justify-center">
              <Image
                src="/images/WeVolv-logo-transparent.png"
                alt="WeVolv Logo"
                width={540}
                height={180}
                className="object-contain mx-auto"
                style={{width: "360px", height: "auto"}}
              />
            </div>
            <p className="text-sm uppercase tracking-wide font-medium text-center" style={{ lineHeight: '1.5', maxWidth: '300px' }}>
              <a href="tel:+17025278520" className="hover:opacity-70 transition-opacity">(702) 527-8520</a>
            </p>
            <p className="text-sm uppercase tracking-wide font-medium text-center" style={{ lineHeight: '1.8', maxWidth: '300px', marginTop: '0.75rem' }}>
              Southwest<br />
              6675 S. Tenaya Way<br />
              Suite 200<br />
              Las Vegas, Nevada 89113
            </p>
          </div>

          {/* Shop Links - Collapsible on Mobile */}
          <div className="border-t md:border-t-0 md:border-l border-gray-300 md:px-10 px-10 flex flex-col py-10 md:py-10">
            <button 
              onClick={() => toggleSection('shop')}
              className="md:hidden flex justify-between items-center w-full mb-0 hover:opacity-70 transition-opacity text-left"
            >
              <h5 className="text-4xl font-semibold" style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}>Shop</h5>
              <span className="text-3xl">{expandedSections.shop ? '−' : '+'}</span>
            </button>
            <h5 className="hidden md:block text-3xl mb-4 font-semibold" style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}>Shop</h5>
            <ul className={`space-y-5 md:space-y-3 md:block mt-8 md:mt-2 overflow-hidden transition-all duration-300 ease-in-out md:max-h-none md:opacity-100 ${expandedSections.shop ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <li className="text-base md:text-xs uppercase tracking-widest font-medium">
                <Link href="/weight-management" className="hover:opacity-70 transition-opacity">
                  Weight Management
                </Link>
              </li>
              {/* Oral Dissolvable Strips link hidden, bring back later */}
              {/* <li className="text-base md:text-xs uppercase tracking-widest font-medium">
                <Link href="https://wevolvstore.com/" target="_blank" rel="noopener noreferrer" className="hover:opacity-70 transition-opacity">
                  Oral Dissolvable Strips
                </Link>
              </li> */}
              <li className="text-base md:text-xs uppercase tracking-widest font-medium">
                <Link href="/membership" className="hover:opacity-70 transition-opacity">
                  Membership
                </Link>
              </li>
            </ul>
          </div>

          {/* Learn Links - Collapsible on Mobile */}
          <div className="border-t md:border-t-0 md:border-l border-gray-300 md:px-10 px-10 flex flex-col py-10 md:py-10">
            <button 
              onClick={() => toggleSection('learn')}
              className="md:hidden flex justify-between items-center w-full mb-0 hover:opacity-70 transition-opacity text-left"
            >
              <h5 className="text-4xl font-semibold" style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}>Learn</h5>
              <span className="text-3xl">{expandedSections.learn ? '−' : '+'}</span>
            </button>
            <h5 className="hidden md:block text-3xl mb-4 font-semibold" style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}>Learn</h5>
            <ul className={`space-y-5 md:space-y-3 md:block mt-8 md:mt-2 overflow-hidden transition-all duration-300 ease-in-out md:max-h-none md:opacity-100 ${expandedSections.learn ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <li className="text-base md:text-xs uppercase tracking-widest font-medium">
                <Link href="/programs" className="hover:opacity-70 transition-opacity">
                  Programs
                </Link>
              </li>
              <li className="text-base md:text-xs uppercase tracking-widest font-medium">
                <Link href="/blog" className="hover:opacity-70 transition-opacity">
                  Blog
                </Link>
              </li>
              <li className="text-base md:text-xs uppercase tracking-widest font-medium">
                <Link href="/consultations" className="hover:opacity-70 transition-opacity">
                  Consultations
                </Link>
              </li>
              <li className="text-base md:text-xs uppercase tracking-widest font-medium">
                <Link href="/nutrition" className="hover:opacity-70 transition-opacity">
                  Nutrition
                </Link>
              </li>
              <li className="text-base md:text-xs uppercase tracking-widest font-medium">
                <Link href="/faq" className="hover:opacity-70 transition-opacity">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links - Collapsible on Mobile */}
          <div className="border-t md:border-t-0 md:border-l border-gray-300 md:px-10 px-10 flex flex-col py-10 md:py-10">
            <button 
              onClick={() => toggleSection('company')}
              className="md:hidden flex justify-between items-center w-full mb-0 hover:opacity-70 transition-opacity text-left"
            >
              <h5 className="text-4xl font-semibold" style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}>Company</h5>
              <span className="text-3xl">{expandedSections.company ? '−' : '+'}</span>
            </button>
            <h5 className="hidden md:block text-3xl mb-4 font-semibold" style={{ fontFamily: 'var(--font-playfair), Playfair Display, serif' }}>Company</h5>
            <ul className={`space-y-5 md:space-y-3 md:block mt-8 md:mt-2 overflow-hidden transition-all duration-300 ease-in-out md:max-h-none md:opacity-100 ${expandedSections.company ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
              <li className="text-base md:text-xs uppercase tracking-widest font-medium">
                <Link href="/about" className="hover:opacity-70 transition-opacity">
                  About WeVolv
                </Link>
              </li>
              <li className="text-base md:text-xs uppercase tracking-widest font-medium">
                <Link href="/contact" className="hover:opacity-70 transition-opacity">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="px-10 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs tracking-[0.1em] uppercase font-medium text-gray-500 gap-4">
          <div>
            © 2026 WEVOLV WELLNESS
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-center">
            <Link href="/do-not-sell" className="hover:opacity-70 transition-opacity">
              DO NOT SELL OR SHARE MY PERSONAL INFORMATION
            </Link>
            <Link href="/accessibility" className="hover:opacity-70 transition-opacity">
              ACCESSIBILITY
            </Link>
            <Link href="/contact" className="hover:opacity-70 transition-opacity">
              CA PRIVACY NOTICE
            </Link>
            <Link href="/privacy-policy" className="hover:opacity-70 transition-opacity">
              PRIVACY POLICY
            </Link>
            <Link href="/terms-conditions" className="hover:opacity-70 transition-opacity">
              TERMS & CONDITIONS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
