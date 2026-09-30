'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
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
          <h1 className="text-xl font-bold text-white">Lupa Kata Sandi?</h1>
          <p className="text-xs text-slate-400">
            {isSubmitted
              ? 'Tautan pemulihan kata sandi telah dikirim ke email Anda.'
              : 'Masukkan email terdaftar Anda untuk menerima tautan pemulihan.'}
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            <div>
              <label className="block text-slate-300 font-medium mb-1.5">Alamat Email</label>
              <input
                type="email"
                required
                placeholder="peneliti@institusi.ac.id"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-slate-950/80 border border-slate-800 rounded-lg px-3.5 py-2.5 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2.5 rounded-lg transition shadow-lg shadow-blue-600/30 text-xs mt-2"
            >
              Kirim Tautan Pemulihan
            </button>
          </form>
        ) : (
          <div className="bg-emerald-950/50 border border-emerald-800/80 rounded-xl p-4 text-center space-y-2">
            <p className="text-xs text-emerald-300">
              Silakan periksa kotak masuk email <span className="font-semibold text-white">{email}</span> dan ikuti petunjuk selanjutnya.
            </p>
          </div>
        )}

        <div className="text-center text-xs text-slate-400 pt-2 border-t border-slate-800">
          <Link href="/login" className="text-blue-400 hover:underline font-medium inline-flex items-center gap-1">
            ← Kembali ke Halaman Masuk
          </Link>
        </div>
      </div>
    </div>
  );
}