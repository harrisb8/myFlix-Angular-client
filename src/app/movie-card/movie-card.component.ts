import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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
  
  constructor(public fetchApiData: FetchApiDataService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
        this.movies = resp;
        console.log(this.movies);
        return this.movies;
      });
    }

    //SetIcon(): void {
    //if (movies.find(x=> favoriteMovies.includes(x._id)) )
    //{
    //retun true
    //}
    //else {
    //return false
      //  });
      //}

    openDirectorDialog(): void {
      //this.fetchApiData.getDirector().subscribe((resp: any) => {
      this.dialog.open(DirectorComponent, {
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


function openSynopsisDialog() : void {
  //throw new Error('');
  //this.dialog.open(SynopsisComponent, {
    //width: '60%',
    //height: '60%'
  //});
}

function addFavoriteMovie()  {
 // throw new Error('Function not implemented.');
}
