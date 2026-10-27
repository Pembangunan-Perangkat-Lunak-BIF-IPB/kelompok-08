'use client';

import Link from 'next/link';
import { usePipelineStore } from '@/store/usePipelineStore';

export default function ProfilePage() {
  const { userProfile } = usePipelineStore();

  const getUserInitial = () => {
    if (!userProfile?.fullName) return 'N';
    return userProfile.fullName.charAt(0).toUpperCase();
  };

  return (
    <div 
      suppressHydrationWarning 
      className="relative min-h-screen w-full bg-[#020617] text-white flex flex-col justify-between overflow-x-hidden font-sans p-6 md:p-10"
    >
      {/* Background Gambar DNA */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img src="/dna-bg.jpeg" alt="DNA Background" className="w-full h-full object-cover" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto w-full space-y-6 my-auto">
        {/* HEADER NAVIGATION BACK */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-white">Profil Pengguna</h1>
            <p className="text-xs text-slate-400">Informasi akun peneliti yang terhubung ke pipeline GenoSphere-GWAS.</p>
          </div>
          <Link 
            href="/pipeline/step-1" 
            className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg transition border border-slate-700 shadow-sm flex items-center gap-2"
          >
            ← Kembali ke Pipeline
          </Link>
        </div>

        {/* KARTU PROFIL READ-ONLY */}
        <div className="bg-white rounded-xl p-8 text-slate-900 shadow-2xl space-y-6 border border-slate-100">
          
          {/* HEADER AVATAR & NAMA */}
          <div className="flex items-center gap-6 pb-6 border-b border-slate-100">
            <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-3xl shadow-lg shadow-blue-600/30 shrink-0">
              {getUserInitial()}
            </div>
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
                {userProfile.fullName || 'Nama Pengguna'}
              </h2>
              <p className="text-xs text-blue-600 font-bold mt-0.5">
                @{userProfile.username || 'username'}
              </p>
            </div>
          </div>

          {/* DETAIL INFORMASI AKUN (READ-ONLY) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-xs">
            
            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Nama Lengkap
              </span>
              <p className="text-sm font-semibold text-slate-800">
                {userProfile.fullName || '-'}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Username
              </span>
              <p className="text-sm font-semibold text-slate-800">
                @{userProfile.username || '-'}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-1 md:col-span-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Alamat Email
              </span>
              <p className="text-sm font-semibold text-slate-800 font-mono">
                {userProfile.email || '-'}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-1 md:col-span-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Institusi
              </span>
              <p className="text-sm font-semibold text-slate-800">
                {userProfile.institution || '-'}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200/80 p-4 rounded-xl space-y-1 md:col-span-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Bio / Bidang Penelitian
              </span>
              <p className="text-xs text-slate-700 leading-relaxed font-medium">
                {userProfile.bio || '-'}
              </p>
            </div>

          </div>

          {/* STATUS INTEGRASI */}
          <div className="p-3.5 bg-blue-50 border border-blue-100 rounded-lg flex items-center gap-2.5 text-xs text-blue-900 font-medium pt-3">
            <span className="text-blue-600 text-sm">ℹ️</span>
            <span>Data profil ini tersinkronisasi otomatis dengan akun sesi aktif Anda.</span>
          </div>

        </div>
      </div>
    </div>
  );
}