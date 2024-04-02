import { appTools, defineConfig } from '@modern-js/app-tools';
import { tailwindcssPlugin } from '@modern-js/plugin-tailwindcss';
import { testingPlugin } from '@modern-js/plugin-testing';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
  runtime: {
    router: true,
  },
  source: {
    mainEntryName: 'index',
  },
  html: {
    disableHtmlFolder: true,
  },
  output: {
    assetPrefix: '/my-modern-app',
    distPath: {
      root: 'docs',
      html: '',
    },
  },
  plugins: [
    appTools({
      bundler: 'webpack', // Set to 'experimental-rspack' to enable rspack ⚡️🦀
    }),
    tailwindcssPlugin(),
    testingPlugin(),
  ],
});
