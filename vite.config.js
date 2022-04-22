// vite.config.js
const { resolve } = require('path')
import { defineConfig } from 'vite'
export default defineConfig({
    // config options
    root: "src",
    build:{
        rollupOptions: {
            input: {
              main: resolve(__dirname, 'src/index.html'),
              aframe: resolve(__dirname, 'src/aframe/index.html')
            }
          },
        outDir: '../dist',
    },
  })
  