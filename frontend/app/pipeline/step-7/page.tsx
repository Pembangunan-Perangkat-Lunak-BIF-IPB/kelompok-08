'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { usePipelineStore } from '@/store/usePipelineStore';

export default function Step7AnalisisGWAS() {
  const { 
    selectedModel, 
    setSelectedModel, 
    executionProgress, 
    logs, 
    updateExecution 
  } = usePipelineStore();

  const userEmail = 'Nama Pengguna';
  const projectName = 'Diabetes_T2D_Cohort_2026';

  const getUserInitial = () => {
    if (!userEmail) return 'NP';
    return userEmail.charAt(0).toUpperCase();
  };

  // Simulasi log jika backend/WebSocket belum tersedia
  useEffect(() => {
    // Jika belum ada log di store, isi dengan initial logs & jalankan simulasi progress
    if (logs.length === 0) {
      updateExecution(10, '[LOG 10:44:00] Initializing GWAS analysis environment...');
      
      const timer1 = setTimeout(() => {
        updateExecution(40, '[LOG 10:44:01] Loading genotypic and phenotypic dataset...');
      }, 1000);

      const timer2 = setTimeout(() => {
        updateExecution(65, '[LOG 10:44:02] Running statistical model (Logistic Regression)...');
      }, 2000);

      const timer3 = setTimeout(() => {
        updateExecution(80, '[LOG 10:44:03] Calculating p-values across all chromosomes (Chr 1-22)...');
      }, 3000);

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
        clearTimeout(timer3);
      };
    }
  }, []);

  const steps = [
    { id: 1, name: 'Unggah Data', href: '/pipeline/step-1', completed: true, active: false },
    { id: 2, name: 'Validasi Data', href: '/pipeline/step-2', completed: true, active: false },
    { id: 3, name: 'Konfigurasi Analisis', href: '/pipeline/step-3', completed: true, active: false },
    { id: 4, name: 'Konfirmasi Konfigurasi', href: '/pipeline/step-4', completed: true, active: false },
    { id: 5, name: 'Quality Control (QC)', href: '/pipeline/step-5', completed: true, active: false },
    { id: 6, name: 'PCA & Kovariat', href: '/pipeline/step-6', completed: true, active: false },
    { id: 7, name: 'Analisis GWAS', href: '/pipeline/step-7', completed: false, active: true },
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
        <img src="/dna-bg.jpeg" alt="DNA Background" className="w-full h-full object-cover" />
      </div>

      {/* TOP NAVBAR */}
      <header className="relative z-10 w-full h-16 border-b border-slate-800/80 bg-[#020617]/80 backdrop-blur-md px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/GenoSphere Logo.png" alt="GenoSphere Logo" className="h-7 w-auto object-contain" />
            <span className="font-bold text-base tracking-wide text-white">GenoSphere-GWAS</span>
          </div>
          <div className="text-xs text-slate-400 border-l border-slate-800 pl-6 flex items-center gap-2">
            <span>Analysis Pipeline</span>
            <span>/</span>
            <span className="text-white font-medium">Step 7: Analisis GWAS</span>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-400">
          <div>
            <span>Project: </span>
            <span className="text-slate-300 font-mono">{projectName}</span>
          </div>
          <div className="flex items-center gap-2 border-l border-slate-800 pl-6">
            <div className="w-7 h-7 rounded-full bg-slate-700 text-slate-200 flex items-center justify-center font-bold text-xs">
              {getUserInitial()}
            </div>
            <span className="text-slate-200">{userEmail}</span>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 flex-1 flex w-full">
        {/* SIDEBAR NAVIGATION */}
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

        {/* MAIN PANEL */}
        <main className="flex-1 p-8 overflow-y-auto max-w-5xl space-y-6">
          <div>
            <h1 className="text-xl font-bold text-white mb-1">Analisis GWAS</h1>
            <p className="text-xs text-slate-400">Jalankan model statistik asosiasi genom.</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-slate-900 shadow-xl space-y-6">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-2">Model Statistik</label>
              <select
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
                className="w-full bg-slate-50 border border-slate-200 rounded-lg px-3.5 py-2.5 text-xs text-slate-800 focus:outline-none focus:border-blue-500"
              >
                <option value="Logistic Regression">Logistic Regression (Binary Phenotype)</option>
                <option value="Linear Regression">Linear Regression (Quantitative Phenotype)</option>
                <option value="Linear Mixed Model (LMM)">Linear Mixed Model / LMM (Population Structure Aware)</option>
              </select>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">Status Eksekusi</span>
                <span className="text-blue-600 font-bold">{executionProgress}%</span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 h-full transition-all duration-500 rounded-full"
                  style={{ width: `${executionProgress}%` }}
                ></div>
              </div>
            </div>

            <div className="space-y-2">
              <span className="block text-xs font-semibold text-slate-700">Terminal Output (Log Stream)</span>
              <div className="bg-slate-950 rounded-lg p-4 font-mono text-[11px] text-slate-300 h-52 overflow-y-auto space-y-1.5 border border-slate-800 shadow-inner">
                {logs.map((log, idx) => (
                  <p key={idx} className="text-emerald-400/90 leading-relaxed">
                    {log}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* FOOTER NAVBAR */}
      <footer className="relative z-10 w-full h-16 border-t border-slate-800/80 bg-[#020617]/90 backdrop-blur-md px-6 flex items-center justify-between">
        <Link href="/pipeline/step-6" className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg transition">
          Kembali
        </Link>
        <Link href="/pipeline/step-8" className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition shadow-md shadow-blue-600/30">
          Lanjut ke Post-Processing
        </Link>
      </footer>
    </div>
  );
}