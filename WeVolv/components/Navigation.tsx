"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  // Left navigation links
  const leftLinks = [
    { href: "/consultations", label: "Coaching" },
    { href: "/resources", label: "Resources" },
    { href: "#", label: "Events" },
  ];

  // Right navigation links
  const rightLinks = [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Portal" },
  ];

  // All links for mobile menu
  const allLinks = [
    { href: "/", label: "Home" },
    ...leftLinks,
    { href: "/weight-management", label: "Weight Management" },
    { href: "/fitness", label: "Fitness" },
    { href: "/nutrition", label: "Nutrition" },
    { href: "/herbalife", label: "Herbalife" },
    { href: "/lifewave", label: "Lifewave" },
    { href: "/membership", label: "Membership" },
    { href: "/programs-faq", label: "Programs & FAQ" },
    ...rightLinks,
  ];

  return (
    <nav
      style={{
        backgroundColor: 'white',
        color: 'black',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center h-20 relative">
          {/* Left Navigation Links */}
          <div className="flex gap-8 flex-1 justify-start">
            {leftLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.25em] hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Centered Logo */}
          <Link
            href="/"
            className="text-2xl font-light tracking-[0.4em] uppercase absolute left-1/2 transform -translate-x-1/2"
          >
            WEVOLV
          </Link>

          {/* Right Navigation Links */}
          <div className="flex gap-8 flex-1 justify-end">
            {rightLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-semibold uppercase tracking-[0.25em] hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex justify-between items-center h-16">
          {/* Mobile Logo */}
          <Link
            href="/"
            className="text-lg font-semibold tracking-[0.15em] uppercase"
          >
            WEVOLV
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
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-3 space-y-1">
            {allLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm uppercase tracking-wide hover:bg-gray-50 transition-colors"
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
