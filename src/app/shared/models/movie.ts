import { Genre } from './genre';
import { Cast } from './cast';

export interface Movie{
    id:number;
    title:string;
    overView:string;
    tagLine:string;
    budget:number;
    revenue:number;
    imdbUrl:string;
    tmdbUrl:string;
    posterUrl:string;
    backdropUrl:string;
    originalLanguage:string;
    releaseDate:Date;
    runTime:number;
    price:number;
    createdDate:Date;
    updatedDate:Date;
    updatedBy:string;
    createdBy:string;
    rating:number;
    cast:Cast[];
    genre:Genre[];
}