import {Component, OnInit} from '@angular/core';
import {Route, RouterOutlet} from '@angular/router';
import {LoginDialogComponent} from "./login/login-dialog.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import Grid from "../interface/grid.component";
import {MatCard, MatCardContent} from "@angular/material/card";
import {MatRipple} from "@angular/material/core";
import {NavRouteComponent} from "./components/nav-route/nav-route.component";
import {routes, mobileRoutes} from "./app.routes";
import {MatIcon} from "@angular/material/icon";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {UniversalDescriptorComponent} from "./universal-descriptor/universal-descriptor.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginDialogComponent, MatDialogModule, Grid, FontAwesomeModule, MatCard, MatCardContent, MatRipple, NavRouteComponent, MatIcon],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  title = 'study-together-angular';

  _routes!: Route[] // Routes to be used in navigation menu

  constructor(private dialog: MatDialog) {
    this.setRoutes()
    window.addEventListener('resize', () => this.setRoutes())
  }

  ngOnInit(): void {
    setTimeout(() => {
      const ref = this.dialog.open(UniversalDescriptorComponent, {autoFocus: false})
      ref.componentInstance.onClickClose.subscribe(() => ref.close())
    }, 500)
  }

  private setRoutes() {
    const breakpoint = window.getComputedStyle(document.body).getPropertyValue('--current-breakpoint')
    switch (breakpoint) {
      case 'mobile':
        this._routes = this.mobileRoutes
        break
      default:
        this._routes = this.routes
    }
  }

  protected readonly routes = routes
  protected readonly mobileRoutes = mobileRoutes
}
