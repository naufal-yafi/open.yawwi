import { PlaylistType } from './playlist';

export interface UserType {
  name: string;
  profile_photo: string;
  artist_profile_photo_path: string;
  music_path: string;
  playlists: PlaylistType[];
}
