import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // allows using describe, test, expect directly
    environment: 'jsdom',    // simulates browser for React
    setupFiles: './src/setupTests.js',  // loads jest-dom matchers
    transformMode: {
      web: [/.[jt]sx?$/],    // ensures JSX is transformed in tests
    },
  },
});
