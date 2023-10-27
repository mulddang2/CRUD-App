export interface IBasePlayList {
  title: string;
  artist: string;
}

export interface IPlayList extends IBasePlayList {
  id: number | null;
}
