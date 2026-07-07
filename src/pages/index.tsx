import yayJpg from '../assets/yay.jpg';
import qs from 'query-string';
import promiseExternal, { foo } from 'promise-external';
import { useEffect } from 'react';

console.log('===>q222s111zz11zz', qs);
console.log('===>promiseExternal112221', promiseExternal, foo);

export default function HomePage() {
  useEffect(() => {
    console.log('===>qs inner11110002223331111zz11zzzzz', qs);
    console.log('===>promiseExternal inner', promiseExternal, foo);
  }, []);

  return (
    <div>
      <h2>Yay! Welcome to umi!00z</h2>
      <p>
        promise-external: {JSON.stringify(promiseExternal)} / {foo}
      </p>
      <p>
        <img src={yayJpg} width="388" />
      </p>
      <p>
        To get started, edit <code>pages/index.tsx</code> and save to reload.
      </p>
    </div>
  );
}
