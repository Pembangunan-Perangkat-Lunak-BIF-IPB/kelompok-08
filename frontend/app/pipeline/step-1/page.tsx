'use client';

import Link from 'next/link';

export default function Step1UnggahData() {
  const steps = [
    { id: 1, name: 'Unggah Data', active: true },
    { id: 2, name: 'Validasi Data', active: false },
    { id: 3, name: 'Konfigurasi Analisis', active: false },
    { id: 4, name: 'Konfirmasi Konfigurasi', active: false },
    { id: 5, name: 'Quality Control (QC)', active: false },
    { id: 6, name: 'PCA & Kovariat', active: false },
    { id: 7, name: 'Analisis GWAS', active: false },
    { id: 8, name: 'Post-Processing', active: false },
    { id: 9, name: 'Hasil & Visualisasi', active: false },
    { id: 10, name: 'Simpan & Ekspor', active: false },
  ];

  return (
    <div 
      suppressHydrationWarning 
      className="relative min-h-screen w-full bg-[#020617] text-white flex flex-col justify-between overflow-x-hidden font-sans"
    >
      {/* Background Gambar DNA */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <img 
          src="/dna-bg.jpeg" 
          alt="DNA Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 1. TOP NAVBAR */}
      <header className="relative z-10 w-full h-16 border-b border-slate-800/80 bg-[#020617]/80 backdrop-blur-md px-6 flex items-center justify-between">
        {/* Brand & Breadcrumb */}
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img 
              src="/GenoSphere Logo.png" 
              alt="GenoSphere Logo" 
              className="h-7 w-auto object-contain"
            />
            <span className="font-bold text-base tracking-wide text-white">
              GenoSphere-GWAS
            </span>
          </div>
          
          <div className="text-xs text-slate-400 border-l border-slate-800 pl-6 flex items-center gap-2">
            <span>Analysis Pipeline</span>
            <span>/</span>
            <span className="text-white font-medium">Step 1: Unggah Data</span>
          </div>
        </div>

        {/* Project Info & User Profile */}
        <div className="flex items-center gap-6 text-xs text-slate-400">
          <div>
            <span>Project: </span>
            <span className="text-slate-300 font-mono">Diabetes_T2D_Cohort_2026</span>
          </div>
          <div className="flex items-center gap-2 border-l border-slate-800 pl-6">
            <div className="w-7 h-7 rounded-full bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-xs">
              NP
            </div>
            <span className="text-slate-200">Nama Pengguna</span>
          </div>
        </div>
      </header>

      {/* 2. MAIN CONTENT WRAPPER */}
      <div className="relative z-10 flex-1 flex w-full">
        
        {/* SIDEBAR NAVIGATION (10 STEPS) */}
        <aside className="w-64 border-r border-slate-800/80 bg-[#020617]/60 backdrop-blur-sm p-4 flex flex-col gap-1 shrink-0">
          {steps.map((step) => (
            <div
              key={step.id}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs transition duration-150 ${
                step.active
                  ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  step.active
                    ? 'bg-white text-blue-600'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {step.id}
              </span>
              <span>{step.name}</span>
            </div>
          ))}
        </aside>

        {/* MAIN UPLOAD AREA */}
        <main className="flex-1 p-8 overflow-y-auto max-w-5xl">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-white mb-1">Unggah Data</h1>
            <p className="text-xs text-slate-400">
              Upload file genotipe dan fenotipe untuk memulai pipeline analisis.
            </p>
          </div>

          <div className="space-y-6">
            {/* KARTU 1: FILE GENOTIPE */}
            <div className="bg-white rounded-xl p-6 text-slate-900 shadow-xl">
              <h2 className="text-xs font-bold text-slate-800 mb-3">
                File Genotipe (.bed/.bim/.fam)
              </h2>
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 transition cursor-pointer">
                <svg className="w-8 h-8 text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <p className="text-xs text-slate-500 font-medium">
                  Upload File .bed, .bim, .fam
                </p>
              </div>
            </div>

            {/* KARTU 2: FILE FENOTIPE */}
            <div className="bg-white rounded-xl p-6 text-slate-900 shadow-xl">
              <h2 className="text-xs font-bold text-slate-800 mb-3">
                File Fenotipe (CSV/TSV)
              </h2>
              <div className="border-2 border-dashed border-slate-300 rounded-xl p-8 flex flex-col items-center justify-center bg-slate-50/50 hover:bg-slate-50 transition cursor-pointer">
                <svg className="w-8 h-8 text-slate-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                <p className="text-xs text-slate-500 font-medium">
                  Upload File CSV/TSV
                </p>
              </div>
            </div>
          </div>
        </main>

      </div>

      {/* 3. BOTTOM FOOTER NAVIGATION */}
      <footer className="relative z-10 w-full h-16 border-t border-slate-800/80 bg-[#020617]/90 backdrop-blur-md px-6 flex items-center justify-between">
        <Link
          href="/login"
          className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg transition"
        >
          Kembali
        </Link>

        <Link
          href="/pipeline/step-2"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition shadow-md shadow-blue-600/30"
        >
          Validasi Data
        </Link>
      </footer>
    </div>
  );
}