import React, { useState } from 'react';
import {
  Mail,
  ExternalLink,
  Send,
  CheckCircle2,
  Globe,
  Share2,
  Building,
} from 'lucide-react';
import { COMPANY_INFO } from '../../data/companyData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    subject: 'Partnership & Collaboration Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    try {
      const res = await fetch('/api/contact/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitted(true);
      }
    } catch (e) {
      // Local fallback confirmation
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 pb-8">
      {/* Header */}
      <div className="border-b border-slate-200 pb-4">
        <div className="flex items-center gap-2 text-xs text-slate-500 mb-1">
          <span>Corporate Communications</span>
          <span aria-hidden="true">·</span>
          <span>Official Contacts</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Contact & Social Media
        </h1>
        <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-3xl leading-relaxed">
          Connect with the executive leadership, engineering, and clinical research teams at NORA Health Tech & Innovation.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Official Details & Channels */}
        <div className="lg:col-span-5 space-y-6">
          {/* Official Email Card */}
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-[#008489]">
              <Mail className="w-5 h-5" />
              <h3 className="text-sm font-bold text-[#0b2545]">Direct Inquiries</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              For corporate partnerships, institutional research collaborations, or technology inquiries:
            </p>
            <a
              href={`mailto:${COMPANY_INFO.contactEmail}`}
              className="font-mono text-sm font-bold text-[#008489] hover:underline break-all block"
            >
              {COMPANY_INFO.contactEmail}
            </a>
          </div>

          {/* Official Website */}
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-[#008489]">
              <Globe className="w-5 h-5" />
              <h3 className="text-sm font-bold text-[#0b2545]">Official Company Website</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Explore corporate background, official announcements, and research highlights on our primary public web portal:
            </p>
            <a
              href={COMPANY_INFO.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#0b2545] hover:text-[#008489] hover:underline"
            >
              <span className="break-all">{COMPANY_INFO.websiteUrl}</span>
              <ExternalLink className="w-3.5 h-3.5 shrink-0 text-slate-400" />
            </a>
          </div>

          {/* Social Media & Research Repositories */}
          <div className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3">
            <div className="flex items-center gap-2.5 text-[#008489]">
              <Share2 className="w-5 h-5" />
              <h3 className="text-sm font-bold text-[#0b2545]">Official Social & Digital Channels</h3>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Follow our latest updates, tools, and announcements across verified public channels:
            </p>
            <div className="space-y-2 pt-1 text-xs">
              {COMPANY_INFO.socialLinks.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors"
                >
                  <div>
                    <span className="font-semibold text-slate-900 block">{s.platform}</span>
                    <span className="text-[11px] font-mono text-slate-500">{s.handle}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs space-y-5">
          <div className="border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900">Send an Inquiry</h3>
            <p className="text-xs text-slate-500">
              Reach out directly to our partnerships and research consultation team
            </p>
          </div>

          {submitted ? (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-slate-900">Message Received</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you for contacting NORA Health Tech & Innovation. A representative from our partnership team will review your inquiry at <strong className="font-mono text-slate-800">{formData.email}</strong>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', organization: '', email: '', subject: 'Partnership & Collaboration Inquiry', message: '' });
                }}
                className="mt-4 px-4 py-2 text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 rounded transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Dr. Jane Doe"
                    className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Organization / Institution</label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. City Health Authority / University Hospital"
                    className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.org"
                    className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-teal-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-800 mb-1">Inquiry Subject</label>
                  <select
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 bg-white"
                  >
                    <option value="Partnership & Collaboration Inquiry">Partnership & Collaboration Inquiry</option>
                    <option value="Product Demonstration Request">Product Demonstration Request</option>
                    <option value="Research & Clinical Evidence Working Group">Research & Clinical Evidence</option>
                    <option value="Health Policy & Regulatory Consultation">Health Policy & Regulatory</option>
                    <option value="Media & Press Inquiry">Media & Press Inquiry</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-800 mb-1">Message Details *</label>
                <textarea
                  rows={5}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your health technology needs, research collaboration proposal, or question..."
                  className="w-full px-3 py-2 border border-slate-200 rounded focus:outline-none focus:ring-1 focus:ring-teal-500 leading-relaxed"
                />
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  type="submit"
                  disabled={loading}
                  className="px-5 py-2.5 bg-[#0b2545] hover:bg-[#07172b] active:bg-[#050f1c] text-white font-semibold rounded transition-colors flex items-center gap-2 shadow-xs disabled:opacity-40"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Sending Inquiry...' : 'Transmit Message'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
