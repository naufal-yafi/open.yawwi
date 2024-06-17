import musics from '@data/music.data';
import { describe, expect, test } from '@jest/globals';
import {
  getMinuteSecondDurationMusic,
  getCountDuration,
  getMusicByTitle,
} from '@service/music-service';
import {
  mapWrongFormatCheckType,
  mapEmptyCheckType,
  mapWrongCheckType,
} from './__types__';
import {
  mapEmptyCheck,
  mapWrongCheck,
  mapWrongFormatCheck,
} from './__function__';

describe('data', () => {
  test('must not be empty', () => {
    const jpop: mapEmptyCheckType = mapEmptyCheck(musics.jpop);

    expect(jpop.countEmptyTitle).toEqual(0);
    expect(jpop.countEmptyArtist).toEqual(0);
    expect(jpop.countEmptyNameFile).toEqual(0);
    expect(jpop.countEmptyImageAlbum).toEqual(0);
  });

  test('minutes and seconds format must be correct', () => {
    const jpop: mapWrongCheckType = mapWrongCheck(musics.jpop);

    expect(jpop.countWrongMinuteDuration).toEqual(0);
    expect(jpop.countWrongSecondDuration).toEqual(0);
  });

  test('photo and name file format must be mp3', () => {
    const jpop: mapWrongFormatCheckType = mapWrongFormatCheck(musics.jpop);

    expect(jpop.countWrongExtPhoto).toEqual(0);
    expect(jpop.countWrongExtNameFile).toEqual(0);
  });
});

describe('service', () => {
  test('get music by title', () => {
    expect(getMusicByTitle('Anone').title).toEqual('Anone');
    expect(getMusicByTitle('Aoboshi').title).toEqual('Aoboshi');
  });

  test('empty result get music by title', () => {
    expect(getMusicByTitle('asimilikiti').title).toEqual('');
  });

  test('get count duration', () => {
    expect(JSON.stringify(getCountDuration(60, 0))).toBe(
      JSON.stringify({
        hour: 1,
        minute: 0,
      }),
    );
    expect(JSON.stringify(getCountDuration(0, 60))).toBe(
      JSON.stringify({
        hour: 0,
        minute: 1,
      }),
    );

    const jpop = getMinuteSecondDurationMusic(musics.jpop);
    const lofi = getMinuteSecondDurationMusic(musics.lofi);

    expect(JSON.stringify(getCountDuration(jpop.minutes, jpop.seconds))).toBe(
      JSON.stringify({
        hour: 3,
        minute: 54,
      }),
    );
    expect(JSON.stringify(getCountDuration(lofi.minutes, lofi.seconds))).toBe(
      JSON.stringify({
        hour: 1,
        minute: 4,
      }),
    );
  });
});
