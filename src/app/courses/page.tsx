import React from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Award, 
  Clock, 
  CheckCircle, 
  Calendar, 
  Users, 
  Laptop, 
  FileText,
  HelpCircle,
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export const metadata = {
  title: 'Academic Programs & Degree Courses | Hope Theological University',
  description: 'Official academic programs offered by Hope Theological University: Bachelor, Master, Doctor, Doctor of Philosophy (Ph.D.), and Honorary Doctorates.',
};

export default function CoursesPage() {
  const programSections = [
    {
      category: 'Bachelor Degrees Courses',
      badge: 'Undergraduate Level',
      description: 'Foundational degree programs providing solid Biblical and theological education for ministry and career preparation.',
      courses: [
        {
          code: 'BTh.',
          name: 'Standard of Theology',
          type: 'Bachelor Degree'
        },
        {
          code: 'BVle.',
          name: 'Review of Writing',
          type: 'Bachelor Degree'
        },
        {
          code: 'BD.',
          name: 'Explorer of Darting',
          type: 'Bachelor Degree'
        }
      ]
    },
    {
      category: 'Master Degrees Courses',
      badge: 'Postgraduate Level',
      description: 'Advanced degree programs designed for pastors, leaders, educators, and theological scholars.',
      courses: [
        {
          code: 'MTh.',
          name: 'Master of Theology',
          type: 'Master Degree'
        },
        {
          code: 'MDK.',
          name: 'Master of Darting',
          type: 'Master Degree'
        },
        {
          code: 'MMR.',
          name: 'Master of Writing',
          type: 'Master Degree'
        }
      ]
    },
    {
      category: 'Doctor Degrees Courses',
      badge: 'Doctoral Level',
      description: 'High-level doctoral degree programs advancing ministerial practice, leadership, and theological scholarship.',
      courses: [
        {
          code: 'Ph.D.',
          name: 'Doctor of Theology',
          type: 'Doctor Degree'
        },
        {
          code: 'Do.',
          name: 'Doctor of Darting',
          type: 'Doctor Degree'
        },
        {
          code: 'DVle.',
          name: 'Doctor of Writing',
          type: 'Doctor Degree'
        }
      ]
    },
    {
      category: 'Doctor Of Philosophy',
      badge: 'Advanced Research Level',
      description: 'Terminal scholarly research degrees for academic and specialized theological development.',
      courses: [
        {
          code: 'Ph.D.',
          name: 'in Christian Theology',
          type: 'Doctor of Philosophy'
        },
        {
          code: 'Ph.D.',
          name: 'In Christian Counseling',
          type: 'Doctor of Philosophy'
        },
        {
          code: 'PhD.',
          name: 'In Christian Writing',
          type: 'Doctor of Philosophy'
        },
        {
          code: 'Ph.D.',
          name: 'in Biblical Studies',
          type: 'Doctor of Philosophy'
        }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#0d2040] text-white py-14 sm:py-16 border-b-4 border-[#c59b27] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c59b27_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <span className="text-xs uppercase font-bold text-[#c59b27] tracking-widest">
            Distance &amp; Online Education
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            Academic Programs
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-3xl leading-relaxed">
            Hope Theological University offers Biblical and Theological degree programs from Undergraduate to Doctoral level. Earn your degree from the comfort of your own home or place or in any one of HTU study centres.
          </p>
        </div>
      </section>

      {/* Highlights Banner */}
      <section className="py-8 bg-[#fbfaf6] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <Laptop className="w-6 h-6 text-[#c59b27] mx-auto mb-2" />
              <h4 className="font-serif font-bold text-sm text-[#0d2040]">Distance &amp; Online</h4>
              <p className="text-xs text-gray-600 mt-1">Study comfortably from anywhere.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <GraduationCap className="w-6 h-6 text-[#c59b27] mx-auto mb-2" />
              <h4 className="font-serif font-bold text-sm text-[#0d2040]">UG to Doctoral</h4>
              <p className="text-xs text-gray-600 mt-1">Bachelor, Master, Doctor &amp; Ph.D.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-[#c59b27] mx-auto mb-2" />
              <h4 className="font-serif font-bold text-sm text-[#0d2040]">International Standards</h4>
              <p className="text-xs text-gray-600 mt-1">ISO Certified Quality Education.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
              <Award className="w-6 h-6 text-[#c59b27] mx-auto mb-2" />
              <h4 className="font-serif font-bold text-sm text-[#0d2040]">Study Centres</h4>
              <p className="text-xs text-gray-600 mt-1">Learn at official HTU study centres.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Academic Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {programSections.map((sec, idx) => (
            <div key={idx} className="space-y-6">
              <div className="border-b-2 border-gray-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider block">
                    {sec.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0d2040] mt-0.5">
                    {sec.category}
                  </h2>
                </div>
                <p className="text-xs text-gray-600 max-w-md sm:text-right">
                  {sec.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sec.courses.map((course, cIdx) => (
                  <div 
                    key={cIdx} 
                    className="bg-[#fbfaf6] rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-[#0d2040] text-[#c59b27] font-serif font-bold text-sm rounded shadow-sm">
                          {course.code}
                        </span>
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {course.type}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-lg text-[#0d2040] mb-3 leading-snug">
                        {course.name}
                      </h3>
                      <div className="space-y-2 text-xs text-gray-600 pt-2 border-t border-gray-200">
                        <div className="flex items-center gap-1.5 text-gray-700">
                          <CheckCircle className="w-3.5 h-3.5 text-[#c59b27]" />
                          <span>Flexible Online / Distance Study</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-gray-700">
                          <CheckCircle className="w-3.5 h-3.5 text-[#c59b27]" />
                          <span>HTU Authorized Study Centres</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
                      <a
                        href="/contact"
                        className="text-xs font-bold text-[#c59b27] hover:text-[#0d2040] uppercase tracking-wider flex items-center gap-1.5 transition"
                      >
                        <span>Apply / Inquire Now</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Honorary Doctorate Section */}
      <section className="py-16 bg-[#0d2040] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-[#142d54] rounded-2xl p-8 sm:p-10 border border-[#c59b27]/40 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#0d2040] border border-[#c59b27] flex items-center justify-center text-[#c59b27]">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold text-[#c59b27] tracking-wider block">
                  Academic &amp; Social Distinction
                </span>
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
                  Honorary Doctorate
                </h3>
              </div>
            </div>

            <p className="text-sm sm:text-base text-gray-200 leading-relaxed font-sans">
              An Honorary Doctorate (Doctor Honours course) is an honorary academic degree centric to those who have made a major contribution to the advancement of scholarship, science or culture or who have otherwise contributed to the benefit of mankind.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="/honorable-doctorates"
                className="px-6 py-3 bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] font-bold text-xs uppercase tracking-wider rounded shadow transition flex items-center gap-2"
              >
                <span>View Conferred Honorees</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/contact"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded border border-white/30 transition"
              >
                Nominate / Inquire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Callout Banner */}
      <section className="py-12 bg-[#fbfaf6] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0d2040]">
            Ready to Begin Your Degree with Hope Theological University?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Our programs are intended to prepare students for a variety of occupations and voluntary roles within the Christian faith. Apply today to advance your career with Hope Theological University.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              className="inline-block px-8 py-3.5 bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] font-bold text-xs uppercase tracking-wider rounded shadow transition"
            >
              Contact Admissions &amp; Study Centres
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
