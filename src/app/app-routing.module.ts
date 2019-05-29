import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FavoritesComponent} from './features/favorites/favorites.component';
import {HomeComponent} from './features/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    resolve: {}
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    resolve: {}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
