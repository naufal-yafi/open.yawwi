import musics from '@data/music.data';
import { MusicType } from '@type/music';

export function getMusicByTitle(title: string): MusicType {
  const remapping: MusicType[] = [];

  musics.jpop.map((music: MusicType) => {
    remapping.push(music);
  });
  musics.lofi.map((music: MusicType) => {
    remapping.push(music);
  });

  return (
    remapping.find((music: MusicType) => music.title === title) || {
      title: '',
      artists: [
        {
          name: '',
          profile_photo: '',
        },
      ],
      name_file: '',
      image_album: '',
      minute_duration: 0,
      second_duration: 0,
    }
  );
}

export function getMinuteSecondDurationMusic(musics: MusicType[]): {
  minutes: number;
  seconds: number;
} {
  let minutes: number = 0,
    seconds: number = 0;

  musics.map((music: MusicType) => {
    seconds += music.second_duration;
    minutes += music.minute_duration;
  });

  return {
    minutes,
    seconds,
  };
}

export function getCountDuration(
  minute: number,
  second: number,
): { hour: number; minute: number } {
  const minutes: number = minute;
  const seconds: number = second;

  const result = minutes + seconds / 60;

  return {
    hour: Math.floor(result / 60),
    minute: Math.ceil(result % 60),
  };
}
