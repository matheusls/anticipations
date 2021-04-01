import { useState } from 'react';

const useTimeout = (ms: number) => {
  const [isReady, setIsReady] = useState(false);

  let timeout: number;

  const start = () => {
    timeout = window.setTimeout(() => setIsReady(true), ms);
  };

  const cancel = () => {
    window.clearTimeout(timeout);
  };

  return {
    isReady,
    start,
    cancel,
  };
};

export default useTimeout;
