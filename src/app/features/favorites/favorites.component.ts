import {Component, OnInit} from '@angular/core';
import {FavoritesService} from "./favorites.service";

@Component({
  selector: 'ybms-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  data: any = {};

  constructor(private favoritesService: FavoritesService) {
  }

  ngOnInit() {
    this.favoritesService.onFavoritesChange()
      .subscribe(() => this.loadFavorites());

    this.loadFavorites();
  }

  private loadFavorites() {
    this.data = this.favoritesService.getFavorites();
  }
}
