import {Component, Input} from "@angular/core";
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {Post} from "../../../../models/Post";
import {MatIcon} from "@angular/material/icon";
import {NgClass} from "@angular/common";
import {MatButton} from "@angular/material/button";
import {PostStatIconComponent} from "./post-stat-icon/post-stat-icon.component";

@Component({
  standalone: true,
  selector: 'post-card',
  imports: [
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatIcon,
    MatCardActions,
    NgClass,
    MatButton,
    PostStatIconComponent
  ],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.sass',
})
export class PostCardComponent {
  @Input({required: true}) post!:Post



}
