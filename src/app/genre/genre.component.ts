/**
 * import components to access api along with components to access genre view
 */
import { Component, OnInit, Inject } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service'
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
/**
 * Export data used to create the genre html
 * @param data
 */
export class GenreComponent implements OnInit {
  public genreData: any = {};
  constructor( @Inject(MAT_DIALOG_DATA) public data: {
    Description: string,
    } ) { }

  ngOnInit(): void {
    //this.genre();
    //console.log(this.genre("Action"));
    //this.genreData = this.genre();
  }

  //genre(Genre:any): any {
    //this.fetchApiData.getGenre(Genre).subscribe((resp: any) => {
      //console.log(resp);
      //this.genre = resp.data;
      //console.log(this.genre);
      //return this.genre;
  //});
 //}
}

