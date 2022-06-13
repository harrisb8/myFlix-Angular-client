import { Component, Input, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {
  @Input() userData = { Username: '', Email: '', Birthday: ''};
  constructor( public fetchApiData: FetchApiDataService) { }

  ngOnInit(): void {
   /*  this.fetchApiData.getUserProfile().subscribe((result: any) => {
      console.log(result)
      this.userData.Birthday = result.user.Birthday;
      this.userData.Email = result.user.Email;
      this.userData.Username = result.user.Username;
    }); */

  }

  editUser() {
    this.fetchApiData.editUserProfile().subscribe((result: any) => {
      console.log(result)
    });
  }

}
