import { Component, OnInit } from '@angular/core';
import { GenresService } from '../core/services/genres.service';
import { Genre } from '../shared/models/genre';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  genres:Genre[];
  constructor(private genresService:GenresService) { }

  //lifecycle hooks method
  ngOnInit(): void {
    this.genresService.getAllGenres().subscribe(
      g => {this.genres = g;}
    );
    console.log(this.genres);
  }

}
