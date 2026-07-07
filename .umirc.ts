import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: 'pnpm',
  externals: {
    'promise-external':
      'promise Promise.resolve({ foo: "bar", default: "from-promise-external-1111" })',
  },
  mfsu: false,
  utoopack: {},
});
