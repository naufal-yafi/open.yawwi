// /uuid?si=%encrypt(name)&pi=%encrypt(genre)&nd=%id&dlsi=%encrypt(user)

import { genreType } from './genre';
import { MusicType } from './music';

export interface PlaylistType {
  uuid: string;
  id: number;
  name: string;
  genre: genreType;
  pin: boolean;
  musics: MusicType[];
}
