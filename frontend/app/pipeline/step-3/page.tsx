'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Step3KonfigurasiAnalisis() {
  // State form parameter sesuai pilihan desain Figma
  const [tujuanAnalisis, setTujuanAnalisis] = useState('Analisis Asosiasi Genomik');
  const [tipeTrait, setTipeTrait] = useState('Biner (Case / Control)');
  const [modelGwas, setModelGwas] = useState('Logistic Regression');
  const [minorAllele, setMinorAllele] = useState('MAF >= 0.05');
  const [strukturPopulasi, setStrukturPopulasi] = useState('Sertakan Hasil PCA (5 PC)');

  const userEmail = 'Nama Pengguna';
  const projectName = 'Diabetes_T2D_Cohort_2026';

  const getUserInitial = () => {
    if (!userEmail) return 'NP';
    return userEmail.charAt(0).toUpperCase();
  };

  // Daftar seluruh step pipeline untuk sidebar navigation
  const steps = [
    { id: 1, name: 'Unggah Data', href: '/pipeline/step-1', completed: true, active: false },
    { id: 2, name: 'Validasi Data', href: '/pipeline/step-2', completed: true, active: false },
    { id: 3, name: 'Konfigurasi Analisis', href: '/pipeline/step-3', completed: false, active: true },
    { id: 4, name: 'Konfirmasi Konfigurasi', href: '/pipeline/step-4', completed: false, active: false },
    { id: 5, name: 'Quality Control (QC)', href: '/pipeline/step-5', completed: false, active: false },
    { id: 6, name: 'PCA & Kovariat', href: '/pipeline/step-6', completed: false, active: false },
    { id: 7, name: 'Analisis GWAS', href: '/pipeline/step-7', completed: false, active: false },
    { id: 8, name: 'Post-Processing', href: '/pipeline/step-8', completed: false, active: false },
    { id: 9, name: 'Hasil & Visualisasi', href: '/pipeline/step-9', completed: false, active: false },
    { id: 10, name: 'Simpan & Ekspor', href: '/pipeline/step-10', completed: false, active: false },
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
            <span className="text-white font-medium">Step 3: Konfigurasi Analisis</span>
          </div>
        </div>

        {/* Project Info & User Profile */}
        <div className="flex items-center gap-6 text-xs text-slate-400">
          <div>
            <span>Project: </span>
            <span className="text-slate-300 font-mono">
              {projectName}
            </span>
          </div>
          <div className="flex items-center gap-2 border-l border-slate-800 pl-6">
            <div className="w-7 h-7 rounded-full bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-xs">
              {getUserInitial()}
            </div>
            <span className="text-slate-200">
              {userEmail}
            </span>
          </div>
        </div>
      </header>

      {/* 2. MAIN CONTENT WRAPPER */}
      <div className="relative z-10 flex-1 flex w-full">
        
        {/* SIDEBAR NAVIGATION (10 STEPS) */}
        <aside className="w-64 border-r border-slate-800/80 bg-[#020617]/60 backdrop-blur-sm p-4 flex flex-col gap-1 shrink-0">
          {steps.map((step) => (
            <Link
              key={step.id}
              href={step.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs transition duration-150 ${
                step.active
                  ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  step.completed
                    ? 'bg-emerald-500 text-white'
                    : step.active
                    ? 'bg-white text-blue-600'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
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

        {/* MAIN CONFIGURATION AREA */}
        <main className="flex-1 p-8 overflow-y-auto max-w-5xl">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-white mb-1">Konfigurasi Analisis</h1>
            <p className="text-xs text-slate-400">
              Tetapkan parameter utama dan QC sebelum pipeline berjalan.
            </p>
          </div>

          {/* MAIN CARD FORM */}
          <div className="bg-white rounded-xl p-8 text-slate-900 shadow-xl space-y-6">
            
            <p className="text-xs text-slate-500 font-medium pb-2 border-b border-slate-100">
              Tentukan parameter dan model analisis yang akan digunakan!
            </p>

            {/* SEKSI 1: PARAMETER UTAMA */}
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-slate-900">
                Parameter Utama
              </h2>

              {/* Input 1: TUJUAN ANALISIS */}
              <div>
                <label className="block text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-1.5">
                  TUJUAN ANALISIS
                </label>
                <div className="relative">
                  <select
                    value={tujuanAnalisis}
                    onChange={(e) => setTujuanAnalisis(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-200 rounded-md px-3.5 py-2.5 text-xs text-slate-800 pr-10 focus:outline-none focus:border-blue-500 transition cursor-pointer"
                  >
                    <option value="Analisis Asosiasi Genomik">Analisis Asosiasi Genomik</option>
                    <option value="Studi Asosiasi Lainnya">Studi Asosiasi Lainnya</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Input 2: TIPE TRAIT */}
              <div>
                <label className="block text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-1.5">
                  TIPE TRAIT
                </label>
                <div className="relative">
                  <select
                    value={tipeTrait}
                    onChange={(e) => setTipeTrait(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-200 rounded-md px-3.5 py-2.5 text-xs text-slate-800 pr-10 focus:outline-none focus:border-blue-500 transition cursor-pointer"
                  >
                    <option value="Biner (Case / Control)">Biner (Case / Control)</option>
                    <option value="Kuantitatif (Kontinu)">Kuantitatif (Kontinu)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Input 3: MODEL GWAS */}
              <div>
                <label className="block text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-1.5">
                  MODEL GWAS
                </label>
                <div className="relative">
                  <select
                    value={modelGwas}
                    onChange={(e) => setModelGwas(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-200 rounded-md px-3.5 py-2.5 text-xs text-slate-800 pr-10 focus:outline-none focus:border-blue-500 transition cursor-pointer"
                  >
                    <option value="Logistic Regression">Logistic Regression</option>
                    <option value="Linear Regression">Linear Regression</option>
                    <option value="Linear Mixed Model (LMM)">Linear Mixed Model (LMM)</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* SEKSI 2: PARAMETER QC & COVARIATE */}
            <div className="space-y-4 pt-2">
              <h2 className="text-sm font-bold text-slate-900">
                Parameter QC & Covariate
              </h2>

              {/* Input 4: MINOR ALLELE */}
              <div>
                <label className="block text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-1.5">
                  MINOR ALLELE
                </label>
                <div className="relative">
                  <select
                    value={minorAllele}
                    onChange={(e) => setMinorAllele(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-200 rounded-md px-3.5 py-2.5 text-xs text-slate-800 pr-10 focus:outline-none focus:border-blue-500 transition cursor-pointer"
                  >
                    <option value="MAF >= 0.05">MAF &gt;= 0.05</option>
                    <option value="MAF >= 0.01">MAF &gt;= 0.01</option>
                    <option value="MAF >= 0.10">MAF &gt;= 0.10</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Input 5: STRUKTUR POPULASI */}
              <div>
                <label className="block text-[10px] font-bold tracking-wider text-slate-500 uppercase mb-1.5">
                  STRUKTUR POPULASI
                </label>
                <div className="relative">
                  <select
                    value={strukturPopulasi}
                    onChange={(e) => setStrukturPopulasi(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-200 rounded-md px-3.5 py-2.5 text-xs text-slate-800 pr-10 focus:outline-none focus:border-blue-500 transition cursor-pointer"
                  >
                    <option value="Sertakan Hasil PCA (5 PC)">Sertakan Hasil PCA (5 PC)</option>
                    <option value="Sertakan Hasil PCA (10 PC)">Sertakan Hasil PCA (10 PC)</option>
                    <option value="Tanpa Koreksi PCA">Tanpa Koreksi PCA</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </main>

      </div>

      {/* 3. BOTTOM FOOTER NAVIGATION */}
      <footer className="relative z-10 w-full h-16 border-t border-slate-800/80 bg-[#020617]/90 backdrop-blur-md px-6 flex items-center justify-between">
        {/* Tombol ke Step Sebelum (Step 2) */}
        <Link
          href="/pipeline/step-2"
          className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg transition"
        >
          Kembali
        </Link>

        {/* Tombol ke Step Berikutnya (Step 4) */}
        <Link
          href="/pipeline/step-4"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition shadow-md shadow-blue-600/30"
        >
          Konfirmasi
        </Link>
      </footer>
    </div>
  );
}