import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        lib: {
            entry: resolve(__dirname, './main.js'),
            name: 'Puzzle',
            fileName: (format) => `puzzle.min.${format}.js`,
        }
    },
});
