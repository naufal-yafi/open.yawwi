import { useEffect, useState } from 'react';

export function useDetectConnection(): { isOnline: boolean } {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

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
