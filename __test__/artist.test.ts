import artists from '@data/artist.data';
import { describe, expect, test } from '@jest/globals';
import { getArtistByName } from '@service/artist-service';
import { artistType } from '@type/artist';
import { checkEmpty } from './__lib__';

describe('data', () => {
  test('must not be empty', () => {
    let countEmptyArtistName: number = 0;
    let countEmptyArtistPhoto: number = 0;

    artists.map((artist: artistType) => {
      countEmptyArtistName += checkEmpty<string, string>(artist.name, '');
      countEmptyArtistPhoto += checkEmpty<string, string>(
        artist.profile_photo,
        '',
      );
    });

    expect(countEmptyArtistName).toEqual(0);
    expect(countEmptyArtistPhoto).toEqual(0);
  });

  test('photo format must be webp', () => {
    let countWrongExtPhoto: number = 0;

    artists.map((artist: artistType) => {
      const getExtPhoto: string = artist.profile_photo.split('.')[1];
      countWrongExtPhoto += checkEmpty<boolean, boolean>(
        getExtPhoto === 'webp',
        false,
      );
    });

    expect(countWrongExtPhoto).toEqual(0);
  });
});

describe('service', () => {
  test('get artist by name', () => {
    expect(JSON.stringify(getArtistByName('One Voice'))).toBe(
      JSON.stringify({
        name: 'One Voice',
        profile_photo: 'one-voice.webp',
      }),
    );
  });

  test('empty result get artist by name', () => {
    expect(JSON.stringify(getArtistByName('Yawwi'))).toBe(
      JSON.stringify({
        name: '',
        profile_photo: '',
      }),
    );
  });
});
