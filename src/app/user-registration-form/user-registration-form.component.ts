import { Component, OnInit, Input } from '@angular/core';
// You'll use this import to close the dialog on success
import { MatDialogRef } from '@angular/material/dialog';

// This import brings in the API calls we created in 6.2
import { FetchApiDataService } from '../fetch-api-data.service';

// This import is used to display notifications back to the user
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-user-registration-form',
  templateUrl: './user-registration-form.component.html',
  styleUrls: ['./user-registration-form.component.scss']
})
export class UserRegistrationFormComponent implements OnInit {
  @Input() userData = { Username: '', Password: '', Email: '', Birthday: ''};
  /*
  Called when creating an instance of the class
  @param fetchApiData
  @param dialogRef
  @param snackBar
  */
  constructor(
    public fetchApiData: FetchApiDataService,
    public dialogRef: MatDialogRef<UserRegistrationFormComponent>,
    public snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  // This is the function responsible for sending the form inputs to the backend
  /**
   * Function for sending the form inouts to the backend to create a new user
   * @returns alert indicating a successful registration or an error
   */
  registerUser(): void {
    this.fetchApiData.userRegistration(this.userData).subscribe((result: any) => {
      //Logic for a successful user registration goes here! (To be implemented)
      console.log(result)
      this.dialogRef.close(); //This will close the modal on success!
      this.snackBar.open('User registration successful', 'OK', {
        duration: 2000
      });
    }, (result: any) => {
      this.snackBar.open('User registration successful', 'OK', {
        duration: 2000
      });
    });
  }
}