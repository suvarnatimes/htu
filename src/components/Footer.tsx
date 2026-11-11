import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  BookOpen, 
  Award, 
  ShieldCheck, 
  ChevronRight, 
  Heart,
  Globe 
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#091528] text-gray-300 font-sans border-t-4 border-[#c59b27]">
      {/* Top Banner inside Footer */}
      <div className="bg-[#0d2040] py-8 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-full bg-white p-1 border-2 border-[#c59b27] flex-shrink-0">
              <img src="/images/logo.jpg" alt="HTU Seal" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-xl font-serif font-bold text-white">Hope Theological University</h3>
              <p className="text-xs text-gray-300 mt-1">
                Fulfilling the Great Commission (Matthew 28:19-20) through accessible, high-caliber distance theological training.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            <a 
              href="/contact" 
              className="px-5 py-2.5 bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] font-bold text-xs uppercase tracking-wider rounded transition shadow"
            >
              Contact Admissions
            </a>
            <a 
              href="/honorable-doctorates" 
              className="px-5 py-2.5 bg-transparent hover:bg-white/10 text-white border border-gray-500 font-semibold text-xs uppercase tracking-wider rounded transition"
            >
              Honorary Doctorates
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Who We Are */}
          <div>
            <h4 className="text-base font-serif font-bold text-white mb-4 uppercase tracking-wider border-l-4 border-[#c59b27] pl-2.5">
              Who We Are
            </h4>
            <p className="text-xs leading-relaxed text-gray-300 mb-4">
              Hope Theological University offers distance and online education in a variety of fields including Counseling in Peace, Sports & Health Education, Critical Management, and tailor-made diploma, undergraduate, and postgraduate programs. We also honor exemplary servant-leaders through Honorary Doctorates and Social Awards.
            </p>
            <p className="text-xs leading-relaxed text-gray-400">
              Our certifications empower candidates seeking career advancement or ministerial service, equipping believers worldwide regardless of age, caste, creed, or background.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-base font-serif font-bold text-white mb-4 uppercase tracking-wider border-l-4 border-[#c59b27] pl-2.5">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {[
                { name: 'Home', href: '/' },
                { name: 'About HTU & Creed', href: '/about' },
                { name: 'Courses Offered', href: '/courses' },
                { name: 'Accreditation', href: '/accreditation' },
                { name: 'Associate Members', href: '/associate-members' },
                { name: 'Certificate Verification', href: '/certificate-verification' },
                { name: 'Honorable Doctorates', href: '/honorable-doctorates' },
                { name: 'Student Exam Results', href: '/results' },
                { name: 'Contact & Study Centers', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href} 
                    className="flex items-center gap-1.5 text-gray-300 hover:text-[#c59b27] transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#c59b27]" />
                    <span>{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Academic Programs */}
          <div>
            <h4 className="text-base font-serif font-bold text-white mb-4 uppercase tracking-wider border-l-4 border-[#c59b27] pl-2.5">
              Theological Degrees
            </h4>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li className="pb-2 border-b border-gray-800">
                <span className="font-semibold text-white block">Bachelor of Theology (BTh)</span>
                <span className="text-[11px] text-gray-400">Standard Biblical & Ministerial studies</span>
              </li>
              <li className="pb-2 border-b border-gray-800">
                <span className="font-semibold text-white block">Master of Theology (MTh)</span>
                <span className="text-[11px] text-gray-400">Advanced pastoral theology & leadership</span>
              </li>
              <li className="pb-2 border-b border-gray-800">
                <span className="font-semibold text-white block">Doctor of Philosophy (Ph.D.)</span>
                <span className="text-[11px] text-gray-400">Theology, Counseling & Biblical Research</span>
              </li>
              <li className="pt-1">
                <span className="font-semibold text-[#c59b27] block">Honorary Doctorates (Honoris Causa)</span>
                <span className="text-[11px] text-gray-400">Honoring lifelong spiritual & humanitarian service</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Offices */}
          <div>
            <h4 className="text-base font-serif font-bold text-white mb-4 uppercase tracking-wider border-l-4 border-[#c59b27] pl-2.5">
              Contact Offices
            </h4>
            <div className="space-y-4 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c59b27] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-medium">National Office:</strong>
                  <span>Building number: 2/3, Near Canara Bank, Badarpur, New Delhi (110044)</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#c59b27] mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-white block font-medium">South India Office:</strong>
                  <span>Machilipatnam, Krishna District, Andhra Pradesh - 521002</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                <a href="tel:9492157339" className="hover:text-white transition">
                  +91 9492157339
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                <a href="mailto:hopetheologicaluniversity@gmail.com" className="hover:text-white transition break-all">
                  hopetheologicaluniversity@gmail.com
                </a>
              </div>
              <div className="pt-2">
                <div className="inline-block bg-[#142d54] text-[#c59b27] text-[11px] px-3 py-1.5 rounded border border-[#c59b27]/30">
                  Episcopal Synod Bishop's Council Affiliation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#050b15] py-4 px-4 text-center text-xs text-gray-400 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <p>© 2023–2026 Hope Theological University. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1 text-gray-400">
            <span>Designed by</span>
            <span className="text-[#c59b27] font-semibold tracking-wide">ALTARVISION</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
