import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
//import { title } from 'process';
//import { stringify } from 'querystring';
import { DirectorComponent } from '../director/director.component';
import { FetchApiDataService } from '../fetch-api-data.service';
import { GenreComponent } from '../genre/genre.component';
import { SynopsisComponent } from '../synopsis/synopsis.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  favoriteMovies: any[] = [];
  public heartIcon: string = "favorite_border"; 
  //filled = favorite
  constructor(
    public fetchApiData: FetchApiDataService, 
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMovies();
    console.log(this.getFavoriteMovies()) 
   
  }
  getFavoriteMovies(): any {
    return this.fetchApiData.getFavoriteMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
        this.movies = resp;
        console.log(this.movies);
        return this.movies;
      });
    }

    openMoviesDialog(Title: string, Description: string): void {
      this.dialog.open(SynopsisComponent, {
        data: {
          Title: Title,
          Description: Description
        },
        width: '500px'
      });
    }

    SetIcon(id: any): boolean {
 
    if (this.getFavoriteMovies().includes(id) )
    {
      console.log(id)
    return true
    }
    else {
    return false
    }
  }

    openDirectorDialog(Name: string, Bio: string, Birthday: Date): void {
      //this.fetchApiData.getDirector().subscribe((resp: any) => {
      this.dialog.open(DirectorComponent, {
        data: { 
          Name: Name,
          Bio: Bio,
          Birthday: Birthday,
        },
       width: '60%',
       height: '60%'
      });
      }
 // )}

    openGenreDialog(Description: string): void {
     // this.fetchApiData.getGenre().subscribe((resp: any) => {
        this.dialog.open(GenreComponent,  {
          data: { Description: Description },
          width: '60%' ,
          height: '60%'
        });
      //})
  }

}


 //function openSynopsisDialog(this: any) : void {
  //throw new Error('');
  //this.dialog.open(SynopsisComponent, {
    //width: '60%',
    //height: '60%'
  //});
//}


function addFavoriteMovie()  {
 // throw new Error('Function not implemented.');
}


