'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { usePipelineStore } from '@/store/usePipelineStore';

// Dynamic import Plotly dengan Factory agar aman dari error SSR/Turbopack Next.js
const Plot = dynamic(
  async () => {
    const Plotly = await import('plotly.js-dist-min');
    // @ts-ignore
    const createPlotlyComponent = (await import('react-plotly.js/factory')).default;
    return createPlotlyComponent(Plotly);
  },
  { ssr: false }
);

// Komponen Grafik Manhattan Plot Dinamis
function ManhattanPlotCanvas() {
  const { gwasResults } = usePipelineStore();

  // Data default jika store belum terisi dari backend
  const displayResults = gwasResults.length > 0 ? gwasResults : [
    { chr: '1', pos: 10000, pvalue: 1.2e-10 },
    { chr: '1', pos: 25000, pvalue: 0.05 },
    { chr: '2', pos: 50000, pvalue: 3.4e-8 },
    { chr: '2', pos: 75000, pvalue: 0.12 },
    { chr: '3', pos: 100000, pvalue: 6.7e-9 },
    { chr: '3', pos: 120000, pvalue: 0.03 },
  ];

  const plotData = [
    {
      x: displayResults.map((item) => item.pos),
      y: displayResults.map((item) => -Math.log10(item.pvalue)),
      mode: 'markers',
      type: 'scattergl',
      marker: {
        size: 8,
        color: displayResults.map((item) => (item.pvalue < 5e-8 ? '#f43f5e' : '#3b82f6')),
      },
    },
  ];

  return (
    <Plot
      data={plotData as any}
      layout={{
        autosize: true,
        margin: { l: 40, r: 20, t: 30, b: 40 },
        xaxis: { title: 'Chromosomal Position' },
        yaxis: { title: '-log10(p-value)' },
        shapes: [
          {
            type: 'line',
            x0: 0,
            x1: 1,
            xref: 'paper',
            y0: -Math.log10(5e-8),
            y1: -Math.log10(5e-8),
            line: { color: '#f43f5e', width: 1.5, dash: 'dash' },
          },
        ],
      }}
      useResizeHandler
      style={{ width: '100%', height: '240px' }}
      config={{ responsive: true, displayModeBar: false }}
    />
  );
}

// WAJIB KAN EXPORT DEFAULT UNTUK PAGE NEXT.JS
export default function Step9HasilDanVisualisasi() {
  const userEmail = 'Nama Pengguna';
  const projectName = 'Diabetes_T2D_Cohort_2026';

  const getUserInitial = () => {
    if (!userEmail) return 'NP';
    return userEmail.charAt(0).toUpperCase();
  };

  const topSnps = [
    { chr: '1', pos: '123456', snp: 'rs123456', pvalue: '1.2e-10' },
    { chr: '2', pos: '987654', snp: 'rs987654', pvalue: '3.4e-08' },
    { chr: '3', pos: '555555', snp: 'rs555555', pvalue: '6.7e-09' },
  ];

  const steps = [
    { id: 1, name: 'Unggah Data', href: '/pipeline/step-1', completed: true, active: false },
    { id: 2, name: 'Validasi Data', href: '/pipeline/step-2', completed: true, active: false },
    { id: 3, name: 'Konfigurasi Analisis', href: '/pipeline/step-3', completed: true, active: false },
    { id: 4, name: 'Konfirmasi Konfigurasi', href: '/pipeline/step-4', completed: true, active: false },
    { id: 5, name: 'Quality Control (QC)', href: '/pipeline/step-5', completed: true, active: false },
    { id: 6, name: 'PCA & Kovariat', href: '/pipeline/step-6', completed: true, active: false },
    { id: 7, name: 'Analisis GWAS', href: '/pipeline/step-7', completed: true, active: false },
    { id: 8, name: 'Post-Processing', href: '/pipeline/step-8', completed: true, active: false },
    { id: 9, name: 'Hasil & Visualisasi', href: '/pipeline/step-9', completed: false, active: true },
    { id: 10, name: 'Simpan & Ekspor', href: '/pipeline/step-10', completed: false, active: false },
  ];

  return (
    <div 
      suppressHydrationWarning 
      className="relative min-h-screen w-full bg-[#020617] text-white flex flex-col justify-between overflow-x-hidden font-sans"
    >
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
            <span className="text-white font-medium">Step 9: Hasil & Visualisasi</span>
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

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex-1 flex w-full">
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

        <main className="flex-1 p-8 overflow-y-auto max-w-5xl space-y-6">
          <div>
            <h1 className="text-xl font-bold text-white mb-1">Hasil dan Visualisasi</h1>
            <p className="text-xs text-slate-400">Plot dan tabel hasil asosiasi genotipe.</p>
          </div>

          {/* VISUALISASI GRAFIK */}
          <div className="bg-white rounded-xl p-6 text-slate-900 shadow-xl space-y-4">
            <h2 className="text-xs font-bold text-slate-800">Visualisasi Grafik</h2>
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50">
              <span className="font-bold text-xs text-slate-800 block mb-2">Manhattan Plot</span>
              <ManhattanPlotCanvas />
            </div>
          </div>

          {/* TABEL HASIL TOP SNP */}
          <div className="bg-white rounded-xl p-6 text-slate-900 shadow-xl space-y-4">
            <h2 className="text-xs font-bold text-slate-800">Tabel Hasil Top SNP (Chr, Pos, p-value)</h2>
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left border-collapse text-xs">
                <thead>
                  <tr className="bg-[#1e293b] text-white">
                    <th className="py-3 px-4 font-semibold w-1/6">Chr</th>
                    <th className="py-3 px-4 font-semibold w-1/4">Pos</th>
                    <th className="py-3 px-4 font-semibold w-1/3">SNP</th>
                    <th className="py-3 px-4 font-semibold text-right">p-value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {topSnps.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 transition">
                      <td className="py-3 px-4">{row.chr}</td>
                      <td className="py-3 px-4 font-mono text-slate-600">{row.pos}</td>
                      <td className="py-3 px-4 font-mono text-blue-600 font-medium">{row.snp}</td>
                      <td className="py-3 px-4 font-mono text-right font-medium text-slate-900">{row.pvalue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* FOOTER */}
      <footer className="relative z-10 w-full h-16 border-t border-slate-800/80 bg-[#020617]/90 backdrop-blur-md px-6 flex items-center justify-between">
        <Link href="/pipeline/step-8" className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium rounded-lg transition">
          Kembali
        </Link>
        <Link href="/pipeline/step-10" className="px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition shadow-md shadow-blue-600/30">
          Simpan & Ekspor
        </Link>
      </footer>
    </div>
  );
}