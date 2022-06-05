import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent implements OnInit {
  private _searchTerm: string = '';

  get searchTerm() {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
  }
  constructor() {}

  ngOnInit(): void {}

  emitSearchEvent(event: KeyboardEvent) {
    // TODO: if event is "enter", emit search term to parent then pass to list to perform search
  }
}
