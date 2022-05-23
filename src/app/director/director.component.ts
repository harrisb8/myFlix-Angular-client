import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service'

@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.scss']
})
export class DirectorComponent implements OnInit {

  constructor(public fetchApiData: FetchApiDataService) { }

  ngOnInit(): void {
    this.director();
  }

  director(): void {
    this.fetchApiData.getDirector().subscribe((resp: any) => {
      this.director = resp;
      console.log(this.director);
      return this.director;
  });
 }
}
