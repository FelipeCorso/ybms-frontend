import {Component, Input, OnInit} from '@angular/core';
import {MovieSerieDto} from "../../core/entities/movie-serie-dto";
import {Router} from "@angular/router";

@Component({
  selector: 'app-top-movie-series',
  templateUrl: './top-movie-series.component.html',
  styleUrls: ['./top-movie-series.component.scss']
})
export class TopMovieSeriesComponent implements OnInit {
  @Input() item: MovieSerieDto;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  onClickDetails(): void {
    this.router.navigate([`details/${this.item.id}`]);
  }

}
