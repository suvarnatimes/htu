'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  Menu, 
  X, 
  Award,
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  MapPin,
  ShieldCheck
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
    <header className="w-full sticky top-0 z-50 bg-white shadow-md transition-all duration-200">
      {/* ============================================================== */}
      {/* 1. DESKTOP MODE (hidden xl:block) - TWO MAIN ROWS DESIGN       */}
      {/* ============================================================== */}
      <div className="hidden xl:block">
        {/* Top Notification / Utility Bar */}
        <div className="bg-[#0d2040] text-gray-200 text-xs py-1.5 px-4 border-b border-[#c59b27]/30">
          <div className="max-w-7xl mx-auto flex justify-between items-center gap-2">
            <div className="flex items-center gap-6">
              <a href="tel:+919491626233" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
                <Phone className="w-3.5 h-3.5 text-[#c59b27]" /> 
                <span>+91 94916 26233</span>
              </a>
              <a href="mailto:hopetheologicaluniversity@gmail.com" className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
                <Mail className="w-3.5 h-3.5 text-[#c59b27]" /> 
                <span>hopetheologicaluniversity@gmail.com</span>
              </a>
            </div>

            <div className="flex items-center gap-4 text-xs">
              <span className="text-amber-300 font-medium flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" /> Distance & Online Biblical Education
              </span>
              <Link 
                href="/certificate-verification" 
                className="inline-flex items-center gap-1.5 bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] font-bold px-3 py-0.5 rounded-full text-[11px] shadow-sm transition-transform active:scale-95"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verify Certificate
              </Link>
            </div>
          </div>
        </div>

        {/* ROW 1: Two Major Columns (Logo & Text) Aligned to the Center of the Screen */}
        <div className="bg-white py-3.5 px-4 border-b border-gray-100">
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-6">
            {/* Left Column (Small): Logo */}
            <Link href="/" className="flex-shrink-0 group">
              <div className="w-20 h-20 xl:w-24 xl:h-24 flex items-center justify-center p-1 bg-amber-50/40 rounded-xl border border-amber-200/50 shadow-sm group-hover:shadow transition-all">
                <img 
                  src="/images/logo.png" 
                  alt="Hope Theological University Official Logo" 
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform" 
                />
              </div>
            </Link>

            {/* Right Column (Large): All Text Details with Center Line Alignment */}
            <div className="flex-initial flex flex-col justify-center items-center text-center">
              <Link href="/" className="group inline-block">
                <h1 className="text-2xl xl:text-3xl font-serif font-black text-[#0d2040] tracking-wide uppercase leading-tight group-hover:text-amber-700 transition-colors">
                  HOPE THEOLOGICAL UNIVERSITY
                </h1>
              </Link>
              <p className="text-xs xl:text-sm font-semibold text-amber-800 tracking-normal mt-1 leading-snug">
                We Are A Leading University That Offers Distance And Online Biblical and Theological Education
              </p>
              <p className="text-[11px] xl:text-xs text-gray-600 font-medium leading-snug mt-0.5">
                A University of Synodos of Jesus Agape Diocese of India International Episcopal Association
              </p>
              <div className="mt-1.5 flex items-center justify-center gap-2">
                <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-900 border border-amber-300/80 px-2.5 py-0.5 rounded text-[10px] xl:text-[11px] font-bold tracking-wider uppercase shadow-xs">
                  <Award className="w-3.5 h-3.5 text-[#c59b27]" />
                  ISO: INTERNATIONAL QUALITY CERTIFICATION SERVICE UK
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2: Navigation Bar with All Options (Centered) */}
        <div className="bg-[#0d2040] text-white border-t border-[#c59b27]/30 shadow-md">
          <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-4">
            <nav className="flex items-center gap-1 py-1">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3.5 py-2 rounded text-xs xl:text-[13px] font-semibold tracking-wide transition-all ${
                      active
                        ? 'bg-[#c59b27] text-[#0d2040] font-bold shadow-sm'
                        : 'text-gray-200 hover:text-amber-300 hover:bg-white/10'
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center ml-2">
              <Link
                href="/courses"
                className="bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] font-bold text-xs uppercase tracking-wider px-3.5 py-1.5 rounded shadow-sm transition-transform active:scale-95"
              >
                Apply Online
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. MOBILE & TABLET MODE (xl:hidden) - SLIM DESIGN WITH TICKER  */}
      {/* ============================================================== */}
      <div className="xl:hidden">
        {/* Top Notification Bar */}
        <div className="bg-[#0d2040] text-gray-200 text-[10px] sm:text-[11px] py-1 border-b border-[#c59b27]/30">
          <div className="max-w-7xl mx-auto px-3 sm:px-6 flex justify-between items-center gap-2">
            <a 
              href="tel:+919491626233" 
              className="flex items-center gap-1 text-gray-200 hover:text-amber-300 transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#c59b27] flex-shrink-0" /> 
              <span>+91 94916 26233</span>
            </a>

            <Link 
              href="/certificate-verification" 
              className="inline-flex items-center gap-1 bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] font-bold px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] shadow-sm transition-transform active:scale-95 whitespace-nowrap"
            >
              <CheckCircle2 className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
              <span>Verify Certificate</span>
            </Link>
          </div>
        </div>

        {/* Main Bar: ONLY Logo + Name on Mobile/Tablet + Hamburger Toggle */}
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-2">
          <div className="flex items-center justify-between gap-2 min-w-0">
            {/* Logo & Title Only */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3 group min-w-0 flex-1">
              <div className="w-9 h-9 sm:w-11 sm:h-11 flex-shrink-0 flex items-center justify-center">
                <img 
                  src="/images/logo.png" 
                  alt="Hope Theological University Logo" 
                  className="w-full h-full object-contain drop-shadow group-hover:scale-105 transition-transform" 
                />
              </div>
              <span className="text-xs sm:text-base font-serif font-bold text-[#0d2040] tracking-tight leading-tight truncate sm:whitespace-normal">
                HOPE THEOLOGICAL UNIVERSITY
              </span>
            </Link>

            {/* Hamburger Toggle */}
            <div className="flex items-center flex-shrink-0 ml-1">
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

        {/* Bottom Section: Single-Line Continuous Scrolling Text (Marquee Ticker) */}
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

        {/* Mobile / Tablet Drawer */}
        {isOpen && (
          <div className="bg-white border-t border-gray-200 px-4 pt-2 pb-6 space-y-1 shadow-2xl max-h-[calc(100vh-140px)] overflow-y-auto">
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
      </div>
    </header>
  );
}
