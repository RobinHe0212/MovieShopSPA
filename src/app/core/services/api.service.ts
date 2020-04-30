import { Injectable } from '@angular/core';
import {observable, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/movie';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(protected http:HttpClient) { }

  getAll(path:string):Observable<any[]>{
      return this.http.get(`${environment.apiUrl}${path}`)
      .pipe(map(resp=>resp as any[]));
  }

  getHighestGrossingMovies():Observable<Movie[]>{
    return this.http.get(`${environment.apiUrl}movies`)
    .pipe(map(resp=>resp as Movie[]));
  }

  getById(path:string,id:number):Observable<any>{
    return this.http.get(`${environment.apiUrl}${path}/${id}`)
    .pipe(map(resp=>resp as any));
  }

  
}
