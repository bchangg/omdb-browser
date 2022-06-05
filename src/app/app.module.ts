import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieComponent } from './movie-list/movie/movie.component';

@NgModule({
  declarations: [AppComponent, MovieListComponent, MovieComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatCardModule, MatButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
