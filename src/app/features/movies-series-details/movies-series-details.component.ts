import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieSerieDto} from "../../core/entities/movie-serie-dto";

@Component({
  selector: 'app-movies-series-details',
  templateUrl: './movies-series-details.component.html',
  styleUrls: ['./movies-series-details.component.scss']
})
export class MoviesSeriesDetailsComponent implements OnInit {
  item: MovieSerieDto;

  constructor(private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data: any) => this.onRouteDataChange(data));
  }

  onTabChange(event: any) {
    // this.activeTabView = event.index;
  }

  private onRouteDataChange(data: any): void {
    if (data && data.entity) {
      this.item = data.entity;
    }
  }

}
