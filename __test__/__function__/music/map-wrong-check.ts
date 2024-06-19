import { MusicType } from '@type/music';
import { checkEmpty } from '__test__/__lib__';
import { mapWrongCheckType } from '__test__/__types__';

export function mapWrongCheck(musics: MusicType[]): mapWrongCheckType {
  let countWrongMinuteDuration: number = 0,
    countWrongSecondDuration: number = 0;

  musics.map((music: MusicType) => {
    countWrongMinuteDuration += checkEmpty<boolean, boolean>(
      music.minute_duration > 0 && music.minute_duration <= 60,
      false,
    );
    countWrongSecondDuration += checkEmpty<boolean, boolean>(
      music.second_duration > 0 && music.second_duration <= 60,
      false,
    );
  });

  return {
    countWrongMinuteDuration,
    countWrongSecondDuration,
  };
}
