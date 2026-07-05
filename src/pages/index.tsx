import yayJpg from '../assets/yay.jpg';
import qs from 'query-string';
import promiseExternal, { foo } from 'promise-external';
import { useEffect } from 'react';

console.log('===>q222s', qs);
console.log('===>promiseExternal112221', promiseExternal, foo);

export default function HomePage() {
  useEffect(() => {
    console.log('===>qs inner111100022233311', qs);
    console.log('===>promiseExternal inner', promiseExternal, foo);
  }, []);

  return (
    <div>
      <h2>Yay! Welcome to umi!0000</h2>
      <p>
        promise-external: {promiseExternal} / {foo}
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
