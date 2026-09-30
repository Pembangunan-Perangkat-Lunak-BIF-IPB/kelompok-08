'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigasi ke pipeline utama setelah login
    window.location.href = '/pipeline/step-1';
  };

  return (
    <div className="relative min-h-screen w-full bg-[#020617] text-white flex items-center justify-center font-sans p-4">
      {/* Background DNA */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img src="/dna-bg.jpeg" alt="DNA Background" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 w-full max-w-sm bg-white rounded-2xl p-8 shadow-2xl space-y-6 text-slate-900">
        {/* LOGO & TITLE */}
        <div className="text-center space-y-1">
          <div className="flex items-center justify-center gap-2 mb-2">
            <img src="/GenoSphere Logo.png" alt="GenoSphere Logo" className="h-10 w-auto object-contain" />
          </div>
          <h1 className="text-xl font-bold text-slate-900 tracking-tight">GenoSphere-GWAS</h1>
          <p className="text-[11px] text-slate-500 font-medium">Platform Analisis Bioinformatika Lanjut</p>
        </div>

        {/* FORM LOGIN */}
        <form onSubmit={handleLogin} className="space-y-4 text-xs">
          <div>
            <label className="block text-slate-700 font-semibold mb-1.5">Email / Username</label>
            <input
              type="text"
              required
              placeholder="Masukkan email atau username..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
            />
          </div>

          <div>
            <label className="block text-slate-700 font-semibold mb-1.5">Kata Sandi</label>
            <input
              type="password"
              required
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:bg-white transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition shadow-md shadow-blue-600/30 text-xs mt-2"
          >
            Masuk
          </button>
        </form>

        {/* FOOTER LINK DENGAN LINK NEXT.JS (YANG BISA DIKLIK) */}
        <div className="flex items-center justify-between text-[11px] text-slate-500 pt-2 border-t border-slate-100">
          <Link 
            href="/forgot-password" 
            className="hover:text-blue-600 hover:underline transition font-medium"
          >
            Lupa Kata Sandi?
          </Link>
          <span className="text-slate-300">•</span>
          <Link 
            href="/register" 
            className="hover:text-blue-600 hover:underline transition font-medium"
          >
            Daftar Akun Baru
          </Link>
        </div>
      </div>
    </div>
  );
}