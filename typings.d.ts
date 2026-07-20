import 'umi/typings';

declare global {
  const __DEMO_BUNDLER__: 'mako' | 'utoopack';

  interface Window {
    FakeModule: {
      foo?: () => string;
    };
  }
}

export {};
