import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
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
/**
 * Exports movies, and favorite movies as the user clicks on the heart to mark movies they like
 */
export class MovieCardComponent implements OnInit {
  movies: any[] = [];
  favoriteMovies: any[] = [];
  public heartIcon: string = "favorite_border"; 
  //filled = favorite
  constructor(
    public fetchApiData: FetchApiDataService, 
    public dialog: MatDialog, 
    public snackbar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.getMovies();
    this.getFavoriteMovies(); 
   
  }
  getFavoriteMovies(): void {
    this.fetchApiData.getFavoriteMovies().subscribe((resp: any) => {
      console.log("...line 38...")
    console.log(resp);
    this.favoriteMovies= resp.find((x:any)=>x._id === localStorage.getItem('user_id') ).FavoriteMovies;
    })
  }

  addFavoriteMovies(Title: any): void {
    console.log(Title);
    this.fetchApiData.addFavoriteMovie(Title).subscribe((resp: any) => {
      this.snackbar.open(`Successfully added ${Title} to favorite movies.`, 'OK', {
        duration: 4000,
        verticalPosition: 'top'
      });
    })
  }

  deleteFavoriteMovies(Title: any): void {
    this.fetchApiData.deleteFavoriteMovie(Title).subscribe((resp: any) => {
      this.snackbar.open(`Successfully remove ${Title} from favorite movies.`, 'OK', {
        duration: 4000,
        verticalPosition: 'top'
      });
    })
  }

  addRemoveFavoriteMovies(Title: any, Id: any) : void {
    if(this.SetIcon(Id)){
      this.deleteFavoriteMovies(Title);
    } else {
      this.addFavoriteMovies(Title);
    }
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
    //console.log(this.favoriteMovies);
    if (this.favoriteMovies.includes(id) )
    {
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
       width: '500px'
      });
      }
 // )}

    openGenreDialog(Description: string): void {
     // this.fetchApiData.getGenre().subscribe((resp: any) => {
        this.dialog.open(GenreComponent,  {
          data: { Description: Description },
          width: '500px'
        });
      //})
  }

}




