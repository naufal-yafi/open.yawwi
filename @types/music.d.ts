import { artistType } from './artist';

export interface MusicType {
  title: string;
  image_album: string;
  artists: artistType[];
  minute_duration: number;
  second_duration: number;
  name_file: string;
}
