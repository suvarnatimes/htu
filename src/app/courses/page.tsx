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
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'Academic Courses & Degrees | Hope Theological University',
  description: 'Explore Bachelor, Master, Doctor, and Ph.D. degrees in Theology, Biblical Studies, and Christian Counseling at Hope Theological University.',
};

export default function CoursesPage() {
  const degreeCategories = [
    {
      level: 'Bachelor Degrees Courses',
      badge: 'Undergraduate Level',
      description: 'Foundational degrees providing comprehensive biblical orientation, theological formulation, and practical ministry preparation.',
      courses: [
        {
          code: 'BTh.',
          name: 'Standard / Bachelor of Theology',
          duration: '3 Years (Flexible Distance / Online)',
          eligibility: '10+2 / Intermediate or Ministry Experience',
          focus: 'Biblical Hermeneutics, Old & New Testament Survey, Systematic Theology, Church History, Homiletics and Pastoral Care.'
        },
        {
          code: 'BVle.',
          name: 'Review of Writing / Bachelor of Christian Literature',
          duration: '3 Years (Online / Distance)',
          eligibility: '10+2 / Intermediate',
          focus: 'Christian Communications, Theological Writing, Manuscript Review, Editorial Ministries, and Christian Apologetics.'
        },
        {
          code: 'BD.',
          name: 'Explorer of Darting / Bachelor of Divinity',
          duration: '3–4 Years (Comprehensive)',
          eligibility: 'Any Graduation or Theological Foundation',
          focus: 'Biblical Languages (Greek/Hebrew basics), Christian Ethics, Ecclesiology, Cross-Cultural Missions, and Pastoral Leadership.'
        }
      ]
    },
    {
      level: 'Master Degrees Courses',
      badge: 'Postgraduate Level',
      description: 'Advanced postgraduate coursework for senior pastors, ministry directors, educators, and theological scholars.',
      courses: [
        {
          code: 'MTh.',
          name: 'Master of Theology',
          duration: '2 Years',
          eligibility: 'BTh / BD or Equivalent Bachelor Degree',
          focus: 'Advanced Exegesis, Contemporary Evangelical Theology, Pastoral Counseling, Church Administration, and Thesis Research.'
        },
        {
          code: 'MDK.',
          name: 'Master of Darting / Ministry Studies',
          duration: '2 Years',
          eligibility: 'Graduation in any discipline + Ministerial Calling',
          focus: 'Strategic Church Growth, Urban Ministry, Conflict Resolution in Churches, Leadership Mentorship, and Community Development.'
        },
        {
          code: 'MMR.',
          name: 'Master of Writing / Christian Research',
          duration: '2 Years',
          eligibility: 'Undergraduate Degree',
          focus: 'Theological Journalism, Publishing, Curriculum Development for Sunday Schools, and Historical Christian Literature.'
        }
      ]
    },
    {
      level: 'Doctor Degrees Courses & Ph.D.',
      badge: 'Doctoral & Research Level',
      description: 'Terminal academic and ministerial doctorates designed to produce scholarly treatises, specialized counseling models, and church renewal.',
      courses: [
        {
          code: 'Ph.D.',
          name: 'Doctor of Philosophy in Christian Theology',
          duration: '3–5 Years (Research & Thesis)',
          eligibility: 'Master Degree (MTh / MDiv / MA) with High Standing',
          focus: 'Doctoral Dissertation in Systematic, Historical, or Practical Theology under faculty advisory guidance.'
        },
        {
          code: 'Ph.D.',
          name: 'Doctor of Philosophy in Christian Counseling',
          duration: '3–5 Years (Research)',
          eligibility: 'Master Degree in Ministry, Counseling, or Psychology',
          focus: 'Biblical Counseling, Trauma Healing, Family Pastoral Care, Mental Health Integration with Faith, and Clinical Research.'
        },
        {
          code: 'PhD.',
          name: 'Doctor of Philosophy in Christian Writing',
          duration: '3–5 Years',
          eligibility: 'Master Degree with Literary or Academic Background',
          focus: 'Theological Exegesis Publications, Apologetic Literature, Hermeneutical Critique, and Scholarly Treatises.'
        },
        {
          code: 'Ph.D.',
          name: 'Doctor of Philosophy in Biblical Studies',
          duration: '3–5 Years',
          eligibility: 'Master Degree in Biblical / Theological Studies',
          focus: 'Original Language Exegesis, Historical-Grammatical Analysis, Canonical Theology, and Dissertation Defense.'
        },
        {
          code: 'Do.',
          name: 'Doctor of Darting / Doctor of Ministry',
          duration: '3 Years (Professional Track)',
          eligibility: 'MTh / MDiv with Minimum 5 Years Field Ministry',
          focus: 'Senior Pastoral Praxis, Church Planting Strategies, Denominational Leadership, and Applied Field Project.'
        },
        {
          code: 'DVle.',
          name: 'Doctor of Writing / Christian Letters',
          duration: '3 Years',
          eligibility: 'Master Degree in Humanities or Theology',
          focus: 'Advanced Christian Hermeneutics, Editorial Direction, Academic Journals, and Literary Defense of the Christian Faith.'
        }
      ]
    }
  ];

  const specializedPrograms = [
    { title: 'Counseling in Peace', desc: 'Conflict mediation, community reconciliation, and pastoral peacemaking.' },
    { title: 'Sports & Health Education', desc: 'Holistic wellness, youth athletic ministry, and community health initiatives.' },
    { title: 'Critical Management', desc: 'Ecclesiastical governance, non-profit financial stewardship, and crisis management.' },
    { title: 'Tailor-Model Diplomas', desc: 'Customized modular certifications tailored to working pastors and elders.' },
  ];

  return (
    <div className="bg-white">
      {/* Header Banner */}
      <section className="bg-[#0d2040] text-white py-14 border-b-4 border-[#c59b27] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <span className="text-xs uppercase font-bold text-[#c59b27] tracking-widest">
            Flexible Distance & Online Education
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2">
            Academic Programs & Degree Courses
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl">
            Empowering students to earn accredited diplomas, bachelor, master, and doctoral degrees from anywhere in the world.
          </p>
        </div>
      </section>

      {/* Distance Learning Highlights */}
      <section className="py-10 bg-[#fbfaf6] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <Laptop className="w-6 h-6 text-[#c59b27] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-sm text-[#0d2040]">Distance & Online</h4>
                <p className="text-xs text-gray-600 mt-0.5">Study from home, office, or local study center.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <Clock className="w-6 h-6 text-[#c59b27] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-sm text-[#0d2040]">Flexible Pace</h4>
                <p className="text-xs text-gray-600 mt-0.5">Self-paced modules designed for working pastors.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <Award className="w-6 h-6 text-[#c59b27] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-sm text-[#0d2040]">Work & Life Credit</h4>
                <p className="text-xs text-gray-600 mt-0.5">Prior ministry experience evaluated for credit.</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <GraduationCap className="w-6 h-6 text-[#c59b27] flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-serif font-bold text-sm text-[#0d2040]">Degrees Conferred</h4>
                <p className="text-xs text-gray-600 mt-0.5">Undergraduate through Ph.D. level credentials.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Degree Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-16">
          {degreeCategories.map((cat, idx) => (
            <div key={idx} className="space-y-6">
              <div className="border-b-2 border-gray-200 pb-3 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider block">
                    {cat.badge}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0d2040] mt-0.5">
                    {cat.level}
                  </h2>
                </div>
                <p className="text-xs text-gray-600 max-w-md sm:text-right">
                  {cat.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.courses.map((course, cIdx) => (
                  <div 
                    key={cIdx} 
                    className="bg-[#fbfaf6] rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-2.5 py-1 bg-[#0d2040] text-[#c59b27] font-bold text-xs rounded">
                          {course.code}
                        </span>
                        <span className="text-[11px] font-medium text-gray-500">
                          {course.duration}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-base text-[#0d2040] mb-2 leading-snug">
                        {course.name}
                      </h3>
                      <div className="text-xs text-gray-600 mb-3">
                        <strong className="text-gray-700">Eligibility:</strong> {course.eligibility}
                      </div>
                      <p className="text-xs text-gray-700 leading-relaxed border-t border-gray-200 pt-3">
                        <strong className="text-[#0d2040] block mb-1">Core Focus:</strong>
                        {course.focus}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-gray-200 flex items-center justify-between">
                      <a
                        href="/contact"
                        className="text-xs font-bold text-[#c59b27] hover:text-[#0d2040] uppercase tracking-wider flex items-center gap-1 transition"
                      >
                        <span>Apply / Inquire</span>
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

      {/* Tailor-Made Diplomas & Specialized Fields */}
      <section className="py-14 bg-[#0d2040] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs uppercase font-bold text-[#c59b27] tracking-widest">
              Vocational & Applied Programs
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">
              Specialized Diplomas & Certifications
            </h2>
            <p className="text-xs sm:text-sm text-gray-300 mt-2">
              Tailor-model diploma and certificate programs empowering believers in church administration, social service, and specialized ministry.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializedPrograms.map((p, idx) => (
              <div key={idx} className="bg-[#142d54] p-5 rounded-lg border border-gray-700">
                <CheckCircle className="w-5 h-5 text-[#c59b27] mb-3" />
                <h3 className="font-serif font-bold text-base text-white mb-1.5">{p.title}</h3>
                <p className="text-xs text-gray-300 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Honorary Doctorates Callout */}
      <section className="py-14 bg-[#fbfaf6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 bg-white p-8 rounded-xl border border-gray-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <span className="text-xs uppercase font-bold text-[#c59b27] tracking-wider">
              Doctor Honours Causa
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0d2040]">
              Looking for Honorary Doctorates?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl">
              An Honorary Doctorate (Doctor Honours Causa) is centric to those who have made significant contributions to the advancement of Christian faith, social service, culture, or benefit of mankind.
            </p>
          </div>
          <a
            href="/honorable-doctorates"
            className="px-6 py-3 bg-[#0d2040] hover:bg-[#1a365d] text-[#c59b27] hover:text-white font-bold text-xs uppercase tracking-wider rounded transition flex-shrink-0 shadow"
          >
            Explore Honorary Doctorates
          </a>
        </div>
      </section>
    </div>
  );
}
