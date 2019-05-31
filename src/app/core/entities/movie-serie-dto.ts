export interface MovieSerieDto {
  favorite: boolean;
  poster_path?: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path?: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;

  // Series fields
  first_air_date: string;
  name: string;
  origin_country: string[];
  original_name: string;
}
