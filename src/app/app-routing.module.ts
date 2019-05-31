import {Injectable, NgModule} from '@angular/core';
import {Resolve, RouterModule, Routes} from '@angular/router';

import {AboutComponent} from "./features/about/about.component";
import {FavoritesComponent} from "./features/favorites/favorites.component";
import {HomeComponent} from "./features/home/home.component";
import {MediaService} from "./core/services/media.service";
import {forkJoin, Observable} from "rxjs";
import {MediaType} from "./core/enums/media-type";
import {map} from "rxjs/operators";
import {MoviesSeriesDetailsComponent} from "./features/movies-series-details/movies-series-details.component";
import {MediaTypeDto, MoviesSeriesDto} from "./core/entities/movies-series-dto";
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
    return this.favoritesService.getFavorites();
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
  {path: 'details/:id', component: MoviesSeriesDetailsComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
