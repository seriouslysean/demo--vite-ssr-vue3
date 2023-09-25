const { resolve } = require('path');
const { defineConfig } = require('vite');

const vue = require('@vitejs/plugin-vue');

const root = resolve(__dirname);

module.exports = defineConfig({
    root,
    resolve: {
        alias: {
            '@': resolve(root, 'src'),
        },
    },
    plugins: [vue()],
    server: { middlewareMode: true },
    appType: 'custom',
});
