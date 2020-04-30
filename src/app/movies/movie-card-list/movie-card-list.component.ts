import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie.service';
import { Movie } from 'src/app/shared/models/movie';

@Component({
  selector: 'app-movie-card-list',
  templateUrl: './movie-card-list.component.html',
  styleUrls: ['./movie-card-list.component.css']
})
export class MovieCardListComponent implements OnInit {

  genreId:number;
  movies:Movie[];
  constructor(private activateRoute:ActivatedRoute,private movieService:MovieService) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(
      params=>{
        this.genreId = +params.get('id');
        this.movieService.getMovieByGenreId(this.genreId).subscribe(
          m=>{
              this.movies = m;
          }
        );
          console.log(this.movies);
      }
    );

   
  }

}
