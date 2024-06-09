import '@style';
import type { Metadata, Viewport } from 'next';
import { Poppins } from 'next/font/google';
import React from 'react';

const inter = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Spotify - Music Player: Music for everyone',
  description:
    'Spotify is a digital music service that gives you access to millions of songs.',
  authors: {
    name: "Muhammad Naufal Yafi'",
    url: 'www.yawwi.click',
  },
  keywords:
    'spotify, spotify clone, playlist music, music player, j-pop, k-pop, pop-punk, lofi, western',
  applicationName: 'Spotify Clone',
  robots: { index: true, follow: false },
  openGraph: {
    type: 'music.playlist',
    url: 'https://open.yawwi.click/playlist',
    title: 'Spotify Clone',
    description:
      'Spotify is a digital music service that gives you access to millions of songs.',
    images: ['/manifest/icon-512.png'],
  },
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
