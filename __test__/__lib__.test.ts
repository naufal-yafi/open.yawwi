import { describe, expect, test } from '@jest/globals';
import { checkEmpty, getListFile, checkFile, checkFolder } from './__lib__';

describe('check empty', () => {
  test('true condition', () => {
    expect(checkEmpty<string, string>('not empty', '')).toBe(0);
  });

  test('false condition', () => {
    expect(checkEmpty<string, string>('', '')).toBe(1);
  });
});

describe('get list file', () => {
  test('error case', () => {
    expect(() => getListFile('asdasd')).toThrowError(
      'ENOENT: no such file or directory',
    );
  });

  test('check music favorite', () => {
    expect(JSON.stringify(getListFile('./public/music/favorite'))).toBe(
      JSON.stringify([
        'ame-to-cappuccino_yorushika.mp3',
        'ano-yume-wo-nazotte_yoasobi.mp3',
        'anone_arekun-and-yuika.mp3',
        'aoboshi_703goushitsu.mp3',
        'itte_yorushika.mp3',
        'rokudenashi_one-voice.mp3',
        'sniper_yuika.mp3',
        'spring-thief_yorushika.mp3',
        'tabun_yoasobi.mp3',
        'tomodachimiman-koibitomiman_703goushitsu.mp3',
        'without-knowing_mimi.mp3',
      ]),
    );
  });

  test('check music lofi', () => {
    expect(JSON.stringify(getListFile('./public/music/lofi'))).toBe(
      JSON.stringify([
        'death-bed_powfu.mp3',
        'love-of-my-life_omgkirby.mp3',
        'yellow_lofi-fruits-music.mp3',
      ]),
    );
  });
});

describe('check file', () => {
  test('passed case', () => {
    expect(checkFile('death-bed_powfu.mp3', './public/music/lofi')).toEqual(
      true,
    );
  });

  test('error case', () => {
    expect(checkFile('123.mp3', './public/music/lofi')).toEqual(false);
  });
});

describe('check folder', () => {
  test('passed case', () => {
    expect(checkFolder('./public/images')).toEqual(true);
  });

  test('error case', () => {
    expect(checkFolder('./risoto')).toEqual(false);
  });
});
