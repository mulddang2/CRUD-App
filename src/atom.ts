import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { IPlayList } from './interface';

const { persistAtom } = recoilPersist();

export const listState = atom<IPlayList[]>({
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

export const editListState = atom<IPlayList>({
  key: 'editList',
  default: { title: '', artist: '', id: null },
});

export const editingState = atom<boolean>({
  key: 'editing',
  default: false,
});
