import {Component} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "../core/login/login-dialog.component";
import {MatButton} from "@angular/material/button";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {FriendsComponent} from "./friends.component";
import {NgComponentOutlet} from "@angular/common";
import {TrendingComponent} from "./trending.component";

@Component({
  standalone: true,
  imports: [
    MatButton,
    MatTabGroup,
    MatTab,
    NgComponentOutlet
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.sass',
})
export class HomeComponent {

  currentTab: number = 0
  tabs: {text: string, component: any}[] = [
    {text: 'Trending', component: TrendingComponent},
    {text: 'Friends', component: FriendsComponent}
  ]

  constructor(public dialog: MatDialog) {}
  openDialog() {
    this.dialog.open(LoginDialogComponent)
  }
}
