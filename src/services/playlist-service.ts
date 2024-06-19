import playlists from '@data/playlist.data';
import { PlaylistType } from '@type/playlist';

export function getPlaylistByName(name: string): PlaylistType {
  return (
    playlists.find((playlist: PlaylistType) => playlist.name === name) || {
      uuid: '',
      id: 0,
      name: '',
      genre: {
        name: '',
        path: '',
      },
      pin: false,
      musics: [],
    }
  );
}
