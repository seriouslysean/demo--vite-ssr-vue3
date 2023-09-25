const { resolve } = require('path');
const { defineConfig } = require('vite');

const root = resolve(__dirname);

module.exports = defineConfig({
    root,
    resolve: {
        alias: {
            '@': resolve(root, 'src'),
        },
    },
    server: { middlewareMode: true },
    appType: 'custom',
});
