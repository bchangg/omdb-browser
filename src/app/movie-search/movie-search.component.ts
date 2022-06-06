import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.scss'],
})
export class MovieSearchComponent implements OnInit {
  private _searchTerm: string = '';
  private _searchEvent: EventEmitter<string> = new EventEmitter<string>();

  get searchTerm() {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
  }

  @Output() get searchEvent() {
    return this._searchEvent;
  }
  constructor() {}

  ngOnInit(): void {}

  emitSearchTerm(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.searchEvent.emit(this.searchTerm);
    }
  }

  clearSearchTerm() {
    this.searchTerm = '';
    this.searchEvent.emit(this.searchTerm);
  }
}
