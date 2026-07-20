import { defineConfig } from 'umi';

const bundler = process.env.BUNDLER === 'mako' ? 'mako' : 'utoopack';

export default defineConfig({
  routes: [
    { path: '/', component: 'index' },
    {
      path: '/docs',
      component: 'docs',
      wrappers: ['@/wrappers/FakeModuleWrapper'],
    },
  ],
  npmClient: 'pnpm',
  externals: {
    'fake-module': 'FakeModule',
  },
  headScripts: [{ content: 'window.FakeModule = {};' }],
  define: {
    __DEMO_BUNDLER__: bundler,
  },
  mfsu: false,
  ...(bundler === 'mako' ? { mako: {} } : { utoopack: {} }),
});
