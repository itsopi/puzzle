import { resolve } from 'path';

export default {
    build: {
        lib: {
            entry: resolve(__dirname, './lib/main.js'),
            name: 'Puzzle',
            fileName: (format) => `puzzle.min.${format}.js`,
        }
    },
};
