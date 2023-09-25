import { renderToString } from 'vue/server-renderer';

import { createApp } from '@/main.js';

export const render = async (context) => {
  const { app } = createApp(context);
  const html = await renderToString(app);

  return {
    html,
  };
};
