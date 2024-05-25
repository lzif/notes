// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

import {} from "tailwind-material-colors";
declare module "tailwind-material-colors/lib/updateTheme.esm" {
  export function updateTheme(
    colorsMap: Record<string, string>,
    darkModeConfig: "media" | "class" | [string, string] = "media",
    scheme: "content" = "content",
    contrast: number = 0,
  ): Promise<void>;
}

export {};
