import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: process.env.GITHUB_PAGES ? "/yucong-zhng-portfolio/" : "/",
  plugins: [react()]
});
