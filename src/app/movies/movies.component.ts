import { Component, OnInit } from '@angular/core';
import { MovieService } from '../core/services/movie.service';
import { Movie } from '../shared/models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
movies:Movie[];
movie:Movie;
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movieService.getHighestGrossingMovies().subscribe(
      m=> {this.movies = m;}
    );
    this.movieService.getMovieById(3).subscribe(
      m=>{this.movie=m;}
    );
    
    console.log(this.movie);
  }

}
