import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {MediaType} from '../enums/media-type';
import {TimeWindow} from '../enums/time-window';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MediaService {


  constructor(private http: HttpClient) {
  }

  getMediaTrending(mediaType: MediaType = MediaType.MOVIE, timeWindow: TimeWindow = TimeWindow.WEEK, page: number = 1): Observable<any> {
    return this.http
      .get(`trending/${mediaType}/${timeWindow}?page=${page}`);
  }

  getMovieById(id: number): Observable<any> {
    return this.http
      .get(`movie/${id}`);
  }

  getSeriesById(id: number): Observable<any> {
    return this.http
      .get(`tv/${id}`);
  }
}
