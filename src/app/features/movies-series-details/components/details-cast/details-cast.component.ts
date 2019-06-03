import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MovieSerieDto} from "../../../../core/entities/movie-serie-dto";
import {MediaType} from "../../../../core/enums/media-type";
import {MediaService} from "../../../../core/services/media.service";

@Component({
  selector: 'app-details-cast',
  templateUrl: './details-cast.component.html',
  styleUrls: ['./details-cast.component.scss']
})
export class DetailsCastComponent implements OnInit {
  @Input() item: MovieSerieDto;
  cast: any = [];

  constructor(private activatedRoute: ActivatedRoute, private mediaService: MediaService) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.mediaService.getCast(params.mediaType, this.item.id)
          .subscribe((cast: any) => {
            this.cast = cast;
          });
      });
  }

}
