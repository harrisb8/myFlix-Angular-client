/**
 * Components that are brought in for use
 */
import { Component, OnInit, Inject } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
/**
 * Export director data, description, name, bio and birthday
 * @param data
 */
export class DirectorComponent implements OnInit {

    public directorData: any = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) 
    public data: {
      Description: string;
      Name: string,
      Bio: string,
      Birthday: Date,
    } ) { }
   // public fetchApiData: FetchApiDataService,  public dialog: MatDialog)  {
    
  // }

  ngOnInit(): void {
   // this.director();
  }

  //director(Director:any): any {
    //this.fetchApiData.getDirector(Director).subscribe((resp: any) => {
      //this.director = resp;
      //console.log(this.director);
      //return this.director;
  //});
 //}
}
