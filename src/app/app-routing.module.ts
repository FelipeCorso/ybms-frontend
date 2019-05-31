import {Injectable, NgModule} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterModule, Routes} from '@angular/router';

import {AboutComponent} from "./features/about/about.component";
import {FavoritesComponent} from "./features/favorites/favorites.component";
import {HomeComponent} from "./features/home/home.component";
import {MediaService} from "./core/services/media.service";
import {forkJoin, Observable} from "rxjs";
import {MediaType} from "./core/enums/media-type";
import {map} from "rxjs/operators";
import {MoviesSeriesDetailsComponent} from "./features/movies-series-details/movies-series-details.component";
import {MediaTypeDto} from "./core/entities/movies-series-dto";
import {FavoritesService} from "./features/favorites/favorites.service";

@Injectable({
  providedIn: 'root'
})
export class MediaTrendingResolver implements Resolve<any> {
  constructor(private mediaService: MediaService) {
  }

  public resolve() {
    return forkJoin<Observable<MediaTypeDto>, Observable<MediaTypeDto>>([this.mediaService.getMediaTrending(), this.mediaService.getMediaTrending(MediaType.SERIE)])
      .pipe(map(response => {
        if (response) {
          return {movies: response[0], series: response[1]};
        }
        return {};
      }))
  }
}

@Injectable({
  providedIn: 'root'
})
export class FavoritesResolver implements Resolve<any> {
  constructor(private favoritesService: FavoritesService, private mediaService: MediaService) {
  }

  public resolve() {
    const ybmsFavorites = this.favoritesService.getFavorites();
    if (ybmsFavorites) return ybmsFavorites;

    const ybmsDefaultFavorites = this.favoritesService.getDefaultFavorites();

    const movies = ybmsDefaultFavorites.movies.results.map((defaultFavorite) => {
      return this.mediaService.getMovieById(defaultFavorite.id);
    });
    const series = ybmsDefaultFavorites.series.results.map((defaultFavorite) => {
      return this.mediaService.getSeriesById(defaultFavorite.id);
    });

    const moviesObserver = new Observable((observer) => {
      forkJoin(movies)
        .subscribe((response) => {
          observer.next(response);
          observer.complete();
        });
    });

    const seriesObserver = new Observable((observer) => {
      forkJoin(series)
        .subscribe((response) => {
          observer.next(response);
          observer.complete();
        });
    });

    return new Observable((observer) => {
      forkJoin<any, any>([moviesObserver, seriesObserver])
        .subscribe(response => {
          observer.next({movies: {results: response[0]}, series: {results: response[1]}});
          observer.complete();
        });
    });
  }
}

@Injectable({
  providedIn: 'root'
})
export class MoviesSeriesDetailsResolver implements Resolve<any> {
  constructor(private mediaService: MediaService) {
  }

  public resolve(route: ActivatedRouteSnapshot) {
    switch (route.params.mediaType) {
      case MediaType.MOVIE:
        return this.mediaService.getMovieById(route.params.id);
      case MediaType.SERIE:
        return this.mediaService.getSeriesById(route.params.id);
    }
  }
}

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {
    path: 'home',
    component: HomeComponent,
    resolve: {
      mediaTrending: MediaTrendingResolver
    }
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    resolve: {
      favorites: FavoritesResolver
    }
  },
  {
    path: 'details/:mediaType/:id',
    component: MoviesSeriesDetailsComponent,
    resolve: {
      entity: MoviesSeriesDetailsResolver
    }
  },
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
