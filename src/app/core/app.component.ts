import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {LoginDialogComponent} from "./login/login-dialog.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import Grid from "../interface/grid.component";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatRipple} from "@angular/material/core";
import {NavRouteComponent} from "./components/nav-route/nav-route.component";
import {routes} from "./app.routes";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginDialogComponent, Grid, FontAwesomeModule, MatCard, MatCardContent, MatRipple, NavRouteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'study-together-angular';

  protected readonly routes = routes;
}
