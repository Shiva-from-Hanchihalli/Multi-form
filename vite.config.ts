import { defineConfig } from "vite";
// If you're using React, keep this import
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/Multi-form/", // repo namne
  plugins: [react()],
});
