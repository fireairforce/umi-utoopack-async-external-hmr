import { Link } from 'umi';

export default function HomePage() {
  return (
    <div>
      <h2>{__DEMO_BUNDLER__}：global external 延迟注入复现</h2>
      <p>
        首次打开首页时，head script 只创建空对象{' '}
        <code>window.FakeModule = {'{}'}</code>。
      </p>
      <p>
        通过下面的客户端路由进入页面后，route wrapper 会等待 1 秒再注入{' '}
        <code>foo</code>。
      </p>
      <p>
        wrapper 使用{' '}
        <code>Object.assign(window.FakeModule, {'{ foo }'})</code>，不会替换原对象。
      </p>
      <p>
        <Link to="/docs">通过客户端路由进入复现页</Link>
      </p>
      <p>
        对照启动命令：<code>pnpm dev:mako</code> /{' '}
        <code>pnpm dev:utoo</code>，分别访问 8100 / 8000 端口。
      </p>
    </div>
  );
}
