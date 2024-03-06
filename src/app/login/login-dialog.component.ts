import {Component} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {ErrorStateMatcher} from "@angular/material/core";
import {MatButton} from "@angular/material/button";
import Grid from "../interface/grid.component";
import {GridSpacer} from "../interface/grid-spacer.component";
import {MatDialogActions, MatDialogContent, MatDialogTitle} from "@angular/material/dialog";

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, MatFormField, MatLabel, MatInput, MatError, ReactiveFormsModule, MatButton, Grid, GridSpacer, MatDialogContent, MatDialogTitle, MatDialogActions],
  templateUrl: './login-dialog.component.html',
  styleUrls: ['/src/app/app.component.sass', './login-dialog.component.sass'],
})
export class LoginDialogComponent {

  usernameFormControl: FormControl = new FormControl('', [Validators.required])
  passwordFormControl: FormControl = new FormControl('', [Validators.required])

  matcher: ErrorStateMatcher = new ErrorStateMatcher()

  username?: string
  password?: string

  showPassword: boolean = true

  signIn () {
    console.log('SIGN IN', this.username, this.password)
  }
}
