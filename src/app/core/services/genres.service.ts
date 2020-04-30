import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/shared/models/genre';
import { Movie } from 'src/app/shared/models/movie';

@Injectable({
  providedIn: 'root'
})
export class GenresService {

  constructor(private apiService:ApiService) { }
  getAllGenres():Observable<Genre[]>{
    return this.apiService.getAll('genres');
  }

  

}
