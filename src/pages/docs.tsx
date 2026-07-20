import { foo as foo2 } from 'fake-module';
import { useOutletContext } from 'umi';

type WrapperContext = {
  loaded: boolean;
};

const importedTypeAtModuleEvaluation = typeof foo;

export default function DocsPage() {
  const { loaded } = useOutletContext<WrapperContext>();
  const importedTypeNow = typeof foo;
  const globalTypeNow = typeof window.FakeModule.foo;
  const externalRecovered = importedTypeNow === 'function';

  return (
    <div>
      <h2>{__DEMO_BUNDLER__} 运行结果</h2>
      <p>
        wrapper 状态：
        <strong>{loaded ? '依赖已注入到原 global 对象' : '等待 1 秒注入'}</strong>
      </p>
      <dl>
        <dt>进入路由、依赖尚未注入时：typeof imported foo</dt>
        <dd data-testid="imported-at-evaluation">
          <code>{importedTypeAtModuleEvaluation}</code>
        </dd>
        <dt>依赖注入后：typeof window.FakeModule.foo</dt>
        <dd data-testid="global-now">
          <code>{globalTypeNow}</code>
        </dd>
        <dt>依赖注入后：typeof imported foo</dt>
        <dd data-testid="imported-now">
          <code>{importedTypeNow}</code>
        </dd>
      </dl>

      {loaded ? (
        externalRecovered ? (
          <p data-testid="passed" style={{ color: '#087f23', fontWeight: 700 }}>
            正常：external named import 能读取后来补到原 global 对象上的 foo。
          </p>
        ) : (
          <p data-testid="reproduced" style={{ color: '#c00', fontWeight: 700 }}>
            异常：global 上已有 foo，但 external named import 仍是 undefined。
          </p>
        )
      ) : null}

      <button
        type="button"
        disabled={importedTypeNow !== 'function'}
        onClick={() => { console.log('2333'); foo()} }
      >
        调用 named import foo()
      </button>
    </div>
  );
}
