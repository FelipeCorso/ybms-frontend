import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {MediaType} from '../enums/media-type';
import {TimeWindow} from '../enums/time-window';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MediaService {


  constructor(private http: HttpClient) {
  }

  getMediaTrending(mediaType: MediaType = MediaType.MOVIE, timeWindow: TimeWindow = TimeWindow.WEEK, page: number = 1) {
    return this.http
      .get(`trending/${mediaType}/${timeWindow}?page=${page}`)
      // .pipe(map((response: any) => response.data));
  }

//  https://api.themoviedb.org/3/trending/movie/week?api_key=daaab0a5b8afc79e7f7f4555434d862d

}
