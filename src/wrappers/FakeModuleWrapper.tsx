import { useEffect, useState } from 'react';
import { Outlet } from 'umi';

function foo() {
  return 'foo from delayed UMD';
}

export default function FakeModuleWrapper() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      Object.assign(window.FakeModule, { foo });
      setLoaded(true);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section>
      <p>
        FakeModuleWrapper：1 秒后执行{' '}
        <code>Object.assign(window.FakeModule, {'{ foo }'})</code>。
      </p>
      <Outlet context={{ loaded }} />
    </section>
  );
}
