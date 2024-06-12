'use client';

import { useDetectConnection } from '@hook/use-detect-connection';
import React from 'react';

export default function Home() {
  const { isOnline } = useDetectConnection();

  return (
    <main data-test="home">
      <h1>asd</h1>
      <p>{isOnline ? 'Online' : 'Offline'}</p>
    </main>
  );
}
