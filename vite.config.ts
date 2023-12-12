import { defineConfig } from "vite";
import glsl from "vite-plugin-glsl";
import { ssamExport } from "vite-plugin-ssam-export";
import { ssamFfmpeg } from "vite-plugin-ssam-ffmpeg";
import { ssamGit } from "vite-plugin-ssam-git";
import react from '@vitejs/plugin-react'
// import { ssamTimelapse } from "vite-plugin-ssam-timelapse";

export default defineConfig({
  base: "./",
  plugins: [
    react(),
    glsl({
      warnDuplicatedImports: false,
    }),
    ssamExport(),
    ssamFfmpeg(),
    ssamGit(),
    
    // ssamTimelapse(),
  ],
  build: {
    outDir: "./dist",
    assetsDir: ".",
    rollupOptions: {
      //
    },
  },
});
