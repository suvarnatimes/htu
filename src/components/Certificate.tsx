'use client';

import React from 'react';
import { Printer, Download, Share2, CheckCircle2, ShieldCheck, ArrowLeft } from 'lucide-react';

export interface StudentRecord {
  id: string;
  certNo: string;
  name: string;
  surname: string;
  fullName: string;
  address: string;
  degree: string;
  category: string;
  date: string;
  place: string;
  imageUrl?: string;
  status?: string;
  chancellor?: string;
  synod?: string;
}

interface CertificateProps {
  student: StudentRecord;
  onBack?: () => void;
  verificationUrl?: string;
}

export default function Certificate({ student, onBack, verificationUrl }: CertificateProps) {
  const qrUrl = verificationUrl || `https://htuindia.in/certificate/${encodeURIComponent(student.certNo)}`;
  // QR code API for dynamic crisp QR generation
  const qrCodeImg = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(qrUrl)}&color=0d2040&bgcolor=ffffff`;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Action Bar (Hidden during printing) */}
      <div className="no-print w-full max-w-5xl mb-6 flex flex-wrap items-center justify-between gap-4 p-4 bg-white rounded-xl shadow-sm border border-gray-200">
        <div className="flex items-center gap-3">
          {onBack && (
            <button
              onClick={onBack}
              className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition"
              title="Go Back"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          )}
          <div>
            <h3 className="font-serif font-bold text-base text-[#0d2040]">
              Official Degree Certificate
            </h3>
            <p className="text-xs text-gray-500">
              Registration: <strong className="text-[#c59b27]">{student.certNo}</strong> • Verified Authentic
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#0d2040] hover:bg-[#1a365d] text-[#c59b27] hover:text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition"
          >
            <Printer className="w-4 h-4" />
            <span>Print Certificate</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-4 py-2 bg-[#c59b27] hover:bg-[#d6aa32] text-[#0d2040] font-bold text-xs uppercase tracking-wider rounded-lg shadow transition"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>
      </div>

      {/* PRINT-OPTIMIZED ORNATE CERTIFICATE */}
      <div 
        id="printable-certificate"
        className="certificate-container w-full max-w-5xl bg-[#fefcf8] text-[#1a202c] p-8 sm:p-12 rounded-lg shadow-2xl relative border-8 border-[#0d2040] select-none"
        style={{
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        }}
      >
        {/* Ornate Inner Double Border */}
        <div className="border-4 border-[#c59b27] p-6 sm:p-8 relative bg-white/60">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-2 left-2 w-12 h-12 border-t-4 border-l-4 border-[#c59b27]"></div>
          <div className="absolute top-2 right-2 w-12 h-12 border-t-4 border-r-4 border-[#c59b27]"></div>
          <div className="absolute bottom-2 left-2 w-12 h-12 border-b-4 border-l-4 border-[#c59b27]"></div>
          <div className="absolute bottom-2 right-2 w-12 h-12 border-b-4 border-r-4 border-[#c59b27]"></div>

          {/* Certificate Watermark Seal in Background */}
          <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
            <img src="/images/logo.jpg" alt="Watermark" className="w-96 h-96 object-contain" />
          </div>

          {/* Top Ecclesial Authority Banner */}
          <div className="text-center space-y-1 relative z-10 pb-4 border-b border-[#c59b27]/30">
            <span className="text-[11px] sm:text-xs font-serif uppercase tracking-widest text-[#0d2040] font-semibold block">
              Cathedral Episcopal Synod Bishop's Council
            </span>
            <div className="flex items-center justify-center gap-3 my-1">
              <div className="w-16 h-16 rounded-full border-2 border-[#c59b27] p-0.5 bg-white shadow-sm overflow-hidden flex-shrink-0">
                <img src="/images/logo.jpg" alt="University Seal" className="w-full h-full object-contain" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-4xl font-serif font-extrabold text-[#0d2040] tracking-tight">
                  Hope Theological University
                </h1>
                <p className="text-[10px] sm:text-xs text-[#c59b27] font-bold tracking-widest uppercase mt-0.5">
                  Est. 2019 • Registered Under Indian Christian Ecclesiastical Synod
                </p>
              </div>
            </div>
          </div>

          {/* Certificate Title */}
          <div className="text-center my-6 relative z-10">
            <h2 className="text-xl sm:text-3xl font-serif font-bold text-[#c59b27] uppercase tracking-widest drop-shadow-sm">
              Certificate of Conferral
            </h2>
            <span className="text-xs font-serif italic text-gray-600 block mt-1">
              Doctorate of Honoris Causa / Academic Award
            </span>
          </div>

          {/* Recipient Details & Portrait Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center my-6 relative z-10">
            {/* Student Portrait (If available from Sheet) */}
            <div className="md:col-span-3 flex flex-col items-center justify-center">
              <div className="w-32 h-40 sm:w-36 sm:h-44 rounded-md border-4 border-[#c59b27] shadow-md overflow-hidden bg-gray-100 flex items-center justify-center p-0.5">
                {student.imageUrl ? (
                  <img 
                    src={student.imageUrl} 
                    alt={student.fullName}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                ) : (
                  <div className="text-center p-2 text-gray-400 text-xs">
                    <span>Official Photo Archived</span>
                  </div>
                )}
              </div>
              <span className="text-[10px] text-gray-500 font-mono mt-2 uppercase font-semibold">
                Reg: {student.certNo}
              </span>
            </div>

            {/* Main Conferral Citation */}
            <div className="md:col-span-9 text-center md:text-left space-y-3">
              <p className="text-xs sm:text-sm text-gray-600 font-serif italic">
                By authority of the Senate and Academic Council of Hope Theological University, and upon recommendation of the Episcopal Bishop's Synod, this award is hereby conferred upon:
              </p>

              <div className="py-1">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#0d2040] tracking-wide border-b-2 border-[#c59b27] pb-1 inline-block">
                  {student.fullName}
                </h3>
                {student.address && (
                  <p className="text-xs font-medium text-gray-600 mt-1">
                    Resident of: <strong>{student.address}</strong>
                  </p>
                )}
              </div>

              <div className="bg-amber-50/80 p-3.5 rounded border border-amber-200/80">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#0d2040] block">
                  Degree / Honor Conferred:
                </span>
                <h4 className="text-lg sm:text-2xl font-serif font-extrabold text-[#c59b27] mt-0.5 leading-snug">
                  {student.degree}
                </h4>
                <span className="text-[11px] text-gray-600 block mt-0.5">
                  Category: <strong>{student.category}</strong>
                </span>
              </div>

              <p className="text-xs text-gray-700 leading-relaxed font-serif">
                In recognition of distinguished and dedicated public leadership, social welfare service, and exemplary contribution to the Church, the Community, and Humanity at large.
              </p>
            </div>
          </div>

          {/* Date, Place, QR Code & Signatures Bar */}
          <div className="pt-6 border-t-2 border-[#c59b27]/40 mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 items-end relative z-10">
            {/* Chancellor Signature */}
            <div className="text-center sm:text-left space-y-1">
              <div className="h-10 border-b border-gray-400 flex items-end justify-center sm:justify-start pb-1">
                <span className="font-serif italic text-sm text-[#0d2040] font-bold">Dr. Davidpaul Arjilli</span>
              </div>
              <span className="text-xs font-bold text-[#0d2040] block uppercase tracking-wider">
                Dr. Davidpaul Arjilli
              </span>
              <span className="text-[10px] text-gray-500 block">
                Chancellor & Founder, HTU
              </span>
            </div>

            {/* Center: Live Verification QR Code */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="p-1.5 bg-white border-2 border-[#c59b27] rounded shadow-sm">
                <img 
                  src={qrCodeImg} 
                  alt="Verification QR Code" 
                  className="w-24 h-24 sm:w-28 sm:h-28 object-contain"
                />
              </div>
              <span className="text-[10px] text-[#0d2040] font-bold uppercase tracking-wider mt-1.5">
                Scan to Verify Online
              </span>
              <span className="text-[9px] text-gray-500 font-mono">
                {student.certNo}
              </span>
            </div>

            {/* Academic Registrar / Synod Bishop Signature */}
            <div className="text-center sm:text-right space-y-1">
              <div className="h-10 border-b border-gray-400 flex items-end justify-center sm:justify-end pb-1">
                <span className="font-serif italic text-sm text-[#0d2040] font-bold">Synod Bishop & Registrar</span>
              </div>
              <span className="text-xs font-bold text-[#0d2040] block uppercase tracking-wider">
                Cathedral Episcopal Council
              </span>
              <span className="text-[10px] text-gray-500 block">
                Academic Registrar
              </span>
            </div>
          </div>

          {/* Convocation Date & Place Footer */}
          <div className="mt-6 pt-3 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center text-[11px] text-gray-600 gap-2 relative z-10">
            <div>
              <span>Date of Conferral: <strong>{student.date}</strong></span>
              <span className="mx-2">•</span>
              <span>Place of Convocation: <strong>{student.place}</strong></span>
            </div>
            <div className="flex items-center gap-1.5 text-emerald-700 font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>Official Registered Credential</span>
            </div>
          </div>
        </div>
      </div>

      {/* Print CSS Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          header, footer, nav, .no-print {
            display: none !important;
          }
          .certificate-container {
            max-width: 100% !important;
            width: 100% !important;
            box-shadow: none !important;
            border: 4px solid #0d2040 !important;
            padding: 20px !important;
            margin: 0 !important;
            page-break-inside: avoid;
            background: #ffffff !important;
          }
          @page {
            size: A4 landscape;
            margin: 10mm;
          }
        }
      `}</style>
    </div>
  );
}
