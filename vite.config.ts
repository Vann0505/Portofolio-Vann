import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Konfigurasi Vite standar untuk project React + TypeScript.
export default defineConfig({
  plugins: [react()],
});
