'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  CheckCircle2, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Courses', href: '/courses' },
    { name: 'Accreditation', href: '/accreditation' },
    { name: 'Associate Members', href: '/associate-members' },
    { name: 'Verify Certificate', href: '/certificate-verification' },
    { name: 'Honorable Doctorates', href: '/honorable-doctorates' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  const tickerText = "We Are A Leading University That Offers Distance And Online Biblical and Theological Education  ★  A University of Synodos of Jesus Agape Diocese of India International Episcopal Association  ★  ISO: INTERNATIONAL QUALITY CERTIFICATION SERVICE UK";

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md transition-all">
      {/* Top Notification Bar - Constrained in Container */}
      <div className="bg-[#0d2040] text-gray-200 text-[10px] sm:text-[11px] py-1 border-b border-[#c59b27]/30">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 flex justify-between items-center gap-2">
          <div className="flex items-center gap-3 sm:gap-6 min-w-0">
            <a 
              href="tel:+919491626233" 
              className="flex items-center gap-1 text-gray-200 hover:text-amber-300 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#c59b27] flex-shrink-0" /> 
              <span>+91 94916 26233</span>
            </a>
            <a 
              href="mailto:hopetheologicaluniversity@gmail.com" 
              className="hidden md:flex items-center gap-1 text-gray-200 hover:text-amber-300 transition-colors truncate"
            >
              <Mail className="w-3 h-3 text-[#c59b27] flex-shrink-0" /> 
              <span className="truncate">hopetheologicaluniversity@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center gap-2 flex-shrink-0">
            <Link 
              href="/certificate-verification" 
              className="inline-flex items-center gap-1 bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] font-bold px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full text-[9px] sm:text-[10px] shadow-sm transition-transform active:scale-95 whitespace-nowrap"
            >
              <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>Verify Certificate</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Bar: Strictly inside max-w-7xl container with responsive text sizing */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-1.5 sm:py-2">
        <div className="flex items-center justify-between gap-2 sm:gap-4 min-w-0">
          {/* Logo & Title - Stays inside container on all screen sizes */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 flex-1">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 flex-shrink-0 flex items-center justify-center">
              <img 
                src="/images/logo.png" 
                alt="Hope Theological University Logo" 
                className="w-full h-full object-contain drop-shadow group-hover:scale-105 transition-transform" 
              />
            </div>
            <span className="text-xs sm:text-base md:text-lg lg:text-xl xl:text-2xl font-serif font-bold text-[#0d2040] tracking-tight leading-tight truncate sm:whitespace-normal">
              HOPE THEOLOGICAL UNIVERSITY
            </span>
          </Link>

          {/* Desktop Navigation Links - Compacted to avoid overflowing 1280px screens */}
          <nav className="hidden xl:flex items-center gap-0.5 flex-shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-2 xl:px-2.5 py-1 text-[11px] xl:text-xs font-semibold tracking-wider uppercase rounded transition-all whitespace-nowrap ${
                  isActive(link.href)
                    ? 'bg-[#0d2040] text-[#c59b27] shadow-sm'
                    : 'text-gray-700 hover:text-[#0d2040] hover:bg-amber-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/courses"
              className="ml-1.5 px-3 py-1 bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] text-[11px] font-bold uppercase tracking-wider rounded shadow transition whitespace-nowrap"
            >
              Apply Online
            </Link>
          </nav>

          {/* Mobile & Tablet Hamburger Toggle */}
          <div className="xl:hidden flex items-center flex-shrink-0 ml-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1 sm:p-1.5 rounded-lg text-gray-700 hover:text-[#0d2040] hover:bg-gray-100 border border-gray-200 transition"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section: Single-Line Continuous Scrolling Text (Marquee Ticker) - Aligned to Container */}
      <div className="bg-[#0d2040] text-[#f4df95] text-[10px] sm:text-xs py-1 border-t border-[#c59b27]/40 overflow-hidden relative shadow-inner">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 flex items-center min-w-0">
          {/* Announcement Pill Badge */}
          <div className="flex-shrink-0 z-10 bg-[#c59b27] text-[#0d2040] font-bold text-[9px] sm:text-[10px] uppercase tracking-wider px-2 py-0.5 mr-2 sm:mr-3 rounded shadow-sm flex items-center gap-1 whitespace-nowrap">
            <Sparkles className="w-2.5 h-2.5 flex-shrink-0" />
            <span>Official</span>
          </div>

          {/* Infinite Smooth Scrolling Marquee */}
          <div className="overflow-hidden whitespace-nowrap flex-1 min-w-0 relative">
            <div className="animate-marquee flex gap-8">
              <span className="font-medium tracking-wide">
                {tickerText}
              </span>
              <span className="font-medium tracking-wide" aria-hidden="true">
                {tickerText}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-200 px-4 pt-2 pb-6 space-y-1 shadow-2xl max-h-[calc(100vh-140px)] overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? 'bg-[#0d2040] text-[#c59b27] font-bold'
                  : 'text-gray-700 hover:bg-amber-50 hover:text-[#0d2040]'
              }`}
            >
              <span>{link.name}</span>
              <ChevronRight className={`w-4 h-4 ${isActive(link.href) ? 'text-[#c59b27]' : 'text-gray-400'}`} />
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-100 mt-2">
            <Link
              href="/courses"
              onClick={() => setIsOpen(false)}
              className="block text-center py-2.5 px-4 bg-[#c59b27] text-[#0d2040] font-bold text-xs uppercase tracking-wider rounded shadow"
            >
              Apply Online
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
