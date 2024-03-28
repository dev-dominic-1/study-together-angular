import {Component, Input} from "@angular/core";
import {MatCard, MatCardContent} from "@angular/material/card";
import Friend from "../../../../models/Friend";

@Component({
  standalone: true,
  selector: 'friend-card',
  templateUrl: 'friend-card.component.html',
  imports: [
    MatCard,
    MatCardContent
  ],
  styleUrl: 'friend-card.component.scss'
})
export class FriendCardComponent {

  @Input({required: true}) friend!: Friend

}
