'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  Award, 
  CheckCircle2, 
  BookOpen, 
  GraduationCap, 
  Search,
  ExternalLink 
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

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md transition-all duration-200">
      {/* Top Notification Bar */}
      <div className="bg-[#0d2040] text-gray-200 text-xs py-2 px-4 border-b border-[#c59b27]/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <span className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Phone className="w-3.5 h-3.5 text-amber-400" /> +91 94916 26233
            </span>
            <span className="flex items-center gap-1.5 hover:text-amber-300 transition-colors">
              <Mail className="w-3.5 h-3.5 text-amber-400" /> hopetheologicaluniversity@gmail.com
            </span>
            <span className="hidden lg:flex items-center gap-1.5 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" /> Cathedral Episcopal Synod, Andhra Pradesh, India
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Link 
              href="/certificate-verification" 
              className="inline-flex items-center gap-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-3 py-1 rounded-full text-[11px] shadow-sm transition-transform active:scale-95"
            >
              <CheckCircle2 className="w-3.5 h-3.5" />
              Verify Certificate
            </Link>
          </div>
        </div>
      </div>

      {/* Main Branding & Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-14 h-14 sm:w-16 sm:h-16 flex-shrink-0 flex items-center justify-center">
            <img 
              src="/images/logo.png" 
              alt="Hope Theological University Official Logo" 
              className="w-full h-full object-contain drop-shadow group-hover:scale-105 transition-transform" 
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-2xl font-serif font-bold text-[#0d2040] tracking-tight leading-tight">
              Hope Theological University
            </span>
            <span className="text-[10px] sm:text-xs font-medium text-amber-700 tracking-wider uppercase">
              Cathedral Episcopal Synod Bishop's Council
            </span>
            <span className="hidden sm:block text-[9px] text-gray-500">
              Under Christian Education Society Act, Govt. of India
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`px-3 py-2 rounded-md text-xs font-semibold tracking-wide transition-all ${
                isActive(link.href)
                  ? 'bg-[#0d2040] text-amber-400 shadow-sm'
                  : 'text-gray-700 hover:text-[#0d2040] hover:bg-amber-50/80'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="xl:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md text-gray-700 hover:text-[#0d2040] hover:bg-gray-100"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="xl:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-1 shadow-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                isActive(link.href)
                  ? 'bg-[#0d2040] text-amber-400 font-bold'
                  : 'text-gray-700 hover:bg-amber-50 hover:text-[#0d2040]'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
