import {Component, HostBinding} from "@angular/core";
import {MatDialog} from "@angular/material/dialog";
import {LoginDialogComponent} from "../core/login/login-dialog.component";
import {MatButton} from "@angular/material/button";
import {MatTab, MatTabGroup} from "@angular/material/tabs";
import {FriendsComponent} from "./friends.component";
import {NgClass, NgComponentOutlet} from "@angular/common";
import {TrendingComponent} from "./trending.component";
import {fadeAnimation} from "../core/animations/animations";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {RotatorComponent} from "../core/components/helpers/rotator.component";

@Component({
  standalone: true,
  imports: [
    MatButton,
    MatTabGroup,
    MatTab,
    NgComponentOutlet,
    NgClass,
    MatAutocomplete,
    MatAutocompleteTrigger,
    MatFormField,
    MatInput,
    MatLabel,
    MatOption,
    RotatorComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['/src/styles.background-variables.scss', './home.component.sass'],
  animations: [fadeAnimation()]
})
export class HomeComponent {
  @HostBinding('@fadeAnimation') routeAnimation = true

  currentTab: number = 1
  tabs: {text: string, disabled?: boolean, component: any}[] = [
    {text: 'Trending', disabled: true, component: TrendingComponent},
    {text: 'Friends', component: FriendsComponent}
  ]

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(LoginDialogComponent)
  }
}
