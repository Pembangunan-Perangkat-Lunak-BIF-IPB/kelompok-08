'use client';

import Link from 'next/link';

export default function LandingPage() {
  return (
    <div 
      suppressHydrationWarning 
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-[#020617] text-white px-4 overflow-hidden"
    >
      
      {/* Background Gambar DNA */}
      <div className="absolute inset-0 z-0 opacity-30">
        <img 
          src="/dna-bg.jpeg" 
          alt="DNA Background" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl w-full flex flex-col items-center text-center">
        
        {/* Logo & Header */}
        <div className="mb-8 flex flex-col items-center">
          <img 
            src="/GenoSphere Logo.png" 
            alt="GenoSphere Logo" 
            className="h-20 w-auto object-contain mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-3">
            GenoSphere-GWAS
          </h1>
          <p className="text-slate-300 text-sm md:text-base max-w-xl">
            Selamat datang di platform analisis bioinformatika lanjut. Pilih mode analisis yang ingin Anda gunakan untuk memulai.
          </p>
        </div>

        {/* Pilihan Mode: Manual vs Guided */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mt-4">
          
          {/* Opsi 1: Guided Pipeline */}
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/60 hover:border-blue-500 p-6 rounded-2xl flex flex-col justify-between text-left transition duration-300 hover:shadow-lg hover:shadow-blue-500/10 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-blue-600 group-hover:text-white transition duration-300">
                🧭
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Guided Mode</h2>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Alur analisis terpadu 10 langkah (*10-step pipeline*) terpandu dari persiapan data hingga visualisasi hasil GWAS secara sistematis.
              </p>
            </div>
            
            <Link 
              href="/login?mode=guided" 
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm rounded-xl text-center transition duration-200 shadow-md flex items-center justify-center gap-2"
            >
              Mulai Guided Mode →
            </Link>
          </div>

          {/* Opsi 2: Manual Analysis */}
          <div className="bg-slate-900/80 backdrop-blur-md border border-slate-700/60 hover:border-indigo-500 p-6 rounded-2xl flex flex-col justify-between text-left transition duration-300 hover:shadow-lg hover:shadow-indigo-500/10 group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center font-bold text-xl mb-4 group-hover:bg-indigo-600 group-hover:text-white transition duration-300">
                ⚙️
              </div>
              <h2 className="text-xl font-bold text-white mb-2">Manual Mode</h2>
              <p className="text-slate-400 text-xs leading-relaxed mb-6">
                Akses bebas ke seluruh modul alat analisis bioinformatika. Cocok untuk peneliti yang ingin menjalankan *step* tertentu secara mandiri.
              </p>
            </div>

            <Link 
              href="/login?mode=manual" 
              className="w-full py-3 bg-slate-800 hover:bg-slate-700 text-indigo-300 font-semibold text-sm rounded-xl text-center border border-indigo-500/30 transition duration-200 flex items-center justify-center gap-2"
            >
              Mulai Manual Mode →
            </Link>
          </div>

        </div>

        {/* Footer info */}
        <p className="text-slate-500 text-xs mt-10">
          GenoSphere-GWAS Platform v1.0 • Bioinformatika & Analisis Genom
        </p>

      </div>
    </div>
  );
}