import {Component, Input, OnInit} from '@angular/core';
import {MovieSerieDto} from "../../../../core/entities/movie-serie-dto";
import {MediaService} from "../../../../core/services/media.service";
import {ActivatedRoute} from "@angular/router";
import {MediaType} from "../../../../core/enums/media-type";

@Component({
  selector: 'app-details-reviews',
  templateUrl: './details-reviews.component.html',
  styleUrls: ['./details-reviews.component.scss']
})
export class DetailsReviewsComponent implements OnInit {
  @Input() item: MovieSerieDto;
  reviews: any;
  private mediaType: MediaType;

  constructor(private activatedRoute: ActivatedRoute, private mediaService: MediaService) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .subscribe((params: any) => {
        this.mediaType = params.mediaType;
        this.mediaService.getReviews(this.mediaType, this.item.id)
          .subscribe((reviews: any) => {
            this.reviews = reviews;
          });
      });
  }

  onPageChange($event): void {
    this.mediaService.getReviews(this.mediaType, this.item.id, $event.page + 1)
      .subscribe((reviews: any) => {
        this.reviews = reviews;
      });
  }
}
