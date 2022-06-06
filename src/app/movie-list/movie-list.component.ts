import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
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
  private _searchTermSubscription: Subscription = new Subscription();
  private _searchTermSubject: Observable<string> = new Observable<string>();

  get movies() {
    return this._movies;
  }
  set movies(value: Array<Movie>) {
    this._movies = value;
  }

  get searchTermSubscription() {
    return this._searchTermSubscription;
  }
  set searchTermSubscription(value: Subscription) {
    this._searchTermSubscription = value;
  }

  get searchTermSubject() {
    return this._searchTermSubject;
  }
  @Input() set searchTermSubject(value: Observable<string>) {
    this._searchTermSubject = value;
  }

  constructor(private omdb: OMDBService) {}

  async ngOnInit(): Promise<void> {
    this.searchTermSubscription = this.searchTermSubject.subscribe(
      (searchTerm) => this.searchForMovies(searchTerm)
    );
  }

  async searchForMovies(term: string) {
    try {
      this.movies = (await this.omdb.searchByName(term)).Search;
    } catch (error) {
      this.movies = [];
      console.error(error);
    }
  }
}
