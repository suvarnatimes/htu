import React from 'react';
import { 
  Award, 
  CheckCircle2, 
  Mail, 
  FileText, 
  UserCheck, 
  Send, 
  HelpCircle, 
  ShieldCheck,
  Star,
  BookOpen
} from 'lucide-react';

export const metadata = {
  title: 'Honorable Doctorates (Honoris Causa) | Hope Theological University',
  description: 'Conferral of Honorary Doctorates and social awards by Hope Theological University for leadership, social service, Christian ministry, and humanity.',
};

export default function HonorableDoctoratesPage() {
  const awardees = [
    {
      name: 'Dr. BOLLAVARAPU JOHN WESLY',
      title: 'Chairman, Rashtra Christian Minority Corporation',
      degree: 'National Award of The Best Leadership (Honoris Causa)',
      citation: 'Conferred with the National Award of The Best Leadership (Honoris Causa) for the significant contribution to the Christian community and Humanity.',
      image: 'https://htuindia.in/wp-content/uploads/2025/05/D1.jpg',
      field: 'Christian Leadership & Minority Welfare'
    },
    {
      name: 'Dr. VALLEPU VARAPRASAD',
      title: 'Pulivendula Municipal Chairman, Andhra Pradesh - India',
      degree: 'Doctor of Best Social Service (Honoris Causa)',
      citation: 'Conferred with the Degree of Doctor of Best Social Service (Honoris Causa) for the exemplary contribution to the Nation and Humanity.',
      image: 'https://htuindia.in/wp-content/uploads/2025/05/D2.jpg',
      field: 'Civic Governance & Social Welfare'
    },
    {
      name: 'Dr. VEMPATI RAGHURAM',
      title: 'High Court Advocate of Andhra Pradesh',
      degree: 'Doctor of Philosophy (Thesis Causa)',
      citation: 'Conferred with the Degree of Doctor of Philosophy (Thesis Causa) for scholarly historical research into the History of Roman Catholic Church.',
      image: 'https://htuindia.in/wp-content/uploads/2025/05/D3.jpg',
      field: 'Legal Excellence & Ecclesiastical History'
    }
  ];

  const honoraryDegrees = [
    'Doctor of Christian Ministry',
    'Doctor of Theology',
    'Doctor of Missions',
    'Doctor of Divinity',
    'Doctor of Music',
    'Doctor of Worship Ministry',
    'Doctor of Apostolic Ministry',
    'Doctor of Christian Counseling',
    'Doctor of Christian Leadership',
    'Doctor of Fine Arts',
    'Doctor of Social Service',
    'Doctor of Social Work',
    'Doctor of Human and Social Service',
    'Doctor of Humane Letters',
    'Doctor of Biblical Studies',
    'Doctor of Systematic Theology',
    'Doctor of Youth Ministry',
    'Doctor of Honors',
    'Doctor of Literature',
    'Doctor of Humanities',
    'Doctor of Human Rights',
    'Doctor of Career Counseling',
    'Doctor of Pastoral Counseling',
    'Doctor of Psychology',
    'Doctor of Business Administration',
    'Ph.D in Global Leadership',
    'Ph.D in International Leadership',
    'Ph.D in Religious Studies',
    'Ph.D in Biblical Studies',
    'Ph.D in Social Service',
    'Ph.D in Counseling Psychology',
    'Ph.D in Human & Social Service',
  ];

  const legalSteps = [
    {
      step: '01',
      title: 'Write for Application Form',
      desc: 'Send an email request to hopetheologicaluniversity@gmail.com for the official Honorary Doctorate nomination dossier.'
    },
    {
      step: '02',
      title: 'Prepare Resume / Autobiography',
      desc: 'Compile a detailed biography highlighting your ministerial service, civic contributions, leadership achievements, and humanitarian impact.'
    },
    {
      step: '03',
      title: 'Two Reputable References',
      desc: 'Obtain letters of recommendation from two recognized leaders (bishops, senior pastors, public officials, or community elders).'
    },
    {
      step: '04',
      title: 'Select Program Specialty',
      desc: 'Decide which program most accurately reflects your life accomplishments from our accredited list of honorary doctorate titles.'
    },
    {
      step: '05',
      title: 'Provide Verification Credentials',
      desc: 'Provide verified applicant identification, background documentation, and verifiable credentials of community service.'
    },
    {
      step: '06',
      title: 'Submit Dossier Online',
      desc: 'Fill up the complete nomination form and submit all documents directly via email to hopetheologicaluniversity@gmail.com for Academic Council review.'
    }
  ];

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-[#0d2040] text-white py-14 border-b-4 border-[#c59b27] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <span className="text-xs uppercase font-bold text-[#c59b27] tracking-widest">
            Recognizing Exemplary Service & Leadership
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2">
            Honorable Doctorates (Honoris Causa)
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl">
            Celebrating servant-leaders, pastors, and humanitarians whose life work has profoundly impacted the Church, the Nation, and humanity.
          </p>
        </div>
      </section>

      {/* Featured Awardees Section */}
      <section className="py-16 bg-[#fbfaf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c59b27]">
              Conferred Dignitaries
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0d2040] mt-1">
              Distinguished Honorary Doctorates
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mt-3 mb-4 rounded" />
            <p className="text-xs sm:text-sm text-gray-600">
              Hope Theological University is honored to have conferred honorary doctorates upon notable leaders in minority affairs, public administration, and jurisprudence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {awardees.map((aw, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-200 flex flex-col"
              >
                <div className="relative h-64 bg-gray-100 overflow-hidden">
                  <img 
                    src={aw.image} 
                    alt={aw.name} 
                    className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 bg-[#0d2040]/90 backdrop-blur text-[#c59b27] text-[11px] font-bold rounded">
                    Honoris Causa
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-[#c59b27] uppercase tracking-wider block mb-1">
                      {aw.field}
                    </span>
                    <h3 className="font-serif font-bold text-lg text-[#0d2040] leading-tight mb-1">
                      {aw.name}
                    </h3>
                    <p className="text-xs font-semibold text-gray-700 mb-3">
                      {aw.title}
                    </p>
                    <div className="text-xs text-amber-900 bg-amber-50 p-2.5 rounded border border-amber-200 mb-4 font-medium">
                      <strong>Conferred:</strong> {aw.degree}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed italic">
                      "{aw.citation}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nature of Honorary Degree */}
      <section className="py-14 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#c59b27]">
                Academic Distinction
              </span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0d2040]">
                Honorary Degrees at Hope Theological University
              </h2>
              <div className="prose text-gray-700 text-sm sm:text-base leading-relaxed space-y-3">
                <p>
                  <strong>An Honorary Doctorate (Doctor Honours course)</strong> is an honorary academic degree centric to those who have made a major contribution to the advancement of scholarship, science or culture or who have otherwise contributed to the benefit of mankind.
                </p>
                <p>
                  Degrees awarded by Hope Theological University are based on work and life experience certificates, with International Standards, with an intention to equip and empower people irrespective of age, caste, creed and religion.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
                <img 
                  src="https://htuindia.in/wp-content/uploads/slider/cache/647df817df2a64ad83446ae1a23d7fcd/KNS6385-1-scaled-1.jpg" 
                  alt="Doctorate Conferral Ceremony" 
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Available Honorary Titles */}
      <section className="py-16 bg-[#0d2040] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold text-[#c59b27] tracking-widest">
              Available Specializations
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mt-1">
              HTU Awards The Following Honorary Degrees
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mt-3 mb-4 rounded" />
            <p className="text-xs sm:text-sm text-gray-300">
              Conferred across pastoral, theological, humanitarian, counseling, and social leadership disciplines.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
            {honoraryDegrees.map((deg, idx) => (
              <div 
                key={idx} 
                className="bg-[#142d54] p-3.5 rounded border border-gray-700 hover:border-[#c59b27] transition flex items-center gap-2.5"
              >
                <Award className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                <span className="text-xs font-medium text-gray-100">{deg}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How To Get An Honorary Doctorate Legally? */}
      <section className="py-16 bg-[#fbfaf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c59b27]">
              Procedural Guidelines
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0d2040] mt-1">
              How To Get An Honorary Doctorate Legally?
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto mt-3 mb-4 rounded" />
            <p className="text-xs sm:text-sm text-gray-600">
              The HTU Senate and Academic Honors Committee adhere to a transparent, structured evaluation procedure for conferring honorary titles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {legalSteps.map((st) => (
              <div 
                key={st.step} 
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm relative pl-14"
              >
                <div className="absolute left-4 top-6 w-8 h-8 rounded-full bg-[#0d2040] text-[#c59b27] font-bold text-xs flex items-center justify-center font-serif">
                  {st.step}
                </div>
                <h3 className="font-serif font-bold text-base text-[#0d2040] mb-2">
                  {st.title}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Submission Action Box */}
          <div className="mt-12 bg-gradient-to-r from-[#0d2040] to-[#1a365d] rounded-xl p-8 text-white text-center max-w-3xl mx-auto shadow-lg">
            <Mail className="w-8 h-8 text-[#c59b27] mx-auto mb-3" />
            <h3 className="text-xl font-serif font-bold">Submit Your Nomination or Inquire</h3>
            <p className="text-xs sm:text-sm text-gray-300 mt-2 max-w-xl mx-auto">
              Please send your resume, references, and application inquiry directly to our official email:
            </p>
            <div className="mt-4">
              <a 
                href="mailto:hopetheologicaluniversity@gmail.com" 
                className="inline-block px-6 py-3 bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] font-bold text-xs sm:text-sm uppercase tracking-wider rounded shadow transition"
              >
                hopetheologicaluniversity@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
