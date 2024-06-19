import users from '@data/user.data';
import { describe, expect, test } from '@jest/globals';
import { checkFile, checkFolder } from './__lib__';

describe('data', () => {
  test('should have right content', () => {
    expect(users.name).toEqual('yawwi');
    expect(users.profile_photo).toEqual(
      '/images/webps/account_profile/yawwi.webp',
    );
    expect(users.artist_profile_photo_path).toEqual('/images/webps/artist');
    expect(users.music_path).toEqual('/music');
    expect(users.playlists.length > 0).toBe(true);
  });

  test('file and folder must be available', () => {
    let countNotAvailable: number = 0;

    const folderProfile: string = users.profile_photo.substring(0, 29);
    const fileName: string = users.profile_photo.substring(30, 40);

    const paths: {
      type: 'file' | 'folder';
      folder: string;
      file_name?: string;
    }[] = [
      {
        type: 'file',
        folder: `./public/${folderProfile}`,
        file_name: fileName,
      },
      {
        type: 'folder',
        folder: `./public${folderProfile}`,
      },
      {
        type: 'folder',
        folder: `./public${users.artist_profile_photo_path}`,
      },
      {
        type: 'folder',
        folder: `./public${users.music_path}`,
      },
    ];

    paths.map((path) => {
      if (
        path.type === 'file' &&
        !checkFile(path.file_name || '', path.folder)
      ) {
        countNotAvailable++;
      }

      if (path.type === 'folder' && !checkFolder(path.folder)) {
        countNotAvailable++;
      }
    });

    expect(countNotAvailable).toEqual(0);
  });
});
