'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Konfirmasi kata sandi tidak cocok!');
      return;
    }

    setLoading(true);
    setErrorMessage('');
    setSuccessMessage('');

    try {
      // Mengambil URL API dari .env.local dengan Fallback IP Laptop Back-End
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://192.168.100.149:8000';

      const response = await fetch(`${API_URL.replace(/\/$/, '')}/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          full_name: formData.fullName,
          password: formData.password,
          confirm_password: formData.confirmPassword,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        const message = Array.isArray(data.detail)
          ? data.detail[0]?.msg || 'Format pendaftaran tidak valid.'
          : data.detail || 'Gagal mendaftar. Periksa kembali data Anda.';
        throw new Error(message);
      }

      console.log('Registrasi Berhasil:', data);
      setSuccessMessage('Akun berhasil dibuat! Mengalihkan ke halaman login...');

      // Redirect ke halaman login setelah 2 detik
      setTimeout(() => {
        window.location.href = '/login';
      }, 2000);
    } catch (err: any) {
      console.error('Error Register:', err);
      setErrorMessage(err.message || 'Terjadi kesalahan saat pendaftaran.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[#020617] text-white flex items-center justify-center font-sans p-4">
      {/* Background DNA */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img src="/dna-bg.jpeg" alt="DNA Background" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 w-full max-w-md bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl space-y-6">
        <div className="text-center space-y-2">
          <div className="flex items-center justify-center gap-2 mb-2">
            <img src="/GenoSphere Logo.png" alt="GenoSphere Logo" className="h-8 w-auto object-contain" />
            <span className="font-bold text-xl tracking-wide text-white">GenoSphere</span>
          </div>
          <h1 className="text-xl font-bold text-white">Buat Akun Baru</h1>
          <p className="text-xs text-slate-400">Daftar untuk mulai menganalisis data genomik Anda</p>
        </div>

        {/* PESAN ERROR */}
        {errorMessage && (
          <div className="p-3 bg-red-500/10 border border-red-500/50 text-red-400 rounded-lg text-xs">
            {errorMessage}
          </div>
        )}

        {/* PESAN SUKSES */}
        {successMessage && (
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/50 text-emerald-400 rounded-lg text-xs">
            {successMessage}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-300 font-medium mb-1.5">Nama Lengkap</label>
            <input
              type="text"
              required
              placeholder="Dr. John Doe"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1.5">Username</label>
            <input
              type="text"
              required
              placeholder="johndoe"
              value={formData.username}
              onChange={(e) => setFormData({ ...formData, username: e.target.value })}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1.5">Alamat Email</label>
            <input
              type="email"
              required
              placeholder="peneliti@institusi.ac.id"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1.5">Kata Sandi</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <div>
            <label className="block text-slate-300 font-medium mb-1.5">Konfirmasi Kata Sandi</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800/50 text-white font-semibold py-2.5 rounded-lg transition shadow-lg shadow-blue-600/30 text-xs mt-2 cursor-pointer"
          >
            {loading ? 'Mendaftarkan...' : 'Daftar Sekarang'}
          </button>
        </form>

        <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800">
          Sudah punya akun?{' '}
          <Link href="/login" className="text-blue-400 hover:underline font-medium">
            Masuk di sini
          </Link>
        </div>
      </div>
    </div>
  );
}