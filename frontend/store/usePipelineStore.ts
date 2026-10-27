import { create } from 'zustand';

// Interface untuk data Profil Pengguna
export interface UserProfile {
  fullName: string;
  username: string;
  email: string;
  institution: string;
  bio: string;
}

interface PipelineState {
  // Profil Pengguna (Dinamis untuk Top Navbar & Halaman Profil)
  userProfile: UserProfile;

  // Step 1 & 2: Files & Validation
  genotypeFile: File | null;
  phenotypeFile: File | null;
  isValidated: boolean;
  
  // Step 3 & 4: Configurations
  qualityControl: {
    mafThreshold: number;
    callRateThreshold: number;
    hwePValue: string;
  };
  
  // Step 6: PCA
  pcaConfig: {
    numPCs: string;
    covariates: string[];
  };

  // Step 7: GWAS Execution
  selectedModel: string;
  pipelineStatus: 'idle' | 'running' | 'completed' | 'failed';
  executionProgress: number;
  logs: string[];

  // Step 8 & 9: Results
  pvalThreshold: string;
  significantSnpsCount: number;
  gwasResults: Array<{ chr: string; pos: number; snp: string; pvalue: number }>;

  // Actions
  updateUserProfile: (profile: Partial<UserProfile>) => void;
  setGenotypeFile: (file: File | null) => void;
  setQualityControl: (config: Partial<PipelineState['qualityControl']>) => void;
  setPcaConfig: (config: Partial<PipelineState['pcaConfig']>) => void;
  setSelectedModel: (model: string) => void;
  updateExecution: (progress: number, newLog?: string) => void;
  setGwasResults: (data: any[]) => void;
}

export const usePipelineStore = create<PipelineState>((set) => ({
  // Data Profil Default (Bisa digantikan fetch data dari backend)
  userProfile: {
    fullName: 'Nama Pengguna',
    username: 'peneliti_gwas',
    email: 'peneliti@institusi.ac.id',
    institution: 'IPB University - Departemen Bioinformatika',
    bio: 'Fokus pada analisis asosiasi tingkat genom (GWAS) dan integrasi pipeline komputasi data genomik skala besar.',
  },

  genotypeFile: null,
  phenotypeFile: null,
  isValidated: false,
  qualityControl: {
    mafThreshold: 0.05,
    callRateThreshold: 0.95,
    hwePValue: '1e-6',
  },
  pcaConfig: {
    numPCs: '5 PC',
    covariates: ['Usia', 'Jenis Kelamin'],
  },
  selectedModel: 'Logistic Regression',
  pipelineStatus: 'idle',
  executionProgress: 0,
  logs: [],
  pvalThreshold: '5e-8 (Bonferroni)',
  significantSnpsCount: 0,
  gwasResults: [],

  // Action untuk update profil dinamis
  updateUserProfile: (profile) =>
    set((state) => ({
      userProfile: { ...state.userProfile, ...profile },
    })),

  setGenotypeFile: (file) => set({ genotypeFile: file }),
  setQualityControl: (config) =>
    set((state) => ({ qualityControl: { ...state.qualityControl, ...config } })),
  setPcaConfig: (config) =>
    set((state) => ({ pcaConfig: { ...state.pcaConfig, ...config } })),
  setSelectedModel: (model) => set({ selectedModel: model }),
  updateExecution: (progress, newLog) =>
    set((state) => ({
      executionProgress: progress,
      logs: newLog ? [...state.logs, newLog] : state.logs,
    })),
  setGwasResults: (data) => set({ gwasResults: data }),
}));