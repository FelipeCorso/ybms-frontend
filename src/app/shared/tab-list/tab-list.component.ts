import {Component, Input, OnInit} from '@angular/core';
import {MovieSerieDto} from "../../core/entities/movie-serie-dto";

@Component({
  selector: 'tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.scss']
})
export class TabListComponent implements OnInit {

  @Input() data: any;

  activeTabView: number;
  items: MovieSerieDto[];

  constructor() {
  }

  ngOnInit() {
  }

  onTabChange(event: any) {
    this.activeTabView = event.index;
    switch (this.activeTabView) {
      case SelectedTab.MOVIES:
        this.items = this.data.movies;
        break;
      case SelectedTab.SERIES:
        this.items = this.data.series;
        break;
    }
  }
}

enum SelectedTab {
  MOVIES, SERIES
}
