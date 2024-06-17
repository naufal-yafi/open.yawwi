import users from '@data/user.data';
import { describe, expect, test } from '@jest/globals';

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
});
