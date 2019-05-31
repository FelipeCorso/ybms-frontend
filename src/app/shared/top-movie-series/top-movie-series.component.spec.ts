import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopMovieSeriesComponent } from './top-movie-series.component';

describe('TopMovieSeriesComponent', () => {
  let component: TopMovieSeriesComponent;
  let fixture: ComponentFixture<TopMovieSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopMovieSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopMovieSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
