import {Component, Input, OnInit} from '@angular/core';
import {MovieSerieDto} from '../../../../core/entities/movie-serie-dto';
import {SidebarService} from '../../../sidebar/sidebar.service';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() item: MovieSerieDto;

  constructor(private sidebarService: SidebarService) {
  }

  ngOnInit() {
  }

  onClickItem(): void {
    this.sidebarService.show(this.item);
  }

  onClickFavorite(): void {
    this.item.favorite = !this.item.favorite;
  }

}
