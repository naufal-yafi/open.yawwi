import { MusicType } from "@type/music";
import { checkEmpty } from "__test__/__lib__";

export function mapEmptyCheck(musics: MusicType[]) {
  let countEmptyTitle: number = 0,
    countEmptyArtist: number = 0,
    countEmptyNameFile: number = 0,
    countEmptyImageAlbum: number = 0;

  musics.map((music: MusicType) => {
    countEmptyTitle += checkEmpty<string, string>(music.title, '');
    countEmptyArtist += checkEmpty<boolean, boolean>(
      music.artists.length > 0,
      false,
    );
    countEmptyNameFile += checkEmpty<string, string>(music.name_file, '');
    countEmptyImageAlbum += checkEmpty<string, string>(music.image_album, '');
  });

  return {
    countEmptyTitle,
    countEmptyArtist,
    countEmptyNameFile,
    countEmptyImageAlbum,
  };
}
