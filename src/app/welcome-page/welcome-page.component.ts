import { Component, OnInit } from '@angular/core';
import { UserRegistrationFormComponent } from '../user-registration-form/user-registration-form.component';
import { UserLoginFormComponent } from '../user-login-form/user-login-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { ProfileViewComponent } from '../profile-view/profile-view.component';



@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.scss']
})
/**
 * Export data that the user will see once the welcome page loads
 * User will be able to sign up, login in and view movies once logged in
 * @param data
 */
export class WelcomePageComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  /**
   * Function that opens user registration dialog
   */
  openUserRegistrationDialog(): void {
    this.dialog.open(UserRegistrationFormComponent, {
      width: '280px'
    });
  }
  /**
   * Function that opens user login dialog
   */
  openUserLoginDialog(): void {
    this.dialog.open(UserLoginFormComponent, {
     width: '280px'
    });
  }
  /**
   * Function that opens movie dialog
   */
  openMoviesDialog(): void {
    this.dialog.open(MovieCardComponent, {
     width: '80%',
     height: '80%'
    });
  }
  /**
   * Function that opens profile dialog
   */
  openProfileDialog(): void {
    this.dialog.open(ProfileViewComponent, {
     width: '280px'
    });
  }
}