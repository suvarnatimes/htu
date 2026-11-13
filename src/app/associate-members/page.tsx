import React from 'react';
import { 
  Users, 
  Building, 
  MapPin, 
  Globe, 
  BookOpen, 
  Handshake, 
  CheckCircle2, 
  ShieldCheck, 
  Award,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'Associate Members | Hope Theological University',
  description: 'Types of membership in Hope Theological University: Associate Member and Accredited Member serving Asian communities.',
};

export default function AssociateMembersPage() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-[#0d2040] text-white py-14 sm:py-16 border-b-4 border-[#c59b27] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c59b27_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <span className="text-xs uppercase font-bold text-[#c59b27] tracking-widest">
            Institutional Membership
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            ASSOCIATE MEMBERS
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl leading-relaxed">
            There are two types of membership in HOPE THEOLOGICAL UNIVERSITY: Associate Member and Accredited Member.
          </p>
        </div>
      </section>

      {/* Overview & Key Stats */}
      <section className="py-16 bg-[#fbfaf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0d2040]">
              Membership in HOPE THEOLOGICAL UNIVERSITY
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto rounded" />
            <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
              There are two types of membership in HOPE THEOLOGICAL UNIVERSITY: <strong>Associate Member</strong> and <strong>Accredited Member</strong>.
            </p>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Associate members are encouraged to later become accredited members. Over 90% of HOPE THEOLOGICAL UNIVERSITY members are accredited members. Both associate and accredited members pay an annual membership fee.
            </p>
          </div>

          {/* 2 Membership Types Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Card 1: Associate Member */}
            <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-[#c59b27] shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0d2040] text-[#c59b27] flex items-center justify-center mb-5">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#c59b27] block mb-1">
                  Membership Category 01
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#0d2040] mb-4">
                  Associate Member
                </h3>
                <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                  <p>
                    An <strong>Associate Member</strong> is a theological educational institution serving Asians, which abides by the World Evangelical Fellowship Statement of Faith.
                  </p>
                  <div className="bg-[#fbfaf6] p-4 rounded-lg border-l-4 border-[#c59b27]">
                    <span className="text-xs font-semibold text-[#0d2040] block uppercase mb-1">Profile Summary:</span>
                    <p className="text-xs text-gray-600">
                      Theological schools that affirm our Statement of Faith and serve Asian communities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#c59b27]">
                <CheckCircle2 className="w-4 h-4" />
                <span>Annual Membership Fee Applicable</span>
              </div>
            </div>

            {/* Card 2: Accredited Member */}
            <div className="bg-white p-8 rounded-xl border-2 border-[#0d2040] shadow-sm hover:shadow-md transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-lg bg-[#0d2040] text-[#c59b27] flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#c59b27] block mb-1">
                  Membership Category 02
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#0d2040] mb-4">
                  Accredited Member
                </h3>
                <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
                  <p>
                    An <strong>Accredited Member</strong> is a theological educational institution that has programs accredited by HOPE THEOLOGICAL UNIVERSITY.
                  </p>
                  <div className="bg-[#fbfaf6] p-4 rounded-lg border-l-4 border-[#0d2040]">
                    <span className="text-xs font-semibold text-[#0d2040] block uppercase mb-1">Profile Summary:</span>
                    <p className="text-xs text-gray-600">
                      Institutions with officially accredited programs by HOPE THEOLOGICAL UNIVERSITY.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-[#0d2040]">
                <Award className="w-4 h-4 text-[#c59b27]" />
                <span>Over 90% of HTU members are accredited members</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Encouragement & Transition Banner */}
      <section className="py-14 bg-[#0d2040] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
          <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white">
            Path to Full Institutional Accreditation
          </h3>
          <p className="text-sm text-gray-200 leading-relaxed max-w-2xl mx-auto">
            Associate members are encouraged to later become accredited members. Both associate and accredited members pay an annual membership fee and collaborate in promoting rigorous theological education across Asia.
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href="/accreditation"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] font-bold text-xs uppercase tracking-wider rounded shadow transition"
            >
              <span>Explore Accreditation Process</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-block px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider rounded border border-white/30 transition"
            >
              Contact Membership Office
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
