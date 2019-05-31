import {MoviesSeriesDto} from "../../core/entities/movies-series-dto";

export const FAVORITES: MoviesSeriesDto = {
  movies: {
    results: [
      {
        "original_title": "The Pursuit of Happyness",
        "id": 1402
      },
      {
        "original_title": "Facing the Giants",
        "id": 18925
      }
    ]
  },
  series: {
    results: [
      {
        "original_name": "The Simpsons",
        "id": 456
      },
      {
        "original_name": "Everybody Hates Chris",
        "id": 252
      }]
  }
};
