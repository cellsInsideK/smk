/* eslint-disable @typescript-eslint/no-explicit-any */
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
  names: string[];
  type: string;
  year: number;
  description: string;
  shortDescription: string;
  logo: string;
  poster: string;
  backdrop: string;
  rating: number;
  votes: number;
  movieLength: number;
  genres: string[];
  countries: string[];
  releaseYears: any[];
}
