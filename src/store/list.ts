import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { PlayListItem } from '../types/playListItem';

const { persistAtom } = recoilPersist({ key: 'list' });

export const listState = atom<PlayListItem[]>({
  key: 'myPlayList',
  default: [
    {
      id: 1,
      title: `6 Klavierstücke, Op. 15: No. 1, Serenata`,
      artist: 'Stephen Hough',
    },
    {
      id: 2,
      title: 'L’Amour, Les Baguettes, Paris',
      artist: 'Stella Jang',
    },
    {
      id: 3,
      title: 'William Bolcom: Graceful Ghost Rag',
      artist: '양인모',
    },
  ],
  effects: [persistAtom],
});

export const selectedItemIdState = atom<number | null>({
  key: 'selectedItemId',
  default: null,
});
