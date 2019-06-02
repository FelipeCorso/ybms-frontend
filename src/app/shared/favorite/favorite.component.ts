import {Component, Input, OnInit} from '@angular/core';
import {MovieSerieDto} from "../../core/entities/movie-serie-dto";
import {FavoritesService, Operation} from "../../features/favorites/favorites.service";
import {MediaType} from "../../core/enums/media-type";
import {TabListService} from "../tab-list/tab-list.service";

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  @Input() item: MovieSerieDto;
  private activeTab: MediaType;

  constructor(private favoritesService: FavoritesService, private tabListService: TabListService) {

  }

  ngOnInit() {
    this.tabListService.onChange()
      .subscribe((mediaType: MediaType) => this.activeTab = mediaType);
  }

  onClickFavorite(): void {
    this.item.favorite = !this.item.favorite;
    const operation: Operation = this.item.favorite ? Operation.ADD : Operation.REMOVE;
    this.favoritesService.addRemoveItemToFavorites(this.item, this.activeTab, operation);
    this.favoritesService.loadFavorites();
  }
}
