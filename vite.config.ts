import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'CommonsShared',
      fileName: (format) => `commons-shared.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom','react-dom','@mui/material','@emotion/react','@emotion/styled','@mui/lab'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material':'MaterialUI',
          '@emotion/react':'EmotionReact',
          '@emotion/style':'EmotionStyle',
          '@mui/lab':'MaterialUILab'
        },
      },
    },
  },
});
