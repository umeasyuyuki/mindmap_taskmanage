import create from 'zustand';

export interface NodeData {
  id: string;
  parentId?: string;
  title: string;
  note?: string;
  status: 'todo' | 'doing' | 'done';
  priority?: 'low' | 'med' | 'high';
  dueDate?: string;
  tags?: string[];
  collapsed?: boolean;
  color?: string;
}

interface MindmapState {
  nodes: NodeData[];
}

export const useMindmapStore = create<MindmapState>(() => ({
  nodes: [],
}));
