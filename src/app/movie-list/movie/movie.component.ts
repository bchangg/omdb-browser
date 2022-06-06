import { Component, Input, OnInit } from '@angular/core';
import { Movie } from './movie.model';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  private _title: string = '';
  private _year: string = '';
  private _posterUrl: string = '';

  get title() {
    return this._title;
  }
  @Input() set title(value: string) {
    this._title = value;
  }

  get year() {
    return this._year;
  }
  @Input() set year(value: string) {
    this._year = value;
  }

  get posterUrl() {
    return this._posterUrl;
  }
  @Input() set posterUrl(value: string) {
    this._posterUrl = value;
  }

  @Input() set movie(value: Movie) {
    this.title = value.Title;
    this.year = value.Year;
    this.posterUrl = value.Poster;
  }

  constructor() {}

  ngOnInit(): void {}
}
