import playlists from '@data/playlist.data';
import { describe, expect, test } from '@jest/globals';
import { PlaylistType } from '@type/playlist';
import { checkEmpty } from './__lib__';
import { getPlaylistByName } from '@service/playlist-service';

describe('data', () => {
  test('must not be empty data', () => {
    let countEmptyUuid: number = 0,
      countEmptyGenre: number = 0,
      countEmptyName: number = 0,
      countEmptyMusic: number = 0;

    playlists.map((playlist: PlaylistType) => {
      countEmptyUuid += checkEmpty<string, string>(playlist.uuid, '');
      countEmptyGenre += checkEmpty<string, string>(playlist.genre.name, '');
      countEmptyGenre += checkEmpty<string, string>(playlist.genre.path, '');
      countEmptyName += checkEmpty<string, string>(playlist.name, '');
      countEmptyMusic += checkEmpty<boolean, boolean>(
        playlist.musics.length > 0,
        false,
      );
    });

    expect(countEmptyUuid).toEqual(0);
    expect(countEmptyGenre).toEqual(0);
    expect(countEmptyName).toEqual(0);
    expect(countEmptyMusic).toEqual(0);
  });

  test('id must be sequential', () => {
    let countWrongId: number = 0;

    playlists.map((playlist: PlaylistType, index: number) => {
      countWrongId += checkEmpty(playlist.id === index, false);
    });

    expect(countWrongId).toEqual(0);
  });
});

describe('service', () => {
  test('passed case: get playlist by name', () => {
    expect(getPlaylistByName('Favorite').uuid).toEqual('asd');
  });

  test('error case: empty result get playlist by name', () => {
    expect(getPlaylistByName('Pop').uuid).toEqual('');
  });
});
