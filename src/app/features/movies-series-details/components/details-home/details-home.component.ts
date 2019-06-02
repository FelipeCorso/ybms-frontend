import {Component, Input, OnInit} from '@angular/core';
import {MovieSerieDto} from "../../../../core/entities/movie-serie-dto";

@Component({
  selector: 'app-details-home',
  templateUrl: './details-home.component.html',
  styleUrls: ['./details-home.component.scss']
})
export class DetailsHomeComponent implements OnInit {
  @Input() item: MovieSerieDto;

  constructor() {
  }

  ngOnInit() {
  }

}
