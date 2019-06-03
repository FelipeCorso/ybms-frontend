import {Component, Input, OnInit} from '@angular/core';
import {MovieSerieDto} from "../../core/entities/movie-serie-dto";
import {MediaType} from "../../core/enums/media-type";

@Component({
  selector: 'list-movies-series',
  templateUrl: './list-movies-series.component.html',
  styleUrls: ['./list-movies-series.component.scss']
})
export class ListMoviesSeriesComponent implements OnInit {
  @Input() items: MovieSerieDto[] = [];
  @Input() mediaType: MediaType;

  constructor() {
  }

  ngOnInit() {
  }
}
