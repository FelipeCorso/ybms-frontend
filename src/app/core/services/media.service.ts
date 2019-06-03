import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {MediaType} from '../enums/media-type';
import {TimeWindow} from '../enums/time-window';
import {Observable} from "rxjs";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MediaService {


  constructor(private http: HttpClient) {
  }

  getTopRated(mediaType: MediaType = MediaType.MOVIE, page: number = 1): Observable<any> {
    return this.http
      .get(`${mediaType}/top_rated?page=${page}`);
  }

  getMediaTrending(mediaType: MediaType = MediaType.MOVIE, timeWindow: TimeWindow = TimeWindow.WEEK, page: number = 1): Observable<any> {
    return this.http
      .get(`trending/${mediaType}/${timeWindow}?page=${page}`);
  }

  getCast(mediaType: MediaType = MediaType.MOVIE, id: number): Observable<any> {
    return this.http
      .get(`${mediaType}/${id}/credits`)
      .pipe(map((credits: any) => credits.cast));
  }

  getVideos(mediaType: MediaType = MediaType.MOVIE, id: number): Observable<any> {
    return this.http
      .get(`${mediaType}/${id}/videos`);
  }

  getReviews(mediaType: MediaType = MediaType.MOVIE, id: number, page: number = 1): Observable<any> {
    return this.http
      .get(`${mediaType}/${id}/reviews?page=${page}`);
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
