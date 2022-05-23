import { Component, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service'

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
  styleUrls: ['./genre.component.scss']
})
export class GenreComponent implements OnInit {

  constructor(public fetchApiData: FetchApiDataService) { }

  ngOnInit(): void {
    this.genre();
  }

  genre(): void {
    this.fetchApiData.getGenre().subscribe((resp: any) => {
      this.genre = resp;
      console.log(this.genre);
      return this.genre;
  });
 }
}

