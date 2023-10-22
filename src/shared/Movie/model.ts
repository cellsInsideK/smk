/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface MovieInterface {
  fees: Fees;
  status: any;
  externalId: ExternalId;
  rating: Rating;
  votes: Votes;
  backdrop: Backdrop;
  movieLength: number;
  images: Images;
  productionCompanies: ProductionCompany[];
  spokenLanguages: SpokenLanguage[];
  id: number;
  type: string;
  name: string;
  description: string;
  distributors: Distributors;
  premiere: Premiere;
  slogan: any;
  year: number;
  poster: Poster;
  facts: Fact[];
  genres: Genre[];
  countries: Country[];
  videos: Videos;
  seasonsInfo: any[];
  persons: Person[];
  lists: any[];
  typeNumber: number;
  alternativeName: string;
  enName: string;
  names: Name[];
  ageRating: number;
  budget: Budget;
  ratingMpaa: string;
  updateDates: any[];
  imagesInfo: ImagesInfo;
  updatedAt: string;
  similarMovies: SimilarMovy[];
  sequelsAndPrequels: any[];
  shortDescription: any;
  technology: Technology;
  ticketsOnSale: boolean;
  logo: Logo;
  watchability: Watchability;
  top10: any;
  top250: any;
  deletedAt: any;
  isSeries: boolean;
  seriesLength: any;
  totalSeriesLength: any;
}

export interface Fees {
  world: World;
  russia: Russia;
  usa: Usa;
}

export interface World {
  value: number;
  currency: string;
}

export interface Russia {
  value: number;
  currency: string;
}

export interface Usa {
  value: number;
  currency: string;
}

export interface ExternalId {
  kpHD: string;
  imdb: string;
  tmdb: number;
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

export interface Backdrop {
  url: string;
  previewUrl: string;
}

export interface Images {
  framesCount: number;
}

export interface ProductionCompany {
  name: string;
  url: string;
  previewUrl: string;
}

export interface SpokenLanguage {
  name: string;
  nameEn: string;
}

export interface Distributors {
  distributor: string;
  distributorRelease: any;
}

export interface Premiere {
  world: string;
  russia: string;
}

export interface Poster {
  url: string;
  previewUrl: string;
}

export interface Fact {
  value: string;
  type: string;
  spoiler: boolean;
}

export interface Genre {
  name: string;
}

export interface Country {
  name: string;
}

export interface Videos {
  trailers: Trailer[];
  teasers: any[];
}

export interface Trailer {
  url: string;
  name: string;
  site: string;
  type: string;
}

export interface Person {
  id: number;
  photo: string;
  name: string;
  enName: string;
  description?: string;
  profession: string;
  enProfession: string;
}

export interface Name {
  name: string;
  language?: string;
  type?: string;
}

export interface Budget {}

export interface ImagesInfo {
  framesCount: number;
}

export interface SimilarMovy {
  id: number;
  name: string;
  enName: any;
  alternativeName: string;
  type: string;
  poster: Poster2;
}

export interface Poster2 {
  url: string;
  previewUrl: string;
}

export interface Technology {
  hasImax: boolean;
  has3D: boolean;
}

export interface Logo {
  url: any;
}

export interface Watchability {
  items: any[];
}
