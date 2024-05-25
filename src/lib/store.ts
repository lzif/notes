import { writable } from "svelte/store";
import type { Workspace, CreateWorkspaceStore } from "./types/types";
import { validateAndFilterWorkspaces } from "./utils/validate";

function storable<T>(key: string, initialValue: unknown) {
  const storedValue = localStorage.getItem(key);
  const store = writable<T>(
    storedValue ? JSON.parse(storedValue) : initialValue,
  );

  store.subscribe((value) => {
    localStorage.setItem(key, JSON.stringify(value));
  });

  return store;
}

export const createWorkspaceStore: CreateWorkspaceStore = () => {
  const { subscribe, update } = storable<Workspace[]>("workspaces", []);
  // Fetch initial data from localStorage or API
  // ...
  return {
    subscribe,
    createWorkspace: (newWorkspace: Workspace) =>
      update((workspaces) => [...workspaces, newWorkspace]),
    updateWorkspace: (updatedWorkspace: Workspace) =>
      update((workspaces) =>
        workspaces.map((workspace) =>
          workspace.id === updatedWorkspace.id ? updatedWorkspace : workspace,
        ),
      ),
    deleteWorkspace: (workspaceId: string) =>
      update((workspaces) => workspaces.filter((w) => w.id !== workspaceId)),
    validateWorkspaces: () => {
      update((work) => validateAndFilterWorkspaces([...work]));
    },
  };
};
