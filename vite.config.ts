import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server : {
    proxy: {
      '/api': { 
        target: 'https://github.com/login/oauth/access_token/',
        changeOrigin: true,
        rewrite:(path) => {
          return path.replace(/^\/api/, '');
        }
      },
      '/kazi': {
        target:'https://api.github.com/user',
        changeOrigin: true,
        rewrite:(path) => {
          return path.replace(/^\/kazi/, '');
        }
      }
    }
  }
})
function __dirname(__dirname: any, arg1: string): string {
  throw new Error('Function not implemented.');
}

