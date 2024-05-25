export interface User {
  id: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Workspace {
  id: string;
  authorId: string;
  memberIds?: string[];
  isPublic: boolean;
  url?: string;
  notes?: Note[];
  todos?: Todo[];
  createdAt: Date;
  updatedAt: Date;
}

export interface Note {
  id: string;
  isMarkdown: boolean;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}
export interface WorkspaceStore {
  subscribe: (run: (value: Workspace[]) => void) => () => void;
  createWorkspace: (newWorkspace: Workspace) => void;
  updateWorkspace: (updatedWorkspace: Workspace) => void;
  validateWorkspaces: () => void;
  deleteWorkspace: (workspaceId: string) => void;
}

export type CreateWorkspaceStore = () => WorkspaceStore;
