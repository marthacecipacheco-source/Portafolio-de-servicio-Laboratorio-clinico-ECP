import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Permite que dist/ funcione tanto en servidores estáticos como en Live Server
  server: {
    host: true, // Escucha en 0.0.0.0, 127.0.0.1 y localhost
    port: 3000,
    open: false
  }
});
