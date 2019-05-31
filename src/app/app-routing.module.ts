import {Injectable, NgModule} from '@angular/core';
import {Resolve, RouterModule, Routes} from '@angular/router';

import {AboutComponent} from "./features/about/about.component";
import {FavoritesComponent} from "./features/favorites/favorites.component";
import {HomeComponent} from "./features/home/home.component";
import {MediaService} from "./core/services/media.service";
import {forkJoin} from "rxjs";
import {MediaType} from "./core/enums/media-type";
import {map} from "rxjs/operators";
import {MoviesSeriesDetailsComponent} from "./features/movies-series-details/movies-series-details.component";

@Injectable({
  providedIn: 'root'
})
export class MediaTrendingResolver implements Resolve<any> {
  constructor(private mediaService: MediaService) {
  }

  public resolve() {
    return forkJoin([this.mediaService.getMediaTrending(), this.mediaService.getMediaTrending(MediaType.SERIE)])
      .pipe(map(response => {
        if (response) {
          return {movies: response[0], series: response[1]};
        }
        return {};
      }))
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
  { path: 'favorites', component: FavoritesComponent },
  { path: 'details/:id', component: MoviesSeriesDetailsComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
