import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bsic/', // Specify the subfolder as the base URL (without the full URL)
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
