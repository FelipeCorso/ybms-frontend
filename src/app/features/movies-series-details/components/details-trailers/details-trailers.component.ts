import {Component, Input, OnInit} from '@angular/core';
import {MovieSerieDto} from '../../../../core/entities/movie-serie-dto';
import {ActivatedRoute} from '@angular/router';
import {MediaService} from '../../../../core/services/media.service';

@Component({
  selector: 'app-details-trailers',
  templateUrl: './details-trailers.component.html',
  styleUrls: ['./details-trailers.component.scss']
})
export class DetailsTrailersComponent implements OnInit {
  @Input() item: MovieSerieDto;
  trailers: any = {};

  constructor(private activatedRoute: ActivatedRoute, private mediaService: MediaService) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.mediaService.getVideos(params.mediaType, this.item.id)
          .subscribe((trailers: any) => {
            this.trailers = trailers;
          });
      });
  }

}
