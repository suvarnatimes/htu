import React from 'react';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle, 
  Globe2, 
  BookOpen, 
  FileCheck,
  Building2,
  Users,
  FileText,
  AlertCircle,
  HelpCircle,
  Clock,
  ArrowRight
} from 'lucide-react';

export const metadata = {
  title: 'Accreditation & Academic Standards | Hope Theological University',
  description: 'Learn about the accreditation standards, evaluation process, candidate status, and maintenance of accreditation at Hope Theological University (HTU).',
};

export default function AccreditationPage() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-[#0d2040] text-white py-14 sm:py-16 border-b-4 border-[#c59b27] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#c59b27_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-3">
          <span className="text-xs uppercase font-bold text-[#c59b27] tracking-widest">
            Institutional Quality &amp; Standards
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white tracking-tight">
            ACCREDITATION
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-200 max-w-3xl leading-relaxed">
            Accreditation Evaluation and raising the level of theological education is the main task of the HOPE THEOLOGICAL UNIVERSITY (HTU) accreditation department.
          </p>
        </div>
      </section>

      {/* Academic Standards Section */}
      <section className="py-16 bg-[#fbfaf6]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="bg-white p-8 sm:p-10 rounded-xl shadow-md border-t-4 border-[#c59b27] space-y-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#0d2040] text-[#c59b27] flex items-center justify-center flex-shrink-0">
                <Award className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-[#c59b27] uppercase tracking-wider block">
                  Department of Accreditation
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#0d2040]">
                  Academic Standards
                </h2>
              </div>
            </div>

            <div className="bg-[#fbfaf6] p-4 rounded-lg border-l-4 border-[#0d2040]">
              <p className="text-sm sm:text-base text-[#0d2040] font-medium leading-relaxed">
                Accreditation Evaluation and raising the level of theological education is the main task of the <strong>HOPE THEOLOGICAL UNIVERSITY (HTU)</strong> accreditation department.
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
              <h3 className="text-lg sm:text-xl font-serif font-bold text-[#0d2040] uppercase tracking-wide border-b pb-2">
                ACADEMIC STANDARDS FOR ANY FORM OF TRAINING
              </h3>
              <p>
                The main activity of the Association in accrediting its members is carried out in accordance with the Standards governing all aspects of the theological institution and according to the procedure approved by the relevant document - <strong>&quot;The accreditation process&quot;</strong>.
              </p>
              <p>
                The standards have been developed over several years and their development took into account the criteria and experience of the Standards of the remaining 7 accreditation associations that exist on other continents. Thus, the HTU standards in terms of approach and level comply with generally recognized international standards.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation Process Section */}
      <section className="py-16 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#c59b27]">
              Step-by-Step Procedure
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#0d2040]">
              Accreditation Process
            </h2>
            <div className="w-16 h-1 bg-[#c59b27] mx-auto rounded" />
            <p className="text-sm text-gray-600">
              Accreditation Evaluation and raising the level of theological education is the main task of the HTU accreditation department.
            </p>
          </div>

          {/* HOW TO GET ACCREDITATION & INTRODUCTION */}
          <div className="bg-[#fbfaf6] p-8 rounded-xl border border-gray-200 space-y-4">
            <h3 className="text-xl font-serif font-bold text-[#0d2040]">
              HOW TO GET ACCREDITATION?
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              The accreditation process is divided into several stages, although in some educational institutions the term and structure of assessment can differ from each other.
            </p>

            <h4 className="text-base font-serif font-bold text-[#c59b27] pt-2 uppercase tracking-wider">
              INTRODUCTION
            </h4>
            <p className="text-sm text-gray-700 leading-relaxed">
              The process is divided into several stages, although in some educational institutions the term and structure of the assessment may differ from each other. In any case, a prerequisite for an educational institution to obtain accreditation status is membership in the HTU. The accreditation process begins with the receipt of an application from the educational institution, indicating the desire to obtain accreditation for a particular curriculum (or department). In this case, the Executive Director sends the School all the necessary information material (accreditation manual containing standards, procedures, questionnaires, etc.).
            </p>
          </div>

          {/* 1. PRELIMINARY COMMENTS */}
          <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-[#c59b27] shadow-sm transition space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#0d2040] text-[#c59b27] font-serif font-bold text-sm rounded">
                STAGE 01
              </span>
              <h3 className="text-xl font-serif font-bold text-[#0d2040]">
                PRELIMINARY COMMENTS
              </h3>
            </div>
            <ul className="space-y-3 text-sm text-gray-700 leading-relaxed">
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#c59b27] mt-1 flex-shrink-0" />
                <span>
                  Accreditation is a lengthy process in which an educational institution, its structure, program, structure and life are assessed by the school itself and the accreditation commissions consisting of qualified ministers with authority in the gospel education system and the necessary training.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#c59b27] mt-1 flex-shrink-0" />
                <span>
                  The process is divided into several stages, although in some educational institutions the term and structure of the assessment may differ from each other. In any case, a prerequisite for an educational institution to obtain accreditation status is membership in the Asia Pacific Accreditation Association.
                </span>
              </li>
            </ul>
          </div>

          {/* 2. CANDIDATE STATUS */}
          <div className="bg-white p-8 rounded-xl border-2 border-gray-200 hover:border-[#c59b27] shadow-sm transition space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 bg-[#0d2040] text-[#c59b27] font-serif font-bold text-sm rounded">
                STAGE 02
              </span>
              <h3 className="text-xl font-serif font-bold text-[#0d2040]">
                CANDIDATE STATUS
              </h3>
            </div>
            <div className="space-y-4 text-sm text-gray-700 leading-relaxed">
              <p>
                The accreditation process begins with the receipt of an application from the educational institution, indicating the desire to obtain accreditation for a particular curriculum (or department). In this case, the Executive Director sends the School all the necessary information material (accreditation manual containing standards, procedures, questionnaires, etc.).
              </p>
              <p>
                The return of a preliminary questionnaire filled out by the School with confirmation of its readiness to pay compensation for the transportation costs of the accreditation commission and the established hanorara are considered the official start of the accreditation process.
              </p>
              <p>
                The Executive Director, in agreement with the Association Council, forms an accreditation commission for this educational institution from the reserve of accreditation commissions approved by the general meeting, and transmits the school statement and a completed preliminary questionnaire to the Chairman of this commission. An accreditation commission consisting of 3-4 people, at least one of whom must be from the country representing the School, visits the educational institution at the agreed time and provides a confidential report addressed to the Chairman of the Council, which is presented at the next meeting of the Council. The commission usually includes an Executive Director or an experienced representative of the accreditation committee.
              </p>
              <p>
                The purpose of the first visit is to compile a general impression of the School and to determine whether there are fundamental obstacles to the accreditation of the School. That is, the commission concludes whether it is realistic to start the accreditation process for this school. All materials received are submitted to the next Council of the Association, which, with the positive conclusion of the accreditation commission, presents the School with the status of <strong>&quot;Candidate for accreditation&quot;</strong>.
              </p>
              <div className="bg-[#fbfaf6] p-4 rounded-lg border-l-4 border-[#c59b27]">
                <p className="text-xs sm:text-sm text-gray-700">
                  After assigning the School the status of Candidate, she can indicate this in all of her publications and handouts, and she also undertakes to pay the Association membership accreditation fees for each student of the program submitted for accreditation.
                </p>
              </div>
            </div>
          </div>

          {/* 3. MAINTENANCE OF THE ACCREDITATION STATUS */}
          <div className="bg-[#0d2040] text-white p-8 sm:p-10 rounded-xl border border-gray-700 shadow-xl space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-[#142d54] text-[#c59b27] flex items-center justify-center border border-[#c59b27]/40">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                Maintenance of Accreditation Status
              </h3>
            </div>

            <div className="space-y-4 text-xs sm:text-sm text-gray-200 leading-relaxed">
              <h4 className="text-sm font-serif font-bold text-[#c59b27] uppercase tracking-wider">
                MAINTENANCE OF THE ACCREDITATION STATUS
              </h4>
              <p>
                The school can appeal any decision of the Council by making an appeal at the next general meeting of members of the association. Appealing a decision of a general meeting in a judicial or other manner is not possible, since HTU is an organization with voluntary membership.
              </p>
              <p>
                Any educational institution can withdraw its application for accreditation at any time or withdraw from the HTU. The same way out of HTU occurs when the school changes the profession of faith, if the HTU charter is not respected, and if the membership dues are not paid in time.
              </p>
              <div className="bg-[#142d54] p-4 rounded-lg border border-red-500/30 text-gray-200">
                <p>
                  When an educational institution leaves the HTU for any reason, it automatically loses its accreditation, which is immediately notified to the general public. Also in this case, the school loses the right to indicate the accreditation status in its printed materials, while the contributions and other expenses of the School and its donations are not returned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Call to Action */}
      <section className="py-12 bg-[#fbfaf6] border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0d2040]">
            Apply for Institutional Accreditation with HTU
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
            Theological colleges and educational institutions seeking curriculum accreditation under international standards may contact the accreditation department.
          </p>
          <div className="pt-2">
            <a
              href="/contact"
              className="inline-block px-8 py-3.5 bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] font-bold text-xs uppercase tracking-wider rounded shadow transition"
            >
              Contact Accreditation Department
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
