import { Injectable } from '@angular/core';
import {observable, Observable, throwError} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map, catchError} from 'rxjs/operators';
import { Movie } from 'src/app/shared/models/movie';
import { strict } from 'assert';
import { stringify } from 'querystring';
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

  getOne(path:string,id?:number,queryParam?:Map<any,any>):Observable<any>{
    let getUrl:string;
    if(id){
      getUrl = `${environment.apiUrl}${path}`+'/'+id;
    }else{
      getUrl = `${environment.apiUrl}${path}`;
    }
    let params = new HttpParams();
    if(queryParam){
      queryParam.forEach((value:string,key:string)=>{
          params = params.append(key,value);
      });
    }
    
    return this.http.get(getUrl,{params}).pipe(
        map(resp=>resp as any)
      
    );
  }

  create(path: string, resource, options?): Observable<any> {
    return this.http
      .post(`${environment.apiUrl}${path}`, resource, options)
      .pipe(
        map(response => response)
      ,catchError(e=>throwError(new Error('Something bad happen'))));
  }

  
}
