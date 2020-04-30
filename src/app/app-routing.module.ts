import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateMovieComponent } from './admin/create-movie/create-movie.component';
import { HomeComponent } from './home/home.component';
import { GenresComponent } from './genres/genres.component';
import { MovieCardListComponent } from './movies/movie-card-list/movie-card-list.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';


const routes: Routes = [
 {path:'',component:HomeComponent},
 {path:'movies/:id',component:MovieDetailsComponent},
 {path:'movies/genre/:id',component:MovieCardListComponent},
  {
    path:'admin/create-movie',component:CreateMovieComponent
  }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
