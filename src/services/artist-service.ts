import artists from '@data/artist.data';
import { artistType } from '@type/artist';

export function getArtistByName(name: string): artistType {
  return (
    artists.find((artist: artistType) => artist.name === name) || {
      name: '',
      profile_photo: '',
    }
  );
}
