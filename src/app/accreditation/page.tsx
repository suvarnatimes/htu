import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle, 
  Globe2, 
  BookOpen, 
  FileCheck,
  Building2,
  Users
} from 'lucide-react';

export const metadata = {
  title: 'Accreditation & Affiliations | Hope Theological University',
  description: 'Hope Theological University is an Associate Member and Affiliated with the Cathedral Episcopal Synod Bishop\'s Council, adhering to international standards.',
};

export default function AccreditationPage() {
  const recognitionPoints = [
    {
      title: 'Cathedral Episcopal Synod Bishop\'s Council Affiliation',
      desc: 'Hope Theological University is an Associate Member, fully Affiliated with the Interdenominational Cathedral Episcopal Synod Bishop\'s Council.'
    },
    {
      title: 'International Theological Standards',
      desc: 'Our academic curricula, degree syllabi, and faculty mentorship adhere strictly to international benchmarks of theological and ministerial training.'
    },
    {
      title: 'Recognition of Work & Life Experience',
      desc: 'Degrees awarded by Hope Theological University take into account verified ministerial field tenure and lifelong leadership service.'
    },
    {
      title: 'Equal Opportunity for All',
      desc: 'Equipping and empowering individuals with solid Christian education irrespective of age, caste, creed, or demographic background.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-[#0d2040] text-white py-14 border-b-4 border-[#c59b27] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <span className="text-xs uppercase font-bold text-[#c59b27] tracking-widest">
            Ecclesial Affiliation & Standards
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2">
            Accreditation & Recognition
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl">
            Committed to international standards of Christian higher education under the oversight of episcopal synod councils.
          </p>
        </div>
      </section>

      {/* Main Statement */}
      <section className="py-16 bg-[#fbfaf6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-md border-t-4 border-[#c59b27]">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[#0d2040] text-[#c59b27] flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#0d2040]">
                  Official Accreditation Statement
                </h2>
                <p className="text-xs text-[#c59b27] font-semibold uppercase tracking-wider">
                  Cathedral Episcopal Synod Bishop's Council
                </p>
              </div>
            </div>

            <div className="prose text-gray-700 text-sm sm:text-base leading-relaxed space-y-4">
              <p className="font-medium text-gray-800 text-base sm:text-lg">
                "Hope Theological University is an Associate Member, Affiliated and Interdenominational Cathedral Episcopal Synod Bishop's Council."
              </p>
              <p>
                Our mission is to help theological educational institutions achieve international academic benchmarks, confirming their academic and spiritual excellence recognized in the global Church through interdenominational accreditation.
              </p>
              <p>
                Degrees and certificates awarded by Hope Theological University are based on work and life experience as well as rigorous distance learning modules, equipping candidates seeking career advancement, higher pastoral pay in private educational sectors, and effective Christian ministry worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Recognition Pillars */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0d2040]">
              Pillars of Academic & Ecclesial Standing
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mt-3 mb-4 rounded" />
            <p className="text-xs sm:text-sm text-gray-600">
              Upholding doctrinal integrity, transparent certification, and global fellowship among theological colleges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recognitionPoints.map((pt, idx) => (
              <div 
                key={idx} 
                className="bg-[#fbfaf6] p-6 rounded-lg border border-gray-200 flex items-start gap-4 hover:shadow-sm transition"
              >
                <div className="w-10 h-10 rounded-full bg-[#0d2040] text-[#c59b27] flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-[#0d2040] mb-1.5">
                    {pt.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {pt.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Assurance */}
      <section className="py-14 bg-[#0d2040] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <Award className="w-10 h-10 text-[#c59b27] mx-auto" />
          <h3 className="text-2xl font-serif font-bold text-white">
            Online Credential Verification System
          </h3>
          <p className="text-xs sm:text-sm text-gray-300 max-w-xl mx-auto">
            All awarded degrees, diplomas, and honorary doctorates are permanently archived in our university registry and can be verified online by employers, synod councils, and academic bodies.
          </p>
          <div className="pt-2">
            <a 
              href="/certificate-verification" 
              className="inline-block px-6 py-3 bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] font-bold text-xs uppercase tracking-wider rounded shadow transition"
            >
              Access Certificate Verification Portal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
