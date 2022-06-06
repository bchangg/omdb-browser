import { Component, Input, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  private _pageEvent: PageEvent = new PageEvent();
  private _currentSearchTerm: string = '';
  private _totalSearchResultsLength: number = 0;

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

  get pageEvent() {
    return this._pageEvent;
  }
  set pageEvent(value: PageEvent) {
    this._pageEvent = value;
  }

  get currentSearchTerm() {
    return this._currentSearchTerm;
  }
  set currentSearchTerm(value: string) {
    this._currentSearchTerm = value;
  }

  get totalSearchResultsLength() {
    return this._totalSearchResultsLength;
  }
  set totalSearchResultsLength(value: number) {
    this._totalSearchResultsLength = value;
  }

  constructor(private omdb: OMDBService) {}

  async ngOnInit(): Promise<void> {
    this.searchTermSubscription = this.searchTermSubject.subscribe(
      (searchTerm) => this.searchForMovies(searchTerm)
    );
  }

  ngOnDestroy() {
    this.searchTermSubscription.unsubscribe();
  }

  async searchForMovies(term: string) {
    this.currentSearchTerm = term;
    if (this.currentSearchTerm) {
      try {
        const searchResults = await this.omdb.searchByName({
          name: this.currentSearchTerm,
        });
        this.movies = searchResults.Search;
        this.totalSearchResultsLength = Number(searchResults.totalResults);
      } catch (error) {
        this.movies = [];
        console.error(error);
      }
    } else {
      this.movies = [];
      this.totalSearchResultsLength = 0;
    }
  }
}
