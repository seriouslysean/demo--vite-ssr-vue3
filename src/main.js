import { createSSRApp } from 'vue';

import App from '@/App.vue';

console.log('!!! App', App);

export const createApp = (context) => {
    console.log('!!! context', context);
    const app = createSSRApp(App);
    return {
        app,
    };
};
