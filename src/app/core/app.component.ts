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
import {MatDialog, MatDialogModule, MatDialogRef} from "@angular/material/dialog";
import {UniversalDescriptorComponent} from "./universal-descriptor/universal-descriptor.component";
import {MatFabButton, MatIconButton} from "@angular/material/button";
import {NgStyle} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginDialogComponent, MatDialogModule, Grid, FontAwesomeModule, MatCard, MatCardContent, MatRipple, NavRouteComponent, MatIcon, MatIconButton, MatFabButton, NgStyle],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent implements OnInit {
  title = 'study-together-angular';
  appInfoDialog!:MatDialogRef<any>

  _routes!: Route[] // Routes to be used in navigation menu

  constructor(private dialog: MatDialog) {
    this.setRoutes()
    window.addEventListener('resize', () => this.setRoutes())
  }

  ngOnInit(): void {
    setTimeout(() => this.openAppInfo(), 500)
  }

  openAppInfo() {
    this.appInfoDialog = this.dialog.open(UniversalDescriptorComponent, {autoFocus: false})
    this.appInfoDialog.componentInstance.onClickClose.subscribe(() => this.appInfoDialog.close())
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
