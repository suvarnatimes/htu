'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  BookOpen, 
  Award, 
  ShieldCheck, 
  GraduationCap, 
  Users, 
  Globe2, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle, 
  Calendar, 
  Sparkles, 
  ArrowRight 
} from 'lucide-react';

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/convocation-hero.jpg',
      title: 'Hope Theological University Welcomes You',
      subtitle: 'Inaugurated in 2019 to train young men and women for transformative leadership ministry in the Church and society.',
      tag: 'Academic Convocation & Leadership'
    },
    {
      image: '/images/theology-students.jpg',
      title: 'Distance & Online Biblical Education',
      subtitle: 'Earn your Diploma, Bachelor, Master, and Doctorate from the comfort of your own home or local study center.',
      tag: 'Flexible Learning Anywhere'
    },
    {
      image: '/images/doctorate-ceremony.jpg',
      title: 'Honoring Global Servant Leaders',
      subtitle: 'Conferring Honorary Doctorates (Honoris Causa) to individuals who have made exemplary contributions to faith and humanity.',
      tag: 'Recognizing Lifelong Dedication'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="flex flex-col">
      {/* Hero Carousel Section */}
      <section className="relative w-full h-[500px] sm:h-[580px] bg-slate-900 overflow-hidden text-white">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center brightness-75 scale-105 transition-transform duration-7000 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d2040]/95 via-[#0d2040]/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full">
                <div className="max-w-2xl">
                  <span className="inline-block py-1 px-3 bg-[#c59b27] text-[#0d2040] font-bold text-xs uppercase tracking-wider rounded mb-3 shadow">
                    {slide.tag}
                  </span>
                  <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight drop-shadow-md">
                    {slide.title}
                  </h1>
                  <p className="mt-4 text-base sm:text-lg text-gray-200 leading-relaxed font-sans max-w-xl drop-shadow">
                    {slide.subtitle}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href="/courses"
                      className="px-6 py-3 bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow transition flex items-center gap-2"
                    >
                      <span>Explore Courses</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="/about"
                      className="px-6 py-3 bg-white/20 hover:bg-white/30 text-white font-semibold text-xs sm:text-sm uppercase tracking-wider rounded backdrop-blur border border-white/40 transition"
                    >
                      Read Our Story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Carousel Navigation Arrows */}
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-[#c59b27] text-white hover:text-[#0d2040] transition"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-black/40 hover:bg-[#c59b27] text-white hover:text-[#0d2040] transition"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all ${
                idx === currentSlide ? 'w-8 bg-[#c59b27]' : 'w-2.5 bg-white/50'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Quick Stats Banner */}
      <section className="bg-[#0d2040] text-white py-6 border-b-2 border-[#c59b27]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="border-r border-gray-700 last:border-none pr-4">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#c59b27]">2019</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider mt-1">Established Year</div>
            </div>
            <div className="border-r border-gray-700 last:border-none pr-4">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#c59b27]">100%</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider mt-1">Distance & Online</div>
            </div>
            <div className="border-r border-gray-700 last:border-none pr-4">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#c59b27]">30+</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider mt-1">Theological Programs</div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#c59b27]">Synod</div>
              <div className="text-xs text-gray-300 uppercase tracking-wider mt-1">Episcopal Affiliation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome & Founder Story Section */}
      <section className="py-16 bg-[#fbfaf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 border border-[#c59b27]/30 rounded-full text-xs font-semibold text-[#0d2040]">
                <Sparkles className="w-3.5 h-3.5 text-[#c59b27]" />
                <span>Foundational Legacy</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0d2040] leading-snug">
                Hope Theological University Welcomes You
              </h2>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                In 2019, <strong>Dr. Davidpaul Arjilli</strong> and a group of pastors and elders inaugurated <strong>Hope Theological University</strong> to train young men and women to enter leadership ministry in the Church. Most of the current pastors and elders of the local churches are getting up in years, and finding young people to follow after them has been challenging.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                HTU was founded to bridge this vital generational gap, providing rigorous Biblical foundation, pastoral mentorship, and accessible distance education so students across India and abroad can answer God's calling without leaving their ministry or families.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <a
                  href="/about"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0d2040] hover:text-[#c59b27] transition"
                >
                  <span>Read Full About HTU</span>
                  <ChevronRight className="w-4 h-4 text-[#c59b27]" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative rounded-lg overflow-hidden shadow-xl border-4 border-white bg-white">
                <div className="relative w-full h-80">
                  <Image
                    src="/images/pastors-bishops-assembly.jpg"
                    alt="Students and pastoral leadership assembly"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 bg-white border-t border-gray-100">
                  <h4 className="font-serif font-bold text-[#0d2040] text-base">Biblical & Theological Rigor</h4>
                  <p className="text-xs text-gray-600 mt-1">
                    Equipping believers with sound doctrine, practical counseling, and pastoral leadership for the contemporary world.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Highlights: 3 Pillar Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0d2040]">
              Our Foundation & Calling
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mt-3 mb-4 rounded" />
            <p className="text-xs sm:text-sm text-gray-600">
              A comprehensive Christ-centered university empowering ministers, professionals, and community leaders through accredited theological education.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Accreditation */}
            <div className="bg-[#fbfaf6] p-7 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0d2040] text-[#c59b27] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#0d2040] mb-3">
                  ACCREDITATION
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Hope Theological University is an Associate Member, Affiliated and Interdenominational Cathedral Episcopal Synod Bishop's Council, adhering to international academic standards.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <a
                  href="/accreditation"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c59b27] hover:text-[#0d2040] uppercase tracking-wider transition"
                >
                  <span>Learn More</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Courses Offered */}
            <div className="bg-[#fbfaf6] p-7 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0d2040] text-[#c59b27] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#0d2040] mb-3">
                  Courses Offered
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Hope Theological University offers distance and online Biblical and Theological education. Students are privileged with the opportunity to earn their Diploma, Bachelor, Master, and Doctorate from the comfort of their own home or office.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <a
                  href="/courses"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c59b27] hover:text-[#0d2040] uppercase tracking-wider transition"
                >
                  <span>View All Programs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 3: Who We Are */}
            <div className="bg-[#fbfaf6] p-7 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition group flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0d2040] text-[#c59b27] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-serif font-bold text-[#0d2040] mb-3">
                  WHO WE ARE
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Offering online education in Counseling in Peace, Sports & Health Education, Critical Management, and tailor-made programs. Degrees are awarded based on work and life experience with international standards, empowering individuals regardless of age, caste, creed, or religion.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200">
                <a
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#c59b27] hover:text-[#0d2040] uppercase tracking-wider transition"
                >
                  <span>Read Statement</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conferred Doctorates Preview Section */}
      <section className="py-16 bg-[#0d2040] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-widest text-[#c59b27]">Honoris Causa</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
                Distinguished Honorary Doctorates
              </h2>
            </div>
            <a
              href="/honorable-doctorates"
              className="text-xs font-bold text-[#c59b27] hover:text-white uppercase tracking-wider flex items-center gap-1 transition"
            >
              <span>View All Conferred Honorees & Titles</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Honoree 1 */}
            <div className="bg-[#142d54] rounded-lg p-5 border border-gray-700 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#c59b27] mb-4 shadow">
                <Image src="/images/dr-john-wesly.jpg" alt="Dr. BOLLAVARAPU JOHN WESLY" fill sizes="96px" className="object-cover" loading="lazy" />
              </div>
              <h3 className="font-serif font-bold text-base text-white">Dr. BOLLAVARAPU JOHN WESLY</h3>
              <p className="text-xs text-[#c59b27] mt-1 font-medium">Chairman, Rashtra Christian Minority Corporation</p>
              <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                Conferred with the National Award of The Best Leadership (Honoris Causa) for the significant contribution to the Christian community and Humanity.
              </p>
            </div>

            {/* Honoree 2 */}
            <div className="bg-[#142d54] rounded-lg p-5 border border-gray-700 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#c59b27] mb-4 shadow">
                <Image src="/images/dr-vallepu-varaprasad.jpg" alt="Dr. VALLEPU VARAPRASAD" fill sizes="96px" className="object-cover" loading="lazy" />
              </div>
              <h3 className="font-serif font-bold text-base text-white">Dr. VALLEPU VARAPRASAD</h3>
              <p className="text-xs text-[#c59b27] mt-1 font-medium">Pulivendula Municipal Chairman, Andhra Pradesh</p>
              <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                Conferred with the Degree of Doctor of Best Social Service (Honoris Causa) for the exemplary contribution to the Nation and Humanity.
              </p>
            </div>

            {/* Honoree 3 */}
            <div className="bg-[#142d54] rounded-lg p-5 border border-gray-700 flex flex-col items-center text-center">
              <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-[#c59b27] mb-4 shadow">
                <Image src="/images/dr-vempati-raghuram.jpg" alt="Dr. VEMPATI RAGHURAM" fill sizes="96px" className="object-cover" loading="lazy" />
              </div>
              <h3 className="font-serif font-bold text-base text-white">Dr. VEMPATI RAGHURAM</h3>
              <p className="text-xs text-[#c59b27] mt-1 font-medium">High Court Advocate of Andhra Pradesh</p>
              <p className="text-xs text-gray-300 mt-3 leading-relaxed">
                Conferred with the Degree of Doctor of Philosophy (Thesis Causa) for History of Roman Catholic Church.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Verification & Results CTA Banner */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-gradient-to-r from-[#0d2040] via-[#1a365d] to-[#0d2040] rounded-xl p-8 sm:p-10 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-lg">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs uppercase font-bold text-[#c59b27] tracking-wider">Fast & Transparent</span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                Certificate Verification & Examination Results
              </h3>
              <p className="text-xs sm:text-sm text-gray-200 max-w-xl">
                Employers, verification agencies, and students can authenticate diplomas, degrees, and verify semester exam marks directly online.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 flex-shrink-0">
              <a
                href="/certificate-verification"
                className="px-6 py-3 bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] font-bold text-xs uppercase tracking-wider rounded shadow transition"
              >
                Verify Certificate
              </a>
              <a
                href="/results"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded border border-white/30 transition"
              >
                Check Results
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
