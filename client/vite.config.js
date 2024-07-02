import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'; // import the resolve method from the path module

const root = resolve(__dirname, '')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  plugins: [react()],
    root,
    build: {
        outDir,
        emptyOutDir:true,
        rollupOptions: {
          input: {
            main: resolve(root, 'index.html'),
            home: resolve(root, 'homePage.html'),
            createAccount: resolve(root, 'createAccount.html'),
            createCourse: resolve(root, 'createCourse.html'),
            courseDetail: resolve(root, 'courseDetail.html'),
            canvasPage: resolve(root, 'canvasPage.html'),
        }
        }
    },

});
