'use client';

import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Send, 
  Clock, 
  CheckCircle2, 
  Building2, 
  MessageSquare,
  Globe
} from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Admissions Inquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep feedback visible
    }, 4000);
  };

  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-[#0d2040] text-white py-14 border-b-4 border-[#c59b27] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <span className="text-xs uppercase font-bold text-[#c59b27] tracking-widest">
            Reach Out To Our Leadership
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-white mt-2">
            Contact Information
          </h1>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl">
            Connect with our National Office in New Delhi or South India Directorate in Machilipatnam for admissions, course information, and honorary doctorate nominations.
          </p>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-16 bg-[#fbfaf6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Office Details */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#c59b27]">
                  Headquarters & Regional Centers
                </span>
                <h2 className="text-2xl font-serif font-bold text-[#0d2040] mt-1 mb-4">
                  University Offices
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                  We are available to assist pastors, students, and ministry candidates across all regions. Reach out directly or visit our authorized study centers.
                </p>
              </div>

              {/* Office 1: National Office */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0d2040] text-[#c59b27] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#c59b27] uppercase tracking-wider block">
                    National Office
                  </span>
                  <h3 className="font-serif font-bold text-base text-[#0d2040] mt-0.5 mb-1">
                    Badarpur, New Delhi
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Building number: 2/3<br />
                    Near Canara Bank, Badarpur<br />
                    New Delhi - 110044, India
                  </p>
                </div>
              </div>

              {/* Office 2: South India Office */}
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#0d2040] text-[#c59b27] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-[#c59b27] uppercase tracking-wider block">
                    South India Office
                  </span>
                  <h3 className="font-serif font-bold text-base text-[#0d2040] mt-0.5 mb-1">
                    Machilipatnam, Andhra Pradesh
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    Machilipatnam, Krishna District<br />
                    Andhra Pradesh - 521002, India
                  </p>
                </div>
              </div>

              {/* Direct Channels */}
              <div className="bg-[#0d2040] text-white p-6 rounded-xl shadow-md space-y-4">
                <h3 className="font-serif font-bold text-base text-[#c59b27] uppercase tracking-wider">
                  Direct Communications
                </h3>
                <div className="flex items-center gap-3 text-xs text-gray-200">
                  <Phone className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                  <div>
                    <span className="block text-[11px] text-gray-400">Phone / WhatsApp:</span>
                    <a href="tel:9492157339" className="font-semibold text-white hover:text-[#c59b27] transition">
                      9492157339
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-200">
                  <Mail className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                  <div>
                    <span className="block text-[11px] text-gray-400">Email:</span>
                    <a href="mailto:hopetheologicaluniversity@gmail.com" className="font-semibold text-white hover:text-[#c59b27] transition break-all">
                      hopetheologicaluniversity@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-xs text-gray-200">
                  <Clock className="w-4 h-4 text-[#c59b27] flex-shrink-0" />
                  <div>
                    <span className="block text-[11px] text-gray-400">Office Working Hours:</span>
                    <span>Monday – Saturday: 9:30 AM – 5:30 PM (IST)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-xl shadow-md border border-gray-200">
                <span className="text-xs font-bold uppercase tracking-wider text-[#c59b27]">
                  Online Message
                </span>
                <h2 className="text-2xl font-serif font-bold text-[#0d2040] mt-1 mb-2">
                  Get In Touch
                </h2>
                <p className="text-xs text-gray-600 mb-6">
                  Please fill out the form below. Our admissions and academic council team will respond promptly.
                </p>

                {submitted ? (
                  <div className="p-6 bg-emerald-50 border-2 border-emerald-500 rounded-xl text-center space-y-3">
                    <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                    <h3 className="font-serif font-bold text-lg text-emerald-900">
                      Thank You for Contacting Us
                    </h3>
                    <p className="text-xs text-emerald-800 max-w-md mx-auto">
                      Your message has been received by Hope Theological University admissions. We will review your inquiry and get back to you at <strong>{formData.email}</strong> shortly.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-3 px-4 py-2 bg-[#0d2040] text-[#c59b27] text-xs font-bold uppercase tracking-wider rounded"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Pastor David Kumar"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="e.g. pastor@example.com"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="e.g. +91 9492157339"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Inquiry Subject *
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                      >
                        <option value="Admissions Inquiry">Admissions Inquiry (Bachelor / Master / Ph.D.)</option>
                        <option value="Honorary Doctorate Nomination">Honorary Doctorate Nomination (Honoris Causa)</option>
                        <option value="Certificate Verification">Certificate Verification Assistance</option>
                        <option value="Study Centre Affiliation">Study Centre Affiliation</option>
                        <option value="General Pastoral Question">General Pastoral / University Question</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 uppercase tracking-wider mb-1">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Please write your questions or ministry background details here..."
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 text-sm focus:outline-none focus:ring-2 focus:ring-[#c59b27] focus:border-transparent"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-[#0d2040] hover:bg-[#1a365d] text-[#c59b27] hover:text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow transition flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
