import { MusicType } from '@type/music';
import { getArtistByName } from '@service/artist-service';

interface MusicGenreType {
  jpop: MusicType[];
  lofi: MusicType[];
}

const musics: MusicGenreType = {
  jpop: [
    {
      title: 'Ame To Cappuccino',
      artists: [getArtistByName('Yorushika')],
      name_file: 'ame-to-cappuccino_yorushika.mp3',
      image_album: 'ame-to-cappuccino.webp',
      minute_duration: 21,
      second_duration: 12,
    },
    {
      title: 'Ano Yume Wo Nazotte',
      artists: [getArtistByName('Yoasobi')],
      name_file: 'ano-yume-wo-nazotte_yoasobi.mp3',
      image_album: 'ano-tume-wo-nazotte.webp',
      minute_duration: 21,
      second_duration: 12,
    },
    {
      title: 'Anone',
      artists: [getArtistByName('Arekun'), getArtistByName('Yuika')],
      name_file: 'anone_arekun-and-yuika.mp3',
      image_album: 'anone.webp',
      minute_duration: 21,
      second_duration: 12,
    },
    {
      title: 'Aoboshi',
      artists: [getArtistByName('703goushitsu')],
      name_file: 'aoboshi_703goushitsu.mp3',
      image_album: 'aoboshi.webp',
      minute_duration: 21,
      second_duration: 12,
    },
    {
      title: 'Itte',
      artists: [getArtistByName('Yorushika')],
      name_file: 'itte_yorushika.mp3',
      image_album: 'itte.webp',
      minute_duration: 21,
      second_duration: 12,
    },
    {
      title: 'Rokudenashi',
      artists: [getArtistByName('One Voice')],
      name_file: 'rokudenashi_one-voice.mp3',
      image_album: 'rokudenashi.webp',
      minute_duration: 21,
      second_duration: 12,
    },
    {
      title: 'Sniper',
      artists: [getArtistByName('Yuika')],
      name_file: 'sniper_yuika.mp3',
      image_album: 'sniper.webp',
      minute_duration: 21,
      second_duration: 12,
    },
    {
      title: 'Spring Thief',
      artists: [getArtistByName('Yorushika')],
      name_file: 'spring-thief_yorushika.mp3',
      image_album: 'spring-thief.webp',
      minute_duration: 21,
      second_duration: 12,
    },
    {
      title: 'Tabun',
      artists: [getArtistByName('Yoasobi')],
      name_file: 'tabun_yoasobi.mp3',
      image_album: 'tabun.webp',
      minute_duration: 21,
      second_duration: 12,
    },
    {
      title: 'Tomodachimiman Koibitomiman',
      artists: [getArtistByName('703goushitsu')],
      name_file: 'tomodachimiman-koibitomiman_703goushitsu.mp3',
      image_album: 'tomodachimiman-koitomiman.webp',
      minute_duration: 21,
      second_duration: 12,
    },
    {
      title: 'Without Knowing',
      artists: [getArtistByName('Mimi')],
      name_file: 'without-knowing_mimi.mp3',
      image_album: 'without-knowing.webp',
      minute_duration: 21,
      second_duration: 12,
    },
  ],
  lofi: [
    {
      title: 'Death Bed',
      artists: [getArtistByName('Powfu')],
      name_file: 'death-bed_powfu.mp3',
      image_album: 'death-bed.webp',
      minute_duration: 21,
      second_duration: 12,
    },
    {
      title: 'Love of My Life',
      artists: [getArtistByName('Omgkirby')],
      name_file: 'love-of-my-life_omgkirby.mp3',
      image_album: 'love-of-my-life.webp',
      minute_duration: 21,
      second_duration: 12,
    },
    {
      title: 'Yellow',
      artists: [getArtistByName('Lofi Fruits Music')],
      name_file: 'yellow_lofi-fruits-music.mp3',
      image_album: 'yellow.webp',
      minute_duration: 21,
      second_duration: 12,
    },
  ],
};

export default musics;
