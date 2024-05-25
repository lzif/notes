import { withMaterialColors } from "tailwind-material-colors";

/** @type {import('tailwindcss').Config} */
export default withMaterialColors(
  {
    darkMode: "class",
    content: ["./src/**/*.{html,js,svelte,ts}"],
    theme: {
      extend: {},
    },
    plugins: [],
  },
  { primary: "#ff00ff" /* "#0369a1" */ },
  { scheme: "content", extend: true },
);
