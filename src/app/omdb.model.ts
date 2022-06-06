import { Movie } from './movie-list/movie/movie.model';

export interface OMDBResponse {
  Response: string;
  Search: Array<Movie>;
  totalResults: string;
}
