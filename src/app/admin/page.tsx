'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { SignedIn, SignedOut, SignIn, SignUp, UserButton, useUser, SignOutButton } from '@clerk/nextjs';
import { 
  Search, Plus, Edit, Trash2, Download, Users, Award, 
  ExternalLink, RefreshCw, X, ShieldCheck, CheckCircle2, Lock, LogOut, ShieldAlert
} from 'lucide-react';

const AUTHORIZED_ADMIN_EMAIL = 'hopetheologicaluniversity@gmail.com';

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
  imageUrl: string;
  status: string;
}

// Inner Admin Dashboard with live Turso database CRUD
function AdminDashboard() {
  const [students, setStudents] = useState<StudentRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [dbSource, setDbSource] = useState('Turso Live Database');

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit'>('create');
  const [saving, setSaving] = useState(false);
  const [statusNotice, setStatusNotice] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const [formData, setFormData] = useState<StudentRecord>({
    id: '',
    certNo: '',
    name: '',
    surname: '',
    fullName: '',
    address: '',
    degree: '',
    category: 'Social Service',
    date: '2024-01-01',
    place: 'Hyderabad',
    imageUrl: '',
    status: 'Conferred & Active'
  });

  const fetchRecords = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/certificates');
      const data = await res.json();
      if (res.ok && data.data) {
        setStudents(data.data);
        setDbSource(data.source === 'turso' ? 'Turso Live Database' : 'Local Backup');
      }
    } catch (err) {
      console.error('Failed to load certificates:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecords();
  }, []);

  const filteredStudents = useMemo(() => {
    return students.filter(s => {
      const term = searchTerm.toLowerCase();
      const matchSearch = 
        s.fullName.toLowerCase().includes(term) ||
        s.certNo.toLowerCase().includes(term) ||
        s.degree.toLowerCase().includes(term) ||
        s.place.toLowerCase().includes(term);

      const matchCat = selectedCategory === 'ALL' || s.category === selectedCategory;
      return matchSearch && matchCat;
    });
  }, [students, searchTerm, selectedCategory]);

  const categories = useMemo(() => {
    const set = new Set(students.map(s => s.category).filter(Boolean));
    return Array.from(set);
  }, [students]);

  const handleOpenCreate = () => {
    setModalMode('create');
    setFormData({
      id: '',
      certNo: `HTU${students.length + 1}/2024`,
      name: '',
      surname: '',
      fullName: '',
      address: '',
      degree: 'Doctor of Best Social Service',
      category: 'Social Service',
      date: '2024-12-20',
      place: 'Hyderabad',
      imageUrl: '',
      status: 'Conferred & Active'
    });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (student: StudentRecord) => {
    setModalMode('edit');
    setFormData({ ...student });
    setIsModalOpen(true);
  };

  const handleSaveStudent = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setStatusNotice(null);

    const method = modalMode === 'create' ? 'POST' : 'PUT';

    try {
      const res = await fetch('/api/admin/certificates', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok) {
        setStatusNotice({ type: 'success', text: `Certificate ${formData.certNo} saved in Turso database successfully!` });
        setIsModalOpen(false);
        fetchRecords();
      } else {
        setStatusNotice({ type: 'error', text: data.error || 'Failed to save certificate' });
      }
    } catch (err: any) {
      setStatusNotice({ type: 'error', text: err.message || 'Connection error' });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (certNo: string) => {
    if (!confirm(`Are you sure you want to permanently delete certificate ${certNo} from the Turso database?`)) {
      return;
    }

    try {
      const res = await fetch(`/api/admin/certificates?certNo=${encodeURIComponent(certNo)}`, {
        method: 'DELETE'
      });
      if (res.ok) {
        setStatusNotice({ type: 'success', text: `Certificate ${certNo} removed from database.` });
        fetchRecords();
      } else {
        alert('Failed to delete certificate');
      }
    } catch (err: any) {
      alert(`Delete error: ${err.message}`);
    }
  };

  const handleExportCSV = () => {
    const headers = ['Certificate No', 'Full Name', 'Degree', 'Category', 'Date', 'Place', 'Address', 'Status', 'Image URL'];
    const rows = students.map(s => [
      `"${s.certNo}"`,
      `"${s.fullName}"`,
      `"${s.degree}"`,
      `"${s.category}"`,
      `"${s.date}"`,
      `"${s.place}"`,
      `"${s.address || ''}"`,
      `"${s.status || ''}"`,
      `"${s.imageUrl || ''}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `HTU_Certificate_Registry_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      {/* Admin Top Header with Clerk UserButton */}
      <header className="bg-slate-950 border-b border-amber-600/30 px-6 py-4 flex items-center justify-between sticky top-0 z-30 shadow-lg">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-3">
            <img src="/images/logo.png" alt="HTU Logo" className="h-10 w-auto object-contain" />
            <div>
              <h1 className="font-serif font-bold text-base text-amber-400 leading-tight">HTU ADMIN PORTAL</h1>
              <p className="text-[10px] text-slate-400">Registry & Certificate Database Management</p>
            </div>
          </Link>
          <span className="hidden md:inline-flex items-center gap-1.5 ml-4 px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-emerald-950 text-emerald-400 border border-emerald-800">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
            {dbSource}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="/certificate-verification"
            className="text-xs text-amber-300 hover:text-amber-200 border border-amber-500/30 px-3 py-1.5 rounded transition flex items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5" /> Public Verification
          </Link>

          {/* Clerk Official User Button & Authorized Admin Indicator */}
          <div className="flex items-center gap-3 pl-2 border-l border-slate-800">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-950/80 border border-emerald-700/60 rounded-full text-[11px] font-mono text-emerald-300">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              {AUTHORIZED_ADMIN_EMAIL}
            </span>
            <UserButton afterSignOutUrl="/admin" />
          </div>
        </div>
      </header>

      {/* Main Registry Management Container */}
      <main className="max-w-7xl mx-auto px-4 py-8 space-y-6">
        {statusNotice && (
          <div className={`p-4 rounded-lg flex items-center justify-between ${
            statusNotice.type === 'success' ? 'bg-emerald-900/60 border border-emerald-600 text-emerald-200' : 'bg-red-900/60 border border-red-600 text-red-200'
          }`}>
            <span className="text-xs font-medium">{statusNotice.text}</span>
            <button onClick={() => setStatusNotice(null)} className="text-slate-400 hover:text-white"><X className="w-4 h-4" /></button>
          </div>
        )}

        {/* KPIs */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Total Certificates</p>
                <h3 className="text-2xl font-bold text-white mt-1">{students.length}</h3>
              </div>
              <Users className="w-8 h-8 text-amber-500/80" />
            </div>
            <p className="text-[11px] text-emerald-400 mt-2 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" /> Live records in Turso database
            </p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Categories</p>
                <h3 className="text-2xl font-bold text-white mt-1">{categories.length}</h3>
              </div>
              <Award className="w-8 h-8 text-amber-500/80" />
            </div>
            <p className="text-[11px] text-slate-400 mt-2">Social Service, Literature, Ministry, Music</p>
          </div>

          <div className="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80 shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-400 font-bold">Convocation Centers</p>
                <h3 className="text-2xl font-bold text-white mt-1">7 Cities</h3>
              </div>
              <ShieldCheck className="w-8 h-8 text-amber-500/80" />
            </div>
            <p className="text-[11px] text-slate-400 mt-2">Hyderabad, Rajahmundry, Vijayawada, etc.</p>
          </div>
        </div>

        {/* Toolbar */}
        <div className="bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex flex-wrap gap-4 items-center justify-between shadow">
          <div className="relative flex-1 min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by name, cert no, degree, place..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500"
          >
            <option value="ALL">All Categories</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchRecords}
              className="p-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-xs transition"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>

            <button
              onClick={handleExportCSV}
              className="px-3 py-2 bg-slate-700 hover:bg-slate-600 text-slate-200 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition"
            >
              <Download className="w-4 h-4" /> Export CSV
            </button>

            <button
              onClick={handleOpenCreate}
              className="px-4 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 shadow transition active:scale-95"
            >
              <Plus className="w-4 h-4" /> Add Recipient
            </button>
          </div>
        </div>

        {/* Live Table */}
        <div className="bg-slate-800/80 rounded-xl border border-slate-700 overflow-hidden shadow">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-700">
                <tr>
                  <th className="py-3 px-4">Photo</th>
                  <th className="py-3 px-4">Cert No</th>
                  <th className="py-3 px-4">Recipient Name</th>
                  <th className="py-3 px-4">Conferred Degree</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Date & Place</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60 text-slate-300">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((s) => (
                    <tr key={s.certNo} className="hover:bg-slate-700/30 transition">
                      <td className="py-2.5 px-4">
                        <div className="w-9 h-11 rounded border border-amber-600/40 overflow-hidden bg-slate-900 flex-shrink-0">
                          {s.imageUrl ? (
                            <img src={s.imageUrl} alt={s.fullName} className="w-full h-full object-cover object-top" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-[10px] text-slate-500 font-mono">HTU</div>
                          )}
                        </div>
                      </td>
                      <td className="py-2.5 px-4 font-mono font-bold text-amber-400">{s.certNo}</td>
                      <td className="py-2.5 px-4 font-semibold text-white">
                        {s.fullName}
                        {s.address && <span className="block text-[10px] text-slate-400 font-normal">{s.address}</span>}
                      </td>
                      <td className="py-2.5 px-4 text-slate-200">{s.degree}</td>
                      <td className="py-2.5 px-4">
                        <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                          {s.category}
                        </span>
                      </td>
                      <td className="py-2.5 px-4">
                        <span>{s.date}</span>
                        <span className="block text-[10px] text-slate-400">{s.place}</span>
                      </td>
                      <td className="py-2.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-1.5">
                          <Link
                            href={`/certificate/${encodeURIComponent(s.certNo)}`}
                            target="_blank"
                            className="p-1.5 bg-slate-700 hover:bg-amber-600 text-slate-300 hover:text-white rounded transition"
                            title="View Certificate"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                          </Link>
                          <button
                            onClick={() => handleOpenEdit(s)}
                            className="p-1.5 bg-slate-700 hover:bg-blue-600 text-slate-300 hover:text-white rounded transition"
                            title="Edit"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleDelete(s.certNo)}
                            className="p-1.5 bg-slate-700 hover:bg-red-600 text-slate-300 hover:text-white rounded transition"
                            title="Delete"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={7} className="py-12 text-center text-slate-500">
                      {loading ? 'Loading records from Turso database...' : 'No certificate records found.'}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* CREATE / EDIT MODAL */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4">
          <div className="bg-slate-800 border border-slate-700 rounded-xl shadow-2xl w-full max-w-xl overflow-hidden">
            <div className="bg-slate-900 px-6 py-4 border-b border-slate-700 flex items-center justify-between">
              <h3 className="font-serif font-bold text-base text-amber-400">
                {modalMode === 'create' ? '+ Add New Certificate Recipient' : `Edit Certificate: ${formData.certNo}`}
              </h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveStudent} className="p-6 space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1 font-bold">Certificate Number *</label>
                  <input
                    type="text"
                    required
                    value={formData.certNo}
                    disabled={modalMode === 'edit'}
                    onChange={(e) => setFormData({ ...formData, certNo: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white font-mono disabled:opacity-50"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-bold">Category</label>
                  <input
                    type="text"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1 font-bold">Given Name *</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-bold">Surname</label>
                  <input
                    type="text"
                    value={formData.surname}
                    onChange={(e) => setFormData({ ...formData, surname: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-bold">Full Formal Name (for Certificate) *</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  placeholder="e.g. Dr. John Doe"
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white"
                />
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-bold">Conferred Degree *</label>
                <input
                  type="text"
                  required
                  value={formData.degree}
                  placeholder="e.g. Doctor of Best Social Service"
                  onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-slate-400 mb-1 font-bold">Convocation Date</label>
                  <input
                    type="text"
                    value={formData.date}
                    placeholder="YYYY-MM-DD or DD-MM-YYYY"
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-400 mb-1 font-bold">Convocation Place</label>
                  <input
                    type="text"
                    value={formData.place}
                    placeholder="e.g. Rajahmundry"
                    onChange={(e) => setFormData({ ...formData, place: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-slate-400 mb-1 font-bold">Photo URL (Cloudinary or Image Link)</label>
                <input
                  type="text"
                  value={formData.imageUrl}
                  placeholder="https://res.cloudinary.com/hlrdvheu/..."
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full bg-slate-900 border border-slate-700 rounded px-3 py-2 text-white font-mono"
                />
              </div>

              <div className="pt-4 border-t border-slate-700 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-slate-300 rounded font-semibold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={saving}
                  className="px-5 py-2 bg-amber-600 hover:bg-amber-500 text-white rounded font-bold shadow disabled:opacity-50"
                >
                  {saving ? 'Saving to Database...' : 'Save to Turso DB'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Security Guard: Restrict access strictly to hopetheologicaluniversity@gmail.com
function AdminAuthGuard() {
  const { isLoaded, user } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4 text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-4 border-amber-400 border-t-transparent mb-4"></div>
        <p className="text-sm font-medium text-slate-300 font-mono">
          Verifying administrative credentials...
        </p>
      </div>
    );
  }

  // Extract all email addresses associated with the signed-in Clerk account
  const userEmails = user?.emailAddresses?.map((e) => e.emailAddress.trim().toLowerCase()) || [];
  const primaryEmail = user?.primaryEmailAddress?.emailAddress?.trim().toLowerCase() || '';

  const isAuthorized = 
    userEmails.includes(AUTHORIZED_ADMIN_EMAIL.toLowerCase()) || 
    primaryEmail === AUTHORIZED_ADMIN_EMAIL.toLowerCase();

  // If signed-in account is NOT hopetheologicaluniversity@gmail.com
  if (!isAuthorized) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-lg bg-slate-900 border-2 border-red-500/60 rounded-2xl shadow-2xl p-6 sm:p-8 text-center space-y-6">
          
          <div className="w-16 h-16 rounded-full bg-red-950/80 border-2 border-red-500/60 flex items-center justify-center mx-auto text-red-400 shadow-inner">
            <ShieldAlert className="w-9 h-9" />
          </div>

          <div>
            <h1 className="text-xl sm:text-2xl font-serif font-black text-red-400 tracking-wide uppercase">
              Access Denied: Unauthorized Account
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-2 leading-relaxed">
              This admin dashboard is strictly restricted. Only the authorized Hope Theological University administrator account is granted registry management access.
            </p>
          </div>

          {/* Email Info Card */}
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-4 text-left space-y-2 text-xs">
            <div className="flex justify-between items-center border-b border-slate-800/80 pb-2">
              <span className="text-slate-400">Signed in as:</span>
              <span className="font-mono font-bold text-red-300 truncate max-w-[220px]" title={primaryEmail}>
                {primaryEmail || 'No primary email detected'}
              </span>
            </div>
            <div className="flex justify-between items-center pt-1">
              <span className="text-slate-400">Required admin email:</span>
              <span className="font-mono font-bold text-emerald-400">
                {AUTHORIZED_ADMIN_EMAIL}
              </span>
            </div>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <SignOutButton redirectUrl="/admin">
              <button className="w-full sm:w-auto px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs rounded-xl shadow transition flex items-center justify-center gap-2">
                <LogOut className="w-4 h-4" />
                Sign Out & Switch Account
              </button>
            </SignOutButton>

            <Link
              href="/certificate-verification"
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs rounded-xl border border-slate-700 transition flex items-center justify-center gap-2"
            >
              Public Verification
            </Link>
          </div>

          <p className="text-[10px] text-slate-500 font-mono">
            Security Notice: All administrative login attempts and session tokens are logged for audit compliance.
          </p>
        </div>
      </div>
    );
  }

  // Account IS hopetheologicaluniversity@gmail.com -> Render Full Dashboard
  return <AdminDashboard />;
}

// Login Card allowing toggle between Sign In and Sign Up (First-Time Registration)
function AdminLoginCard() {
  const [authMode, setAuthMode] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="w-full max-w-md space-y-4">
      {/* Tab Switcher */}
      <div className="flex bg-slate-900 border border-slate-800 p-1 rounded-xl shadow-inner">
        <button
          type="button"
          onClick={() => setAuthMode('signin')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
            authMode === 'signin'
              ? 'bg-[#0d2040] text-amber-300 shadow border border-amber-500/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          Sign In
        </button>
        <button
          type="button"
          onClick={() => setAuthMode('signup')}
          className={`flex-1 py-2 text-xs font-bold rounded-lg transition ${
            authMode === 'signup'
              ? 'bg-[#0d2040] text-amber-300 shadow border border-amber-500/30'
              : 'text-slate-400 hover:text-white'
          }`}
        >
          First-Time Register (Sign Up)
        </button>
      </div>

      <div className="w-full bg-white rounded-2xl shadow-2xl overflow-hidden p-2">
        {authMode === 'signin' ? (
          <SignIn 
            routing="hash"
            appearance={{
              elements: {
                formButtonPrimary: 'bg-[#0d2040] hover:bg-[#163566] text-amber-300 font-bold',
                headerTitle: 'font-serif text-slate-900 text-lg',
                card: 'shadow-none border-0'
              }
            }}
          />
        ) : (
          <SignUp 
            routing="hash"
            appearance={{
              elements: {
                formButtonPrimary: 'bg-[#0d2040] hover:bg-[#163566] text-amber-300 font-bold',
                headerTitle: 'font-serif text-slate-900 text-lg',
                card: 'shadow-none border-0'
              }
            }}
          />
        )}
      </div>

      <div className="text-center text-xs text-slate-400 bg-slate-900/60 border border-slate-800/80 p-3 rounded-xl">
        {authMode === 'signin' ? (
          <p>
            Got <span className="text-red-300 font-mono font-bold">"The External Account was not found"</span>?{' '}
            <button
              type="button"
              onClick={() => setAuthMode('signup')}
              className="text-amber-400 hover:underline font-bold"
            >
              Click here to Register (Sign Up)
            </button>{' '}
            first with your Google account.
          </p>
        ) : (
          <p>
            Already registered?{' '}
            <button
              type="button"
              onClick={() => setAuthMode('signin')}
              className="text-amber-400 hover:underline font-bold"
            >
              Click here to Sign In
            </button>.
          </p>
        )}
      </div>
    </div>
  );
}

// Main Admin Page Component with Official Clerk Login Integration
export default function AdminPage() {
  return (
    <>
      {/* 1. If signed out: Render Clerk's Official Login Widget (No other login methods) */}
      <SignedOut>
        <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
          <div className="mb-6 text-center">
            <Link href="/" className="inline-block mb-3">
              <img src="/images/logo.png" alt="HTU Official Logo" className="h-20 w-auto mx-auto object-contain drop-shadow" />
            </Link>
            <h1 className="text-xl sm:text-2xl font-serif font-bold text-amber-400">
              HOPE THEOLOGICAL UNIVERSITY
            </h1>
            <p className="text-xs text-slate-400 mt-1">
              Cathedral Episcopal Synod • Admin Portal Login
            </p>
            <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 bg-amber-950/60 border border-amber-600/40 text-amber-300 text-[11px] rounded-full font-mono">
              <Lock className="w-3 h-3 text-amber-400" />
              Restricted to: {AUTHORIZED_ADMIN_EMAIL}
            </div>
          </div>

          <AdminLoginCard />

          <div className="mt-6 text-center text-xs text-slate-500">
            <Link href="/certificate-verification" className="text-amber-400/80 hover:text-amber-300">
              ← Back to Public Certificate Verification
            </Link>
          </div>
        </div>
      </SignedOut>

      {/* 2. If signed in: Verify account email is hopetheologicaluniversity@gmail.com */}
      <SignedIn>
        <AdminAuthGuard />
      </SignedIn>
    </>
  );
}
