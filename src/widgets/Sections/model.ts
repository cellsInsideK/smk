/* eslint-disable @typescript-eslint/no-explicit-any */
export interface NewFilm {
  docs: Doc[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface Doc {
  externalId: ExternalId;
  rating: Rating;
  votes: Votes;
  movieLength: number;
  id: number;
  type: string;
  name: string;
  description: string;
  year: number;
  poster: Poster;
  genres: Genre[];
  countries: Country[];
  alternativeName?: string;
  enName: any;
  names: Name[];
  shortDescription?: string;
  logo: Logo;
  watchability: Watchability;
  releaseYears?: any[];
}

export interface ExternalId {
  kpHD?: string;
  imdb?: string;
  tmdb?: number;
}

export interface Rating {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: any;
}

export interface Votes {
  kp: number;
  imdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Poster {
  url: string;
  previewUrl: string;
}

export interface Genre {
  name: string;
}

export interface Country {
  name: string;
}

export interface Name {
  name: string;
  language?: string;
  type?: string;
}

export interface Logo {
  url?: string;
}

export interface Watchability {
  items: Item[];
}

export interface Item {
  name: string;
  logo: Logo2;
  url: string;
}

export interface Logo2 {
  url: string;
}
