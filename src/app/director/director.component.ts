import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {

  constructor(public fetchApiData: FetchApiDataService,  public dialog: MatDialog)  {
    
   }

  ngOnInit(): void {
   // this.director();
  }

  director(Director:any): any {
    this.fetchApiData.getDirector(Director).subscribe((resp: any) => {
      this.director = resp;
      console.log(this.director);
      return this.director;
  });
 }
}
