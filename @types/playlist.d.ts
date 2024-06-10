// /uuid?si=%encrypt(name)&pi=%encrypt(genre)&nd=%id&dlsi=%encrypt(user)

import { StaticImageData } from 'next/image';

export type artistType = {
  name: string;
  profile_photo: StaticImageData | string;
};

export type itemType = {
  title: string;
  image_album: StaticImageData | string;
  artist: artistType[];
  date: string;
  minute_duration: number;
  second_duration: number;
  url: string;
  views: number;
  color: string;
};

export interface PlaylistType {
  uuid: string;
  id: number;
  name: string;
  user: 'yawwi' | string;
  genre: 'J-Pop' | 'Pop Punk' | 'Lofi' | string;
  items: itemType[];
}
