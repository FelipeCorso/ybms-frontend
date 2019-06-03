import {Component, Input, OnInit} from '@angular/core';
import {MovieSerieDto} from "../../core/entities/movie-serie-dto";
import {Router} from "@angular/router";
import {SelectedTab} from "../tab-list/tab-list.component";
import {MediaType} from "../../core/enums/media-type";

@Component({
  selector: 'app-top-movie-series',
  templateUrl: './top-movie-series.component.html',
  styleUrls: ['./top-movie-series.component.scss']
})
export class TopMovieSeriesComponent implements OnInit {
  @Input() item: MovieSerieDto;
  @Input() mediaType: MediaType;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onClickDetails(): void {
    this.router.navigate([`movies-series/details/${this.mediaType}/${this.item.id}`]);
  }

}
