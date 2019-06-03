export interface MovieSerieDto {
  favorite?: boolean;
  poster_path?: string;
  adult?: boolean;
  overview?: string;
  release_date?: string;
  genre_ids?: number[];
  id?: number;
  original_title?: string;
  original_language?: string;
  title?: string;
  backdrop_path?: string;
  popularity?: number;
  vote_count?: number;
  video?: boolean;
  vote_average?: number;
  belongs_to_collection?: any;
  budget?: number;
  imdb_id?: string;
  production_countries?: any[];
  revenue?: number;
  runtime?: number;
  spoken_languages?: any[];
  tagline?: string;

  // Series fields
  first_air_date?: string;
  name?: string;
  origin_country?: string[];
  original_name?: string;
  created_by?: any[];
  episode_run_time?: number[];
  genres?: any[];
  homepage?: string;
  in_production?: boolean;
  languages?: string[];
  last_air_date?: string;
  last_episode_to_air?: any;
  next_episode_to_air?: any;
  networks?: any[];
  number_of_episodes?: number;
  number_of_seasons?: number;
  production_companies?: any[];
  seasons?: any[];
  status?: string;
  type?: string;
}
