import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';


export default defineConfig({
    root: 'src',
    publicDir: path.resolve(__dirname, 'public'),
    plugins: [
        react(),
        tailwindcss()
    ],
    server: {
        port: 3001
    },
    build: {
        outDir: path.resolve(__dirname, 'build'),
        rollupOptions: {
            input: {
                main: path.resolve(__dirname, 'src/index.html')
            }
        }
    }
});