import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { OMDBResponse } from './omdb.model';

@Injectable({
  providedIn: 'root',
})
export class OMDBService {
  OMDB_BASE_URL = 'https://www.omdbapi.com/';
  API_KEY = 'b817d7fd';
  constructor(private httpClient: HttpClient) {}

  async searchByName({
    name,
    page = 1,
  }: {
    name: string;
    page?: number;
  }): Promise<OMDBResponse> {
    return firstValueFrom(
      this.httpClient.get(
        `${this.OMDB_BASE_URL}?apikey=${this.API_KEY}&s=${name}&page=${page}`
      )
    ) as Promise<OMDBResponse>;
  }
}
