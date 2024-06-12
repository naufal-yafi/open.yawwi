import { useEffect, useState } from 'react';

export function useDetectConnection(): { isOnline: boolean } {
  const [isOnline, setIsOnline] = useState<boolean>(true);

  const handleCheck = () => {
    setIsOnline(navigator.onLine);
  };

  useEffect(() => {
    window.addEventListener('online', handleCheck);
    window.addEventListener('offline', handleCheck);
  }, []);

  return {
    isOnline,
  };
}
