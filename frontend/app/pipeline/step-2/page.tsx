'use client';

import Link from 'next/link';
import { usePipelineStore } from '@/store/usePipelineStore';

export default function Step2ValidasiData() {
  const { userProfile, genotypeFile } = usePipelineStore();

  const projectName = 'Diabetes_T2D_Cohort_2026';

  const getUserInitial = () => {
    if (!userProfile?.fullName) return 'N';
    return userProfile.fullName.charAt(0).toUpperCase();
  };

  const steps = [
    { id: 1, name: 'Unggah Data', href: '/pipeline/step-1', completed: true, active: false },
    { id: 2, name: 'Validasi Data', href: '/pipeline/step-2', completed: false, active: true },
    { id: 3, name: 'Konfigurasi Analisis', href: '/pipeline/step-3', completed: false, active: false },
    { id: 4, name: 'Konfirmasi Konfigurasi', href: '/pipeline/step-4', completed: false, active: false },
    { id: 5, name: 'Quality Control (QC)', href: '/pipeline/step-5', completed: false, active: false },
    { id: 6, name: 'PCA & Kovariat', href: '/pipeline/step-6', completed: false, active: false },
    { id: 7, name: 'Analisis GWAS', href: '/pipeline/step-7', completed: false, active: false },
    { id: 8, name: 'Post-Processing', href: '/pipeline/step-8', completed: false, active: false },
    { id: 9, name: 'Hasil & Visualisasi', href: '/pipeline/step-9', completed: false, active: false },
    { id: 10, name: 'Simpan & Ekspor', href: '/pipeline/step-10', completed: false, active: false },
  ];

  return (
    <div suppressHydrationWarning className="relative min-h-screen w-full bg-[#020617] text-white flex flex-col justify-between overflow-x-hidden font-sans">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img src="/dna-bg.jpeg" alt="DNA Background" className="w-full h-full object-cover" />
      </div>

      {/* 1. TOP NAVBAR */}
      <header className="relative z-10 w-full h-16 border-b border-slate-800/80 bg-[#020617]/80 backdrop-blur-md px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/GenoSphere Logo.png" alt="GenoSphere Logo" className="h-7 w-auto object-contain" />
            <span className="font-bold text-base tracking-wide text-white">GenoSphere-GWAS</span>
          </div>
          <div className="text-xs text-slate-400 border-l border-slate-800 pl-6 flex items-center gap-2">
            <span>Analysis Pipeline</span>
            <span>/</span>
            <span className="text-white font-medium">Step 2: Validasi Data</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-400">
          <div>
            <span>Project: </span>
            <span className="text-slate-300 font-mono">{projectName}</span>
          </div>

          <Link href="/profile" className="flex items-center gap-2 border-l border-slate-800 pl-6 hover:opacity-80 transition cursor-pointer group">
            <div className="w-7 h-7 rounded-full bg-slate-700 group-hover:bg-blue-600 text-slate-200 flex items-center justify-center font-bold text-xs transition">
              {getUserInitial()}
            </div>
            <span className="text-slate-200 group-hover:text-blue-400 transition font-medium">
              {userProfile.fullName}
            </span>
          </Link>
        </div>
      </header>

      {/* 2. MAIN CONTENT WRAPPER */}
      <div className="relative z-10 flex-1 flex w-full">
        <aside className="w-64 border-r border-slate-800/80 bg-[#020617]/60 backdrop-blur-sm p-4 flex flex-col gap-1 shrink-0">
          {steps.map((step) => (
            <Link key={step.id} href={step.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs transition duration-150 ${step.active ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step.completed ? 'bg-emerald-500 text-white' : step.active ? 'bg-white text-blue-600' : 'bg-slate-800 text-slate-400'}`}>
                {step.completed ? (
                  <svg className="w-3 h-3 stroke-current" fill="none" viewBox="0 0 24 24" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  step.id
                )}
              </span>
              <span>{step.name}</span>
            </Link>
          ))}
        </aside>

        <main className="flex-1 p-8 overflow-y-auto max-w-5xl space-y-6">
          <div>
            <h1 className="text-xl font-bold text-white mb-1">Validasi Data</h1>
            <p className="text-xs text-slate-400">Pemeriksaan format, kelengkapan file, dan pencocokan sample ID.</p>
          </div>

          {/* MAIN CARD */}
          <div className="bg-white rounded-xl p-8 text-slate-900 shadow-xl space-y-6">
            
            {/* SEKSI 1: PEMERIKSAAN FORMAT & KELENGKAPAN FILE */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold text-slate-800">Pemeriksaan Format & Kelengkapan File</h2>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>
                    [✓] File Genotipe: <strong className="font-semibold text-slate-800">{genotypeFile ? genotypeFile.name : '.bed (12.4 MB), .bim (8.1 MB), .fam (45 KB)'}</strong>
                  </span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>
                    [✓] File Fenotipe: <strong className="font-semibold text-slate-800">pheno_data.csv (150 KB)</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* SEKSI 2: PENCOCOKAN SAMPLE ID */}
            <div className="space-y-3 pt-2">
              <h2 className="text-xs font-bold text-slate-800">Pencocokan Sample ID</h2>
              <div className="space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Total sampel di Genotipe (.fam): <strong className="font-bold text-slate-900">1,250</strong></span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Total sampel di Fenotipe (.csv): <strong className="font-bold text-slate-900">1,250</strong></span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Sampel cocok (Matched): <strong className="font-bold text-slate-900">1,250 (100%)</strong></span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-700">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Sampel hilang/tidak cocok (Unmatched): <strong className="font-bold text-slate-900">0</strong></span>
                </div>
              </div>
            </div>

            {/* SEKSI 3: STATUS PROSES GREEN BANNER */}
            <div className="p-3.5 bg-emerald-50 border border-emerald-200/80 rounded-lg flex items-center gap-2.5 text-xs text-emerald-800 font-medium">
              <div className="w-4 h-4 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0">
                <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span>Status Proses : Tidak ditemukan error pada struktur data.</span>
            </div>

          </div>
        </main>
      </div>

      {/* 3. FOOTER NAVIGATION */}
      <footer className="relative z-10 w-full h-16 border-t border-slate-800/80 bg-[#020617]/90 backdrop-blur-md px-6 flex items-center justify-between">
        <Link href="/pipeline/step-1" className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg transition">
          Kembali
        </Link>
        <Link href="/pipeline/step-3" className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition shadow-md shadow-blue-600/30">
          Konfigurasi Analisis
        </Link>
      </footer>
    </div>
  );
}