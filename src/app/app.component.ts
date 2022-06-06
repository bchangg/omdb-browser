import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private _searchTermSubject: Subject<string> = new Subject<string>();

  get searchTermSubject() {
    return this._searchTermSubject;
  }

  emitSearchTerm(term: string) {
    this.searchTermSubject.next(term);
  }
}
