import { Component, Input, OnInit } from '@angular/core';
import { FetchApiDataService } from '../fetch-api-data.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
/**
 * Exports User data username, email and birthday in order to gain access to the movie api
 * @param data
 */
export class ProfileViewComponent implements OnInit {
  @Input() userData = { Username: '', Email: '', Birthday: ''};
  constructor(
     public fetchApiData: FetchApiDataService,
     public dialogRef: MatDialogRef<ProfileViewComponent>,
     public snackBar: MatSnackBar,
     ) { }
    
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
     { console.log(result);
     this.dialogRef.close();
    }
    });
  }  
}
