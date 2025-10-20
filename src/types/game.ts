// src/types/game.ts

export type PlatformInfo = {
  id: number;
  name: string;
  slug: string;
};

export type Platform = {
  platform: PlatformInfo;
};

export type StoreInfo = {
  id: number;
  name: string;
  slug: string;
};

export type Store = {
  store: StoreInfo;
};

export type Rating = {
  id: number;
  title: string;
  count: number;
  percent: number;
};

export type AddedByStatus = {
  yet: number;
  owned: number;
  beaten: number;
  toplay: number;
  dropped: number;
  playing: number;
};

export type Tag = {
  id: number;
  name: string;
  slug: string;
  language: string;
  games_count: number;
  image_background: string;
};

export type Screenshot = {
  id: number;
  image: string;
};

export type ESRBRating = {
  id: number;
  name: string;
  slug: string;
};

export type Genre = {
  id: number;
  name: string;
  slug: string;
};

export type ParentPlatform = {
  platform: PlatformInfo;
};

export type Game = {
  id: number;
  slug: string;
  name: string;
  playtime: number;
  background_image: string;
  released: string;
  tba: boolean;
  rating: number;
  rating_top: number;
  ratings: Rating[];
  ratings_count: number;
  reviews_text_count: number;
  added: number;
  added_by_status: AddedByStatus;
  metacritic: number | null;
  suggestions_count: number;
  updated: string;
  score: number | null;
  clip: string | null;
  tags: Tag[];
  esrb_rating: ESRBRating | null;
  user_game: any;
  reviews_count: number;
  saturated_color: string;
  dominant_color: string;
  description_raw: string;
  short_screenshots: Screenshot[];
  genres: Genre[];
  platforms: Platform[];
  parent_platforms: ParentPlatform[];
  stores: Store[];
};
