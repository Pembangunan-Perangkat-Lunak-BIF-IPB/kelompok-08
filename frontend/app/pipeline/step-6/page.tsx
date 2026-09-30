'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Step6PCADanKovariat() {
  const [jumlahPC, setJumlahPC] = useState('5 PC');
  const [kovariatLain, setKovariatLain] = useState('Usia, Jenis Kelamin');

  const userEmail = 'Nama Pengguna';
  const projectName = 'Diabetes_T2D_Cohort_2026';

  const getUserInitial = () => {
    if (!userEmail) return 'NP';
    return userEmail.charAt(0).toUpperCase();
  };

  // Titik koordinat titik-titik Scatter Plot untuk Cluster 1 (Biru)
  const cluster1Data = [
    { x: 25, y: 35 }, { x: 30, y: 25 }, { x: 32, y: 40 }, { x: 22, y: 28 }, 
    { x: 28, y: 30 }, { x: 35, y: 38 }, { x: 38, y: 22 }, { x: 26, y: 22 },
    { x: 20, y: 32 }, { x: 31, y: 33 }, { x: 24, y: 38 }, { x: 29, y: 18 }
  ];

  // Titik koordinat titik-titik Scatter Plot untuk Cluster 2 (Toska/Hijau)
  const cluster2Data = [
    { x: 65, y: 65 }, { x: 70, y: 72 }, { x: 72, y: 60 }, { x: 62, y: 68 }, 
    { x: 68, y: 70 }, { x: 75, y: 78 }, { x: 78, y: 62 }, { x: 66, y: 62 },
    { x: 60, y: 72 }, { x: 71, y: 73 }, { x: 64, y: 78 }, { x: 69, y: 58 },
    { x: 73, y: 68 }, { x: 76, y: 70 }
  ];

  // Daftar seluruh step pipeline untuk sidebar navigation
  const steps = [
    { id: 1, name: 'Unggah Data', href: '/pipeline/step-1', completed: true, active: false },
    { id: 2, name: 'Validasi Data', href: '/pipeline/step-2', completed: true, active: false },
    { id: 3, name: 'Konfigurasi Analisis', href: '/pipeline/step-3', completed: true, active: false },
    { id: 4, name: 'Konfirmasi Konfigurasi', href: '/pipeline/step-4', completed: true, active: false },
    { id: 5, name: 'Quality Control (QC)', href: '/pipeline/step-5', completed: true, active: false },
    { id: 6, name: 'PCA & Kovariat', href: '/pipeline/step-6', completed: false, active: true },
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
            <span className="text-white font-medium">Step 6: PCA & Kovariat</span>
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

        {/* MAIN PCA AREA */}
        <main className="flex-1 p-8 overflow-y-auto max-w-5xl space-y-6">
          <div>
            <h1 className="text-xl font-bold text-white mb-1">PCA dan Kovariat</h1>
            <p className="text-xs text-slate-400">
              Analisis struktur populasi dan penentuan variabel kovariat.
            </p>
          </div>

          {/* CARD 1: PENGATURAN KOVARIAT */}
          <div className="bg-white rounded-xl p-6 text-slate-900 shadow-xl space-y-4">
            <h2 className="text-xs font-bold text-slate-800">
              Pengaturan Kovariat
            </h2>

            <div className="space-y-3">
              {/* Jumlah PC */}
              <div>
                <label className="block text-[11px] text-slate-500 mb-1">
                  Jumlah PC
                </label>
                <div className="relative">
                  <select
                    value={jumlahPC}
                    onChange={(e) => setJumlahPC(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-200 rounded-md px-3.5 py-2 text-xs text-slate-800 pr-10 focus:outline-none focus:border-blue-500 transition cursor-pointer"
                  >
                    <option value="5 PC">5 PC</option>
                    <option value="10 PC">10 PC</option>
                    <option value="20 PC">20 PC</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-400">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Kovariat Lain */}
              <div>
                <label className="block text-[11px] text-slate-500 mb-1">
                  Kovariat Lain
                </label>
                <div className="relative">
                  <select
                    value={kovariatLain}
                    onChange={(e) => setKovariatLain(e.target.value)}
                    className="w-full appearance-none bg-white border border-slate-200 rounded-md px-3.5 py-2 text-xs text-slate-800 pr-10 focus:outline-none focus:border-blue-500 transition cursor-pointer"
                  >
                    <option value="Usia, Jenis Kelamin">Usia, Jenis Kelamin</option>
                    <option value="Usia, Jenis Kelamin, BMI">Usia, Jenis Kelamin, BMI</option>
                    <option value="Tanpa Kovariat Tambahan">Tanpa Kovariat Tambahan</option>
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

          {/* CARD 2: GRAFIK SCATTER PLOT PCA */}
          <div className="bg-white rounded-xl p-6 text-slate-900 shadow-xl space-y-4">
            <h2 className="text-xs font-bold text-slate-800">
              Grafik Scatter Plot PCA (PC1 vs PC2)
            </h2>

            {/* Container Canvas Scatter Plot */}
            <div className="relative border border-slate-200 rounded-lg p-6 bg-slate-50/50 h-80 flex flex-col justify-between">
              
              {/* Legend Box */}
              <div className="absolute top-4 right-4 bg-white/90 border border-slate-200 rounded p-2.5 shadow-sm text-[11px] space-y-1.5 z-10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500 inline-block"></span>
                  <span className="text-slate-600">Cluster 1</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                  <span className="text-slate-600">Cluster 2</span>
                </div>
              </div>

              {/* Area Plot */}
              <div className="relative w-full h-full border-l border-b border-slate-300 my-2">
                
                {/* Sumbu Y Label (-0.05, 0.00, 0.05, 0.10) */}
                <div className="absolute -left-10 top-0 text-[10px] text-slate-400 font-mono">0.10</div>
                <div className="absolute -left-10 top-1/3 text-[10px] text-slate-400 font-mono">0.05</div>
                <div className="absolute -left-10 top-2/3 text-[10px] text-slate-400 font-mono">0.00</div>
                <div className="absolute -left-12 bottom-0 text-[10px] text-slate-400 font-mono">-0.05</div>
                <div className="absolute -left-8 top-1/2 -rotate-90 text-[10px] font-medium text-slate-400">PC2</div>

                {/* Sumbu X Grid & Label (-0.05, 0.00, PC1, 0.05, 0.10) */}
                <div className="absolute -bottom-6 left-1/4 text-[10px] text-slate-400 font-mono">-0.05</div>
                <div className="absolute -bottom-6 left-2/4 text-[10px] text-slate-400 font-mono">0.00</div>
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-bold text-slate-500">PC1</div>
                <div className="absolute -bottom-6 left-3/4 text-[10px] text-slate-400 font-mono">0.05</div>
                <div className="absolute -bottom-6 right-0 text-[10px] text-slate-400 font-mono">0.10</div>

                {/* Grid Lines Vertikal & Horizontal */}
                <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 pointer-events-none opacity-40">
                  <div className="border-r border-dashed border-slate-200"></div>
                  <div className="border-r border-dashed border-slate-200"></div>
                  <div className="border-r border-dashed border-slate-200"></div>
                  <div></div>
                </div>

                {/* Titik Scatter Cluster 1 (Biru) */}
                {cluster1Data.map((pt, i) => (
                  <div
                    key={`c1-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-blue-500 shadow-sm"
                    style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                  />
                ))}

                {/* Titik Scatter Cluster 2 (Toska) */}
                {cluster2Data.map((pt, i) => (
                  <div
                    key={`c2-${i}`}
                    className="absolute w-2 h-2 rounded-full bg-emerald-500 shadow-sm"
                    style={{ left: `${pt.x}%`, top: `${pt.y}%` }}
                  />
                ))}

              </div>
            </div>
          </div>

        </main>

      </div>

      {/* 3. BOTTOM FOOTER NAVIGATION */}
      <footer className="relative z-10 w-full h-16 border-t border-slate-800/80 bg-[#020617]/90 backdrop-blur-md px-6 flex items-center justify-between">
        {/* Tombol ke Step Sebelum (Step 5) */}
        <Link
          href="/pipeline/step-5"
          className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg transition"
        >
          Kembali
        </Link>

        {/* Tombol ke Step Berikutnya (Step 7) */}
        <Link
          href="/pipeline/step-7"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition shadow-md shadow-blue-600/30"
        >
          Jalankan GWAS
        </Link>
      </footer>
    </div>
  );
}