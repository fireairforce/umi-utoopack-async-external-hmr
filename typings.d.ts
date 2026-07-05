import 'umi/typings';

declare module 'promise-external' {
  export const foo: string;

  const promiseExternal: string;
  export default promiseExternal;
}
