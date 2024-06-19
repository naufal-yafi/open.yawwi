import { MusicType } from '@type/music';
import { checkEmpty } from '__test__/__lib__';
import { mapWrongFormatCheckType } from '__test__/__types__';

export function mapWrongFormatCheck(
  musics: MusicType[],
): mapWrongFormatCheckType {
  let countWrongExtPhoto: number = 0,
    countWrongExtNameFile: number = 0;

  musics.map((music: MusicType) => {
    const getExtPhoto: string = music.image_album.split('.')[1];
    const getExtFile: string = music.name_file.split('.')[1];

    countWrongExtPhoto += checkEmpty<boolean, boolean>(
      getExtPhoto === 'webp',
      false,
    );

    countWrongExtNameFile += checkEmpty<boolean, boolean>(
      getExtFile === 'mp3',
      false,
    );
  });

  return { countWrongExtPhoto, countWrongExtNameFile };
}
