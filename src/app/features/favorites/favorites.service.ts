import {EventEmitter, Injectable, Output} from '@angular/core';
import {MovieSerieDto} from "../../core/entities/movie-serie-dto";
import {MediaType} from "../../core/enums/media-type";
import {MediaTypeDto, MoviesSeriesDto} from "../../core/entities/movies-series-dto";
import {SelectedTab} from "../../shared/tab-list/tab-list.component";

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {
  @Output()
  private favoritesChange: EventEmitter<SelectedTab> = new EventEmitter();

  private ybmsFavoritesKey: string = "ybmsFavoritesKey";

  constructor() {
  }

  loadFavorites(): void {
    this.favoritesChange.emit();
  }

  onFavoritesChange() {
    return this.favoritesChange;
  }

  getFavorites(): MoviesSeriesDto {
    let ybmsFavorites: string = localStorage.getItem(this.ybmsFavoritesKey);
    if (ybmsFavorites) {
      return JSON.parse(ybmsFavorites);
    }
    this.createFavoritesStorage();
    return this.getFavorites();
  }

  addRemoveItemToFavorites(item: MovieSerieDto, mediaType: MediaType, operation: Operation) {
    let ybmsFavorites: MoviesSeriesDto = this.getFavorites();
    switch (mediaType) {
      case MediaType.MOVIE:
        this.addRemoveItem(ybmsFavorites.movies.results, operation, item);
        break;
      case MediaType.SERIE:
        ybmsFavorites.series.results = this.addRemoveItem(ybmsFavorites.series.results, operation, item);
        break;
    }
    this.setFavorites(ybmsFavorites);
  }

  private addRemoveItem(results: MovieSerieDto[], operation: Operation, item: MovieSerieDto): MovieSerieDto[] {
    switch (operation) {
      case Operation.ADD:
        results.push(item);
        break;

      case Operation.REMOVE:
        results = this.removeItemFromFavorites(results, item);
        break;
    }
    return results;
  }

  private removeItemFromFavorites(results: MovieSerieDto[], item: MovieSerieDto): MovieSerieDto[] {
    return results.filter((favorite: MovieSerieDto) => favorite.id !== item.id);
  }

  private setFavorites(ybmsFavorites: MoviesSeriesDto) {
    localStorage.setItem(this.ybmsFavoritesKey, JSON.stringify(ybmsFavorites));
  }

  private createFavoritesStorage(): void {
    const mediaTypeDto: MediaTypeDto = {page: 1, results: []};
    let ybmsFavorites: MoviesSeriesDto = {movies: mediaTypeDto, series: mediaTypeDto};
    this.setFavorites(ybmsFavorites);
  }
}

export enum Operation {
  ADD, REMOVE
}
