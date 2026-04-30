"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isCoachingOpen, setIsCoachingOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isMobileCoachingOpen, setIsMobileCoachingOpen] = useState(false);
  const [isMobileResourcesOpen, setIsMobileResourcesOpen] = useState(false);

  const handleCoachingMouseEnter = () => setIsCoachingOpen(true);
  const handleCoachingMouseLeave = () => setIsCoachingOpen(false);

  const handleResourcesMouseEnter = () => setIsResourcesOpen(true);
  const handleResourcesMouseLeave = () => setIsResourcesOpen(false);

  // Coaching dropdown items
  const coachingItems = [
    { href: "/consultations", label: "Consultations" },
    { href: "/programs", label: "Programs" },
    { href: "/membership", label: "Memberships" },
  ];

  // Resources dropdown items
  const resourcesItems = [
    { href: "/blog", label: "Blog" },
    { href: "/guides", label: "Downloadable Guides" },
    { href: "/faqs", label: "FAQs" },
  ];

  // Left navigation links
  const leftLinks = [
    { href: "/events", label: "Events" },
  ];

  // Right navigation links
  const rightLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/portal", label: "Portal" },
  ];

  return (
    <nav
      style={{
        backgroundColor: '#ffffff',
        color: 'black',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        fontFamily: 'var(--font-inter), Inter, sans-serif',
        borderBottom: '1px solid #d0d0d0',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center h-28 relative">
          {/* Left Navigation Links */}
          <div className="flex gap-10 flex-1 justify-start items-center">
            {/* Coaching Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleCoachingMouseEnter}
              onMouseLeave={handleCoachingMouseLeave}
            >
              <button className={`text-[13px] font-semibold uppercase tracking-[0.2em] py-2 px-2 nav-link-underline ${isCoachingOpen ? 'nav-link-underline-active' : ''}`}>
                Coaching
              </button>
              {isCoachingOpen && (
                <>
                  {/* Invisible hover bridge - fills gap between button and dropdown */}
                  <div
                    className="absolute left-0 right-0"
                    style={{
                      top: '100%',
                      height: '39px',
                      pointerEvents: 'auto',
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute left-0 -ml-4 pl-4 pr-8" style={{ top: 'calc(100% + 39px)' }}>
                    <div className="w-64 shadow-lg border border-gray-200 rounded-md py-3" style={{ backgroundColor: '#f4f4f4' }}>
                      {coachingItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] border-l-4 border-transparent hover:bg-white hover:font-bold transition-all ${
                            item.label === "Consultations"
                              ? "hover:border-l-[#017174]"
                              : item.label === "Memberships"
                              ? "hover:border-l-[#943888]"
                              : "hover:border-l-[#ED9E52]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            
            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={handleResourcesMouseEnter}
              onMouseLeave={handleResourcesMouseLeave}
            >
              <button className={`text-[13px] font-semibold uppercase tracking-[0.2em] py-2 px-2 nav-link-underline ${isResourcesOpen ? 'nav-link-underline-active' : ''}`}>
                Resources
              </button>
              {isResourcesOpen && (
                <>
                  {/* Invisible hover bridge */}
                  <div
                    className="absolute left-0 right-0"
                    style={{
                      top: '100%',
                      height: '39px',
                      pointerEvents: 'auto',
                    }}
                    aria-hidden="true"
                  />
                  <div className="absolute left-0 -ml-4 pl-4 pr-8" style={{ top: 'calc(100% + 39px)' }}>
                    <div className="w-64 shadow-lg border border-gray-200 rounded-md py-3" style={{ backgroundColor: '#f4f4f4' }}>
                      {resourcesItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block px-6 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] border-l-4 border-transparent hover:bg-white hover:font-bold transition-all ${
                            item.label === "Blog"
                              ? "hover:border-l-[#017174]"
                              : item.label === "FAQs"
                              ? "hover:border-l-[#943888]"
                              : "hover:border-l-[#ED9E52]"
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-semibold uppercase tracking-[0.2em] nav-link-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <Link
            href="/"
            className="absolute left-1/2 transform -translate-x-1/2 flex items-center"
          >
            <Image
              src="/images/WeVolv-logo-transparent.png"
              alt="WeVolv Logo"
              width={450}
              height={150}
              className="object-contain"
              style={{width: "150px", height: "auto"}}
              priority
            />
          </Link>

          {/* Right Navigation Links */}
          <div className="flex gap-10 flex-1 justify-end">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] font-semibold uppercase tracking-[0.2em] nav-link-underline"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-between items-center h-20">
          {/* Mobile Logo */}
          <Link
            href="/"
            className="flex items-center"
          >
            <Image
              src="/images/WeVolv-logo-transparent.png"
              alt="WeVolv Logo"
              width={360}
              height={120}
              className="object-contain"
              style={{width: "120px", height: "auto"}}
              priority
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black hover:opacity-70 focus:outline-none transition-opacity"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="lg:hidden border-t border-gray-200" style={{ backgroundColor: '#f4f4f4' }}>
          <div className="px-4 pt-3 pb-5 space-y-1">

            {/* Home */}
            <Link
              href="/"
              className="block px-3 py-2.5 text-[13px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>

            {/* Coaching Section */}
            <div>
              <button
                onClick={() => setIsMobileCoachingOpen(!isMobileCoachingOpen)}
                className="w-full flex justify-between items-center px-3 py-2.5 text-[13px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors text-left"
              >
                Coaching
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileCoachingOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMobileCoachingOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-300 pl-3">

                  {/* Consultations with nested sub-pages */}
                  <div>
                    <Link
                      href="/consultations"
                      className="block px-3 py-2 text-[12px] font-semibold uppercase tracking-wider hover:bg-gray-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      Consultations
                    </Link>
                    <div className="ml-4 mt-0.5 space-y-0.5 border-l-2 border-gray-200 pl-3">
                      <Link
                        href="/weight-management"
                        className="block px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Weight Management
                      </Link>
                      <Link
                        href="/nutrition"
                        className="block px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-gray-600 hover:bg-gray-50 hover:text-black transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        Nutrition
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="/programs"
                    className="block px-3 py-2 text-[12px] font-semibold uppercase tracking-wider hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Programs
                  </Link>
                  <Link
                    href="/membership"
                    className="block px-3 py-2 text-[12px] font-semibold uppercase tracking-wider hover:bg-gray-50 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Memberships
                  </Link>
                </div>
              )}
            </div>

            {/* Resources Section */}
            <div>
              <button
                onClick={() => setIsMobileResourcesOpen(!isMobileResourcesOpen)}
                className="w-full flex justify-between items-center px-3 py-2.5 text-[13px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors text-left"
              >
                Resources
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${isMobileResourcesOpen ? 'rotate-180' : ''}`}
                  fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {isMobileResourcesOpen && (
                <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-300 pl-3">
                  {resourcesItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-3 py-2 text-[12px] font-semibold uppercase tracking-wider hover:bg-gray-50 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Top-level links */}
            {[
              { href: "/events", label: "Events" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
              { href: "/portal", label: "Portal" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 text-[13px] font-bold uppercase tracking-widest hover:bg-gray-50 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

          </div>
        </div>
      )}
    </nav>
  );
}