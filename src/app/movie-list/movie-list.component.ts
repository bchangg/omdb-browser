import { Component, OnInit } from '@angular/core';
import { OMDBResponse } from '../omdb.model';
import { OMDBService } from '../omdb.service';
import { Movie } from './movie/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  private _movies: Array<Movie> = [];

  get movies() {
    return this._movies;
  }
  set movies(value: Array<Movie>) {
    this._movies = value;
  }

  constructor(private omdb: OMDBService) {}

  async ngOnInit(): Promise<void> {
    this.movies = (await this.omdb.searchByName('spider')).Search;
  }
}
