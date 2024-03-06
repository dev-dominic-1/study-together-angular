import {Component} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "../login/login-dialog.component";
import {MatButton} from "@angular/material/button";

@Component({
  standalone: true,
  imports: [
    MatButton
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(LoginDialogComponent)
  }
}
