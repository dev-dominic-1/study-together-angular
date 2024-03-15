import {Component, Input, OnInit} from "@angular/core";
import {NavigationEnd, Route, Router} from "@angular/router";
import {MatRipple} from "@angular/material/core";
import {MatCard, MatCardContent} from "@angular/material/card";
import {NgClass} from "@angular/common";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {LoginDialogComponent} from "../../login/login-dialog.component";
import {animate, style} from "@angular/animations";
import AnimationBuilder from "../../animations/AnimationBuilder";
import {growXAnimation} from "../../animations/animations";

@Component({
  standalone: true,
  templateUrl: './nav-route.component.html',
  selector: 'nav-route',
  animations: [growXAnimation()],
  imports: [
    MatRipple,
    MatCard,
    MatCardContent,
    NgClass,
    MatIcon,
    MatIconModule
  ],
  styleUrl: './nav-route.component.sass'
})
export class NavRouteComponent implements OnInit {

  @Input({required: true}) route?: Route
  path: string = '.'
  extras?: {}
  text: string = 'Label'
  icon: string = 'question_mark'
  disabled: boolean = false
  loginRequired: boolean = false

  currentRoute: boolean = false

  constructor(private router: Router, private dialog: MatDialog) {
    router.events.subscribe((v) => {
      if (v instanceof NavigationEnd) this.currentRoute = this.checkCurrentRoute(this.path)
    })
  }

  /**
   * Unpack Route object passed in
   */
  ngOnInit(): void {
    const {path = '.', data = {} } = this.route ?? {}
    const {text, extras, icon, disabled, loginRequired} = data
    this.path = path
    this.extras = extras
    this.text = text
    this.icon = icon
    this.disabled = disabled
    this.loginRequired = loginRequired
    this.currentRoute = this.checkCurrentRoute(path)
  }

  /**
   * Check if the inputted `path` matches the router's current `url`
   * @param {string} path Raw path, does NOT include `/` prefix
   * @private
   */
  private checkCurrentRoute(path: string): boolean {
    return this.router.url === `/${path}`
  }

  /**
   * Navigate to selected Route, intercept navigation if login is required
   * @param route
   * @param overrideLogin
   */
  async goTo (route?: Route, overrideLogin?: boolean) {
    if (this.loginRequired && !overrideLogin) { // Intercept nav if login is required
      let config = new MatDialogConfig()
      config.maxWidth = '100%' // Prevent horizontal scrolling and fit content
      config.autoFocus = false // Prevent default autofocus handling
      let ref = this.dialog.open(LoginDialogComponent, config)
      ref.componentInstance.onSuccess.subscribe((data) => {
        console.log('CAPTURED EVENT', data)
      })
    } else {
      let r: any[] = [route?.path ?? this.path]
      if (this.extras != null) r.push(this.extras)
      await this.router.navigate(r)
    }
  }
}
