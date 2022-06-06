import {
  Component,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { MatCardContent } from '@angular/material/card';
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
  private _type: string = '';

  get title() {
    return this._title;
  }
  set title(value: string) {
    this._title = value;
  }

  get year() {
    return this._year;
  }
  set year(value: string) {
    this._year = value;
  }

  get posterUrl() {
    return this._posterUrl;
  }
  set posterUrl(value: string) {
    this._posterUrl = value;
  }

  get type() {
    return this._type;
  }
  set type(value: string) {
    this._type = value;
  }

  @Input() set movie(value: Movie) {
    this.title = value.Title;
    this.year = value.Year;
    this.posterUrl = value.Poster;
    this.type = value.Type;
  }

  @ViewChild('content') content: ElementRef = new ElementRef(MatCardContent);

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {}

  toggleType() {
    let content = this.content.nativeElement;

    if (!content.style.display || content.style.display === 'none') {
      this.renderer.setStyle(content, 'display', 'block');
    } else {
      this.renderer.setStyle(content, 'display', 'none');
    }
  }
}
