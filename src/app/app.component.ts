import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginDialogComponent} from "./login/login-dialog.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faHome, IconDefinition} from "@fortawesome/free-solid-svg-icons";
import Grid from "./interface/grid.component";
import {MatCard, MatCardContent} from "@angular/material/card";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginDialogComponent, Grid, FontAwesomeModule, MatCard, MatCardContent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'study-together-angular';

  icons = {
    home: faHome
  }

}
