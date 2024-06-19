import { PlaylistType } from '@type/playlist';
import musics from '@data/music.data';

const playlists: PlaylistType[] = [
  {
    id: 0,
    uuid: 'asd',
    genre: { name: 'j-pop', path: '/favorite' },
    pin: true,
    name: 'Favorite',
    musics: musics.jpop,
  },
  {
    id: 1,
    uuid: 'asdsad',
    genre: { name: 'lofi', path: '/lofi' },
    pin: false,
    name: 'Lofi',
    musics: musics.lofi,
  },
];

export default playlists;
