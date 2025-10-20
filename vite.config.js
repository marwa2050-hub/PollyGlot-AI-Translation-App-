import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/PollyGlot-AI-Translation-App-/", // همان نام ریپازیتوری
});
