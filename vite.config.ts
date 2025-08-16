// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Guess-Number/', // set this to your repo name
  plugins: [react()],
});
