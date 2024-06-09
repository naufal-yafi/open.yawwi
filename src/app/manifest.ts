import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    lang: 'en',
    dir: 'ltr',
    name: 'Spotify - Music Player: Music for everyone',
    short_name: 'Spotify',
    description:
      'Spotify is a digital music service that gives you access to millions of songs.',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/manifest/icon-144.png',
        sizes: '144x144',
        type: 'image/png',
      },
      {
        src: '/manifest/icon-192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/manifest/icon-256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: '/manifest/icon-384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: '/manifest/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
      {
        src: '/manifest/maskable-icon.png',
        sizes: '196x196',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    start_url: '/',
    display: 'standalone',
    orientation: 'any',
    theme_color: '#000000',
    background_color: '#000000',
    prefer_related_applications: true,
    related_applications: [
      {
        platform: 'spotify',
        url: 'https://open.spotify.com',
      },
    ],
  };
}
