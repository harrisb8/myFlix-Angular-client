import { Component, OnInit, Input } from '@angular/core';

import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';

import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-form',
  templateUrl: './user-login-form.component.html',
  styleUrls: ['./user-login-form.component.scss']
})
export class UserLoginFormComponent implements OnInit {
  /*
  get information and store it into userCredentials
  */
  @Input() userData = { Username: '', Password: ''};

  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserLoginFormComponent>,
    public snackBar: MatSnackBar,
    public router: Router 
    ) { }

  ngOnInit(): void {}
  //this sends code/ function send the form input to the backend
  loginUser(): void {
    this.fetchApiData.userLogin(this.userData).subscribe((result) => {
      //
      localStorage.setItem('user', result.user._id);
      localStorage.setItem('username', result.user.Username);
      localStorage.setItem('user', JSON.stringify(result.user ));
      localStorage.setItem('token', result.token);
      this.dialogRef.close(); //This will close the modal on success!
      this.snackBar.open('User login successful', 'OK', {
        duration: 2000
      });
      this.router.navigate(['movies']);
    }, (result:any) => {
      this.snackBar.open('User login successful', 'OK', {
        duration: 2000
      });
    })
  }
}
