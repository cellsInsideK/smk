export interface SearchMovie {
  docs: Doc[];
  total: number;
  limit: number;
  page: number;
  pages: number;
}

export interface Doc {
  id: number;
  name: string;
  alternativeName: string;
  enName: string;
  type: string;
  year: number;
  description: string;
  shortDescription: string;
  movieLength: number;
  names: Name[];
  externalId: ExternalId;
  logo: Logo;
  poster: Poster;
  backdrop: Backdrop;
  rating: Rating;
  votes: Votes;
  genres: Genre[];
  countries: Country[];
  releaseYears: ReleaseYear[];
  isSeries: boolean;
  ticketsOnSale: boolean;
  totalSeriesLength: number;
  seriesLength: number;
  ratingMpaa: string;
  ageRating: number;
  top10: number;
  top250: number;
  typeNumber: number;
  status: string;
  internalNames: string[];
  internalRating: number;
  internalVotes: number;
}

export interface Name {
  name: string;
  language: string;
  type: string;
}

export interface ExternalId {
  kpHD: string;
  imdb: string;
  tmdb: number;
}

export interface Logo {
  url: string;
}

export interface Poster {
  url: string;
  previewUrl: string;
}

export interface Backdrop {
  url: string;
  previewUrl: string;
}

export interface Rating {
  kp: number;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Votes {
  kp: string;
  imdb: number;
  tmdb: number;
  filmCritics: number;
  russianFilmCritics: number;
  await: number;
}

export interface Genre {
  name: string;
}

export interface Country {
  name: string;
}

export interface ReleaseYear {
  start: number;
  end: number;
}
