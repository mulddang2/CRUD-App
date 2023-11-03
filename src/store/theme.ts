import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({ key: 'isDarkMode' });

export const isDarkModeState = atom<boolean>({
  key: 'isDarkMode',
  default: false,
  effects: [persistAtom],
});
