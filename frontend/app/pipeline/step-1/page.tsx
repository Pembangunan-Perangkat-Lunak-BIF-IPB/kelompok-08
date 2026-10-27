'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePipelineStore } from '@/store/usePipelineStore';

export default function Step1UnggahData() {
  const { userProfile, setGenotypeFile } = usePipelineStore();

  const [genotypeFileLocal, setGenotypeFileLocal] = useState<File | null>(null);
  const [phenotypeFileLocal, setPhenotypeFileLocal] = useState<File | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const projectName = 'Diabetes_T2D_Cohort_2026';

  const allowedGenotypeExts = ['.bed', '.bim', '.fam', '.vcf', '.gz'];
  const allowedPhenotypeExts = ['.csv', '.txt', '.pheno'];

  const getUserInitial = () => {
    if (!userProfile?.fullName) return 'N';
    return userProfile.fullName.charAt(0).toUpperCase();
  };

  const isValidExtension = (fileName: string, allowedExts: string[]) => {
    const lowerName = fileName.toLowerCase();
    return allowedExts.some((ext) => lowerName.endsWith(ext));
  };

  const handleGenotypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (!isValidExtension(file.name, allowedGenotypeExts)) {
        setErrorMessage(
          `Format file "${file.name}" tidak sesuai! Harap unggah berkas genotipe berformat .bed, .bim, .fam, atau .vcf`
        );
        e.target.value = '';
        return;
      }

      setGenotypeFileLocal(file);
      setGenotypeFile(file);
    }
  };

  const handlePhenotypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setErrorMessage(null);
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      if (!isValidExtension(file.name, allowedPhenotypeExts)) {
        setErrorMessage(
          `Format file "${file.name}" tidak sesuai! Harap unggah berkas fenotipe berformat .csv, .txt, atau .pheno`
        );
        e.target.value = '';
        return;
      }

      setPhenotypeFileLocal(file);
    }
  };

  const handleRemoveGenotype = () => {
    setGenotypeFileLocal(null);
    setGenotypeFile(null);
  };

  const handleRemovePhenotype = () => {
    setPhenotypeFileLocal(null);
  };

  const steps = [
    { id: 1, name: 'Unggah Data', href: '/pipeline/step-1', completed: false, active: true },
    { id: 2, name: 'Validasi Data', href: '/pipeline/step-2', completed: false, active: false },
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

      <header className="relative z-10 w-full h-16 border-b border-slate-800/80 bg-[#020617]/80 backdrop-blur-md px-6 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/GenoSphere Logo.png" alt="GenoSphere Logo" className="h-7 w-auto object-contain" />
            <span className="font-bold text-base tracking-wide text-white">GenoSphere-GWAS</span>
          </div>
          <div className="text-xs text-slate-400 border-l border-slate-800 pl-6 flex items-center gap-2">
            <span>Analysis Pipeline</span>
            <span>/</span>
            <span className="text-white font-medium">Step 1: Unggah Data</span>
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

      <div className="relative z-10 flex-1 flex w-full">
        <aside className="w-64 border-r border-slate-800/80 bg-[#020617]/60 backdrop-blur-sm p-4 flex flex-col gap-1 shrink-0">
          {steps.map((step) => (
            <Link key={step.id} href={step.href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-xs transition duration-150 ${step.active ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30' : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'}`}>
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step.completed ? 'bg-emerald-500 text-white' : step.active ? 'bg-white text-blue-600' : 'bg-slate-800 text-slate-400'}`}>
                {step.id}
              </span>
              <span>{step.name}</span>
            </Link>
          ))}
        </aside>

        <main className="flex-1 p-8 overflow-y-auto max-w-5xl space-y-6">
          <div>
            <h1 className="text-xl font-bold text-white mb-1">Unggah Data Input</h1>
            <p className="text-xs text-slate-400">Silakan unggah berkas genotipe dan fenotipe Anda untuk memulai pipeline.</p>
          </div>

          {errorMessage && (
            <div className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-xl text-xs flex items-center justify-between shadow-md">
              <div className="flex items-center gap-2">
                <span className="text-base">⚠️</span>
                <span>{errorMessage}</span>
              </div>
              <button onClick={() => setErrorMessage(null)} className="text-rose-500 font-bold hover:text-rose-800 text-sm">
                ✕
              </button>
            </div>
          )}

          <div className="bg-white rounded-xl p-8 text-slate-900 shadow-xl space-y-6">
            <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-blue-500 transition bg-slate-50/50">
              <input
                type="file"
                accept=".bed,.bim,.fam,.vcf,.gz"
                onChange={handleGenotypeChange}
                className="hidden"
                id="genotype-input"
              />
              <label htmlFor="genotype-input" className="cursor-pointer block space-y-2">
                <span className="text-xs font-bold text-slate-700 block">
                  Unggah Berkas Genotipe (.bed, .bim, .fam / .vcf)
                </span>
                <span className="text-[11px] text-slate-400 block">
                  {genotypeFileLocal ? genotypeFileLocal.name : 'Klik untuk memilih file'}
                </span>
              </label>

              {genotypeFileLocal && (
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="text-xs font-semibold text-emerald-600">✓ Berkas siap</span>
                  <button
                    type="button"
                    onClick={handleRemoveGenotype}
                    className="px-2.5 py-1 bg-rose-100 hover:bg-rose-200 text-rose-700 rounded text-[11px] font-semibold transition"
                  >
                    Batal / Hapus
                  </button>
                </div>
              )}
            </div>

            <div className="border-2 border-dashed border-slate-200 rounded-xl p-6 text-center hover:border-blue-500 transition bg-slate-50/50">
              <input
                type="file"
                accept=".csv,.txt,.pheno"
                onChange={handlePhenotypeChange}
                className="hidden"
                id="phenotype-input"
              />
              <label htmlFor="phenotype-input" className="cursor-pointer block space-y-2">
                <span className="text-xs font-bold text-slate-700 block">
                  Unggah Berkas Fenotipe (.csv, .txt, .pheno)
                </span>
                <span className="text-[11px] text-slate-400 block">
                  {phenotypeFileLocal ? phenotypeFileLocal.name : 'Klik untuk memilih file'}
                </span>
              </label>

              {phenotypeFileLocal && (
                <div className="mt-3 flex items-center justify-center gap-2">
                  <span className="text-xs font-semibold text-emerald-600">✓ Berkas siap</span>
                  <button
                    type="button"
                    onClick={handleRemovePhenotype}
                    className="px-2.5 py-1 bg-rose-100 hover:bg-rose-200 text-rose-700 rounded text-[11px] font-semibold transition"
                  >
                    Batal / Hapus
                  </button>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>

      <footer className="relative z-10 w-full h-16 border-t border-slate-800/80 bg-[#020617]/90 backdrop-blur-md px-6 flex items-center justify-end">
        <Link
          href="/pipeline/step-2"
          className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition shadow-md shadow-blue-600/30"
        >
          Lanjut Validasi
        </Link>
      </footer>
    </div>
  );
}