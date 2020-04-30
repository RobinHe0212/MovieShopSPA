import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private apiService:ApiService) { }
  getHighestGrossingMovies():Observable<Movie[]>{
    return this.apiService.getHighestGrossingMovies();
  }

  getMovieById(id:number):Observable<Movie>{
    return this.apiService.getById('movies',id);
  }

  getMovieByGenreId(id:number):Observable<Movie[]>{
    return this.apiService.getById('movies/genreId',id);
  }
}
