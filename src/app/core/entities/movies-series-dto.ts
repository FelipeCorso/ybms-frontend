import {MovieSerieDto} from "./movie-serie-dto";

export interface MoviesSeriesDto {
  movies: MediaTypeDto;
  series: MediaTypeDto;
}

export interface MediaTypeDto {
  page?: number;
  results: MovieSerieDto[];
  total_results?: number;
}
