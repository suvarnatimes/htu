'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { QRCodeSVG } from 'qrcode.react';
import { Printer, Download, Share2, ArrowLeft, Award, Check, ShieldCheck, CheckCircle2, FileCheck2 } from 'lucide-react';

export default function StandaloneCertificatePage() {
  const params = useParams();
  const rawId = params?.id as string;
  const certId = rawId ? decodeURIComponent(rawId).trim().toUpperCase() : '';

  const [cert, setCert] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!certId) return;

    async function fetchCert() {
      try {
        const res = await fetch(`/api/verify?certNo=${encodeURIComponent(certId)}`);
        const data = await res.json();
        if (res.ok && data.found) {
          setCert(data.record);
        }
      } catch (err) {
        console.error('Error fetching certificate:', err);
      } finally {
        setLoading(false);
      }
    }

    fetchCert();
  }, [certId]);

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0d2040] text-amber-300 flex items-center justify-center font-serif text-lg">
        <p>Retrieving official university diploma from registry...</p>
      </div>
    );
  }

  if (!cert) {
    return (
      <div className="min-h-screen bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-200 max-w-md">
          <h2 className="text-xl font-bold text-red-600 mb-2">Certificate Not Found</h2>
          <p className="text-sm text-slate-600 mb-6">No official record found for Certificate Number: <strong>{certId}</strong></p>
          <Link href="/certificate-verification" className="bg-[#0d2040] text-amber-300 text-sm font-semibold px-5 py-2.5 rounded-lg shadow">
            ← Return to Verification Portal
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 py-8 px-4 print:p-0 print:bg-white">
      {/* Top Navigation Bar (Hidden when printing) */}
      <div className="max-w-5xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/certificate-verification"
          className="flex items-center gap-2 text-xs font-semibold text-slate-700 hover:text-[#0d2040] bg-white px-4 py-2 rounded-lg border border-slate-300 shadow-sm transition"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Verification
        </Link>
        
        <div className="flex items-center gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 px-3.5 py-2 rounded-lg border border-slate-300 shadow-sm transition"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4 text-slate-500" />}
            {copied ? 'Link Copied!' : 'Share'}
          </button>
          <button
            onClick={handlePrint}
            className="bg-[#0d2040] hover:bg-[#163566] text-amber-300 text-xs font-bold px-5 py-2 rounded-lg shadow flex items-center gap-2 transition"
          >
            <Printer className="w-4 h-4" /> Print / Save PDF
          </button>
        </div>
      </div>

      {/* FORMAL DEGREE VERIFICATION & RESULT STATEMENT (FORMAL RESULT FORM WITH E-SIGN) */}
      <div className="max-w-5xl mx-auto">
        <div 
          id="officialCertificate"
          className="bg-white text-slate-900 shadow-xl rounded-xl border-2 border-slate-700 relative overflow-hidden p-6 sm:p-8 md:p-10 print:border-2 print:border-slate-800 print:p-5 print:m-0 print:w-full print:max-w-none print:shadow-none"
        >
          {/* Security Watermark (subtle official background) */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] select-none overflow-hidden">
            <div className="transform -rotate-45 text-slate-900 font-black text-6xl md:text-7xl tracking-widest text-center uppercase whitespace-nowrap">
              HTU OFFICIAL VERIFIED RECORD • HTU OFFICIAL VERIFIED RECORD
            </div>
          </div>

          <div className="relative z-10 space-y-6">
            
            {/* 1. Formal Institutional Header */}
            <div className="border-b-2 border-slate-800 pb-5">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* University Seal & Title */}
                <div className="flex items-center gap-4 text-center sm:text-left">
                  <div className="p-2 bg-slate-50 border border-slate-300 rounded-xl shadow-sm flex-shrink-0">
                    <img 
                      src="/images/logo.png" 
                      alt="Hope Theological University Logo" 
                      className="h-16 sm:h-20 w-auto object-contain"
                    />
                  </div>
                  <div>
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-serif font-black text-[#0d2040] tracking-tight uppercase leading-tight">
                      Hope Theological University
                    </h1>
                    <p className="text-xs sm:text-sm font-bold text-amber-800 tracking-wide uppercase mt-0.5">
                      {cert.synod || "Cathedral Episcopal Synod Bishop's Council"}
                    </p>
                    <p className="text-[11px] text-slate-600 font-medium">
                      Established & Registered under Christian Education Society Act, Govt. of India
                    </p>
                  </div>
                </div>

                {/* Security Badge / Document Registry Code */}
                <div className="text-center sm:text-right flex-shrink-0 flex flex-col items-center sm:items-end">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 border border-emerald-400 text-emerald-800 text-xs font-bold rounded-md mb-1 shadow-sm">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    OFFICIAL REGISTRY RECORD
                  </div>
                  <p className="text-[10px] font-mono text-slate-500 uppercase">
                    Form Ref: <span className="font-bold text-slate-700">HTU/VERIF/SLIP-01</span>
                  </p>
                  <p className="text-[10px] font-mono text-slate-500">
                    Auth ID: <span className="font-bold text-slate-700">HTU-{cert.certNo.replace(/[^A-Za-z0-9]/g, '')}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Formal Result Form Title Band */}
            <div className="bg-[#0d2040] text-white px-4 py-2.5 rounded-lg flex flex-wrap items-center justify-between gap-2 shadow-sm">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <span className="font-serif font-bold text-sm sm:text-base tracking-wide text-amber-300 uppercase">
                  Credential Verification Result Statement
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-emerald-600 text-white font-bold px-2.5 py-0.5 rounded text-[11px] tracking-wide uppercase flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Conferred & Active
                </span>
              </div>
            </div>

            {/* 3. Formal Result Form Details & Candidate Photo Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
              
              {/* Tabular Result Form (3 Columns on Large Screens) */}
              <div className="lg:col-span-3 border border-slate-300 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-slate-100 border-b border-slate-300 px-4 py-2 text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center justify-between">
                  <span>Student / Candidate Verification Details</span>
                  <span className="font-mono text-[11px] text-slate-500">Registry Match: 100%</span>
                </div>

                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <tbody>
                    <tr className="border-b border-slate-200">
                      <td className="w-1/3 sm:w-2/5 p-3 font-semibold text-slate-600 bg-slate-50/70 border-r border-slate-200">
                        Certificate / Registration No.
                      </td>
                      <td className="p-3 font-mono font-black text-slate-900 bg-white">
                        <span className="bg-amber-50 text-amber-900 px-2 py-0.5 rounded border border-amber-300 font-bold">
                          {cert.certNo}
                        </span>
                      </td>
                    </tr>

                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold text-slate-600 bg-slate-50/70 border-r border-slate-200">
                        Conferred Candidate Name
                      </td>
                      <td className="p-3 font-bold text-base text-slate-900 uppercase bg-white">
                        {cert.fullName}
                      </td>
                    </tr>

                    {cert.surname && (
                      <tr className="border-b border-slate-200">
                        <td className="p-3 font-semibold text-slate-600 bg-slate-50/70 border-r border-slate-200">
                          Surname / Family Name
                        </td>
                        <td className="p-3 font-medium text-slate-800 bg-white">
                          {cert.surname}
                        </td>
                      </tr>
                    )}

                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold text-slate-600 bg-slate-50/70 border-r border-slate-200">
                        Conferred Degree / Title
                      </td>
                      <td className="p-3 font-bold text-[#8b1e1e] text-base bg-white">
                        {cert.degree}
                      </td>
                    </tr>

                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold text-slate-600 bg-slate-50/70 border-r border-slate-200">
                        Discipline / Category of Recognition
                      </td>
                      <td className="p-3 font-semibold text-[#0d2040] bg-white">
                        {cert.category}
                      </td>
                    </tr>

                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold text-slate-600 bg-slate-50/70 border-r border-slate-200">
                        Convocation Date & Place
                      </td>
                      <td className="p-3 text-slate-800 bg-white">
                        <strong>{cert.date}</strong> — Held at <strong>{cert.place}</strong>
                      </td>
                    </tr>

                    {cert.address && (
                      <tr className="border-b border-slate-200">
                        <td className="p-3 font-semibold text-slate-600 bg-slate-50/70 border-r border-slate-200">
                          Registered Jurisdiction / Address
                        </td>
                        <td className="p-3 text-slate-800 bg-white font-medium">
                          {cert.address}
                        </td>
                      </tr>
                    )}

                    <tr className="border-b border-slate-200">
                      <td className="p-3 font-semibold text-slate-600 bg-slate-50/70 border-r border-slate-200">
                        Awarding Synod / Council
                      </td>
                      <td className="p-3 text-slate-800 bg-white font-medium">
                        {cert.synod || "Cathedral Episcopal Synod Bishop's Council"}
                      </td>
                    </tr>

                    <tr>
                      <td className="p-3 font-semibold text-slate-600 bg-slate-50/70 border-r border-slate-200">
                        Chancellor & Presiding Bishop
                      </td>
                      <td className="p-3 font-bold text-[#0d2040] bg-white">
                        {cert.chancellor || "Dr. Davidpaul Arjilli"}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Candidate Photo & Security Stamp Card (1 Column on Large Screens) */}
              <div className="lg:col-span-1 flex flex-col items-center justify-between h-full space-y-4">
                
                {/* Verified Candidate Photo */}
                <div className="w-full bg-slate-50 border-2 border-slate-300 rounded-lg p-3 text-center shadow-sm">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-2">
                    Verified Candidate Photo
                  </p>
                  <div className="w-32 h-40 mx-auto border-2 border-slate-400 rounded bg-white overflow-hidden shadow-inner flex items-center justify-center">
                    {cert.imageUrl ? (
                      <img 
                        src={cert.imageUrl} 
                        alt={cert.fullName} 
                        className="w-full h-full object-cover object-top" 
                      />
                    ) : (
                      <Award className="w-12 h-12 text-slate-300" />
                    )}
                  </div>
                  <div className="mt-2 text-[10px] font-mono text-emerald-800 font-bold bg-emerald-100 py-0.5 rounded border border-emerald-300">
                    ✓ IDENTITY CONFIRMED
                  </div>
                </div>

                {/* Live Verification QR Code */}
                <div className="w-full bg-slate-50 border border-slate-300 rounded-lg p-3 flex flex-col items-center justify-center text-center shadow-sm">
                  <div className="p-1.5 bg-white border border-slate-300 rounded-lg shadow-sm">
                    <QRCodeSVG 
                      value={typeof window !== 'undefined' ? `${window.location.origin}/certificate/${encodeURIComponent(cert.certNo)}` : `https://htuindia.in/certificate/${encodeURIComponent(cert.certNo)}`}
                      size={84} 
                    />
                  </div>
                  <p className="text-[9px] text-slate-700 mt-1.5 font-mono font-bold tracking-tight">
                    SCAN TO VERIFY RECORD
                  </p>
                </div>

              </div>

            </div>

            {/* Formal Authority Sign-off Footer */}
            <div className="pt-4 border-t-2 border-slate-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
              <div>
                <p className="text-[11px] font-mono text-slate-500">
                  Registry Auth ID: <strong className="text-slate-800">HTU-REG-{cert.certNo}</strong>
                </p>
                <p className="text-[11px] text-slate-500">
                  Status: <strong className="text-emerald-700">Conferred & Convocated Record</strong>
                </p>
              </div>

              <div className="text-center sm:text-right">
                <p className="text-sm font-serif font-black text-[#0d2040]">
                  Dr. Davidpaul Arjilli
                </p>
                <p className="text-[11px] font-semibold text-amber-900">
                  Chancellor & Presiding Bishop
                </p>
                <p className="text-[10px] text-slate-600">
                  Cathedral Episcopal Synod Bishop's Council • Hope Theological University
                </p>
              </div>
            </div>

            {/* 5. Statutory Legal Notice & Registry Audit Details */}
            <div className="pt-3 border-t border-slate-300 text-[10px] text-slate-500 space-y-1 leading-relaxed">
              <p>
                <strong>Legal & Verification Notice:</strong> This document is an electronically generated and digitally authenticated degree verification result sheet issued under the registry authority of Hope Theological University. Under Section 65B of the Indian Evidence Act and the Information Technology Act, 2000, electronically authenticated records with valid digital verification are legally recognized and do not require a physical ink signature.
              </p>
              <div className="flex flex-wrap items-center justify-between text-[9px] text-slate-400 font-mono pt-1">
                <span>Portal: https://htuindia.in</span>
                <span>Registry ID: HTU-REG-{cert.certNo}</span>
                <span>Secure Electronic Verification Form IV</span>
              </div>
            </div>

          </div>
        </div>

        {/* Action Buttons Below Result Slip */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6 print:hidden">
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-3.5 bg-[#0d2040] hover:bg-[#163566] text-amber-300 font-bold text-sm rounded-xl shadow-lg transition active:scale-95"
          >
            <Printer className="w-4 h-4 text-amber-400" />
            Print Verification Slip
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-6 py-3.5 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-sm rounded-xl shadow-lg transition active:scale-95"
          >
            <Download className="w-4 h-4" />
            Download Result Slip (PDF)
          </button>
        </div>

      </div>
    </div>
  );
}
