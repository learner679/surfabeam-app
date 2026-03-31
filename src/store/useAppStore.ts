import { create } from 'zustand';

interface Object3DData {
  id: string;
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  color: string;
}

interface AppState {
  // 3D Scene State
  selectedObject: string | null;
  cameraPosition: [number, number, number];
  showGrid: boolean;
  showGuidelines: boolean;
  objects: Object3DData[];
  
  // Tool State
  activeTool: string;
  toolSettings: Record<string, any>;
  
  // UI State
  theme: 'dark' | 'light';
  language: string;

  // Actions
  setSelectedObject: (id: string | null) => void;
  setCameraPosition: (pos: [number, number, number]) => void;
  toggleGrid: () => void;
  toggleGuidelines: () => void;
  setActiveTool: (toolId: string) => void;
  updateObject: (id: string, updates: Partial<Object3DData>) => void;
  addObject: (obj: Object3DData) => void;
}

export const useAppStore = create<AppState>((set) => ({
  // Initial 3D Scene State
  selectedObject: 'default-surface',
  cameraPosition: [0, 5, 10],
  showGrid: true,
  showGuidelines: true,
  objects: [
    {
      id: 'default-surface',
      position: [0, 0, 0],
      rotation: [-Math.PI / 2, 0, 0],
      scale: [4, 4, 1], // Represents a square surface
      color: '#caffff', // Light cyan object fill
    }
  ],
  
  // Initial Tool State
  activeTool: 'select',
  toolSettings: {},
  
  // Initial UI State
  theme: 'dark',
  language: 'en',

  // Actions implementation
  setSelectedObject: (id) => set({ selectedObject: id }),
  setCameraPosition: (pos) => set({ cameraPosition: pos }),
  toggleGrid: () => set((state) => ({ showGrid: !state.showGrid })),
  toggleGuidelines: () => set((state) => ({ showGuidelines: !state.showGuidelines })),
  setActiveTool: (toolId) => set({ activeTool: toolId }),
  updateObject: (id, updates) => set((state) => ({
    objects: state.objects.map((obj) => 
      obj.id === id ? { ...obj, ...updates } : obj
    )
  })),
  addObject: (obj) => set((state) => ({ objects: [...state.objects, obj] })),
}));
