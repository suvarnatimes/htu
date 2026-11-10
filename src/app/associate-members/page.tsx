import React from 'react';
import { 
  Users, 
  Building, 
  MapPin, 
  Globe, 
  BookOpen, 
  Handshake, 
  CheckCircle2,
  Phone,
  Mail
} from 'lucide-react';

export const metadata = {
  title: 'Associate Members & Study Centres | Hope Theological University',
  description: 'Affiliated institutions, episcopal synods, and regional study centres of Hope Theological University across India.',
};

export default function AssociateMembersPage() {
  const centers = [
    {
      region: 'National Office - North India',
      location: 'Badarpur, New Delhi (110044)',
      address: 'Building number: 2/3, Near Canara Bank, Badarpur, New Delhi (110044)',
      scope: 'National administration, distance education coordination, northern regional synod conferences.',
      role: 'National Headquarters'
    },
    {
      region: 'South India Regional Office',
      location: 'Machilipatnam, Krishna District, Andhra Pradesh',
      address: 'Machilipatnam, Krishna Dist, Andhra Pradesh - 521002',
      scope: 'South Indian pastoral training, regional study center liaison, convocation ceremonies.',
      role: 'South India Directorate'
    },
    {
      region: 'Episcopal Synod Bishop\'s Council',
      location: 'Interdenominational Cathedral Synod',
      address: 'Cathedral Episcopal Synod Bishop\'s Council Alliances',
      scope: 'Ecclesiastical oversight, ministerial licensing recommendation, theological research projects.',
      role: 'Synodical Affiliation'
    }
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-[#0d2040] text-white py-14 border-b-4 border-[#c59b27] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <span className="text-xs uppercase font-bold text-[#c59b27] tracking-widest">
            Institutional Fellowship & Study Network
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2">
            Associate Members & Network
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl">
            Partnering with Christian colleges, episcopal synods, pastoral councils, and authorized study centres across India.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-[#fbfaf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-[#c59b27]">
                Ecclesial Fellowship
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0d2040]">
                Fostering United Theological Fellowship
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                As an Associate Member affiliated with the <strong>Cathedral Episcopal Synod Bishop's Council</strong>, Hope Theological University works in close fellowship with local church elders, pastors, and institutional leaders.
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our associate membership structure brings together theological educators, bible institutes, and church leaders to conduct joint research projects, host general institutional assemblies, and represent common theological interests.
              </p>
              <div className="space-y-2 pt-2">
                {[
                  'Mutual academic assistance and curriculum enrichment',
                  'Cross-accreditation and transfer evaluation for pastoral students',
                  'Joint pastoral leadership seminars and regional conferences',
                  'Study centre support for distance education students in regional languages',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#0d2040] text-white p-7 rounded-xl shadow-lg border-2 border-[#c59b27]/30">
                <Handshake className="w-10 h-10 text-[#c59b27] mb-4" />
                <h3 className="font-serif font-bold text-lg text-white mb-2">
                  Join as an Associate Study Centre
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-5">
                  Churches, bible colleges, and ministries with a heart for pastoral training are invited to partner with HTU to establish authorized regional study centres.
                </p>
                <a
                  href="/contact"
                  className="inline-block px-5 py-2.5 bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] font-bold text-xs uppercase tracking-wider rounded transition"
                >
                  Contact Synod Office
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Headquarters & Centers */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0d2040]">
              Offices & Regional Presence
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mt-3 mb-4 rounded" />
            <p className="text-xs sm:text-sm text-gray-600">
              Serving students, pastors, and institutional partners across India and worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {centers.map((c, idx) => (
              <div 
                key={idx} 
                className="bg-[#fbfaf6] p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[11px] font-bold text-[#c59b27] uppercase tracking-wider block mb-1">
                    {c.role}
                  </span>
                  <h3 className="font-serif font-bold text-base text-[#0d2040] mb-2">
                    {c.region}
                  </h3>
                  <div className="flex items-start gap-2 text-xs text-gray-600 mb-3">
                    <MapPin className="w-4 h-4 text-[#c59b27] mt-0.5 flex-shrink-0" />
                    <span>{c.address}</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed border-t border-gray-200 pt-3">
                    {c.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
