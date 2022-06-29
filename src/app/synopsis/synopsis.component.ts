import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-synopsis',
  templateUrl: './synopsis.component.html',
  styleUrls: ['./synopsis.component.scss']
})

/**
 * Export data to give a description along with the title of the movie being displayed
 * @param data 
 */
export class SynopsisComponent implements OnInit {
 
  public synopsisData: any = {};
  constructor(
    @Inject(MAT_DIALOG_DATA)
      public data: {
      Title: string,
      Description: string
    }
  ) { }

  ngOnInit(): void {
    
  }

}
