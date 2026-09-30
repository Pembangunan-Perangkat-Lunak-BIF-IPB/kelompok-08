import { create } from 'zustand';

interface PipelineState {
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
  setGenotypeFile: (file: File | null) => void;
  setQualityControl: (config: Partial<PipelineState['qualityControl']>) => void;
  setPcaConfig: (config: Partial<PipelineState['pcaConfig']>) => void;
  setSelectedModel: (model: string) => void;
  updateExecution: (progress: number, newLog?: string) => void;
  setGwasResults: (data: any[]) => void;
}

export const usePipelineStore = create<PipelineState>((set) => ({
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