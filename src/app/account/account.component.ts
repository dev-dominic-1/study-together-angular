import {Component, HostBinding} from "@angular/core";
import {fadeAnimation} from "../core/animations/animations";
import {MatButton} from "@angular/material/button";
import Friend from "../../models/Friend";
import {FriendCardComponent} from "../core/components/friend-card/friend-card.component";
import {Post} from "../../models/Post";
import {PostStat} from "../core/components/post-card/post-stat-icon/PostStat";
import {PostCardComponent} from "../core/components/post-card/post-card.component";

@Component({
  standalone: true,
  selector: 'account',
  templateUrl: 'account.component.html',
  styleUrl: 'account.component.scss',
  imports: [
    MatButton,
    FriendCardComponent,
    PostCardComponent
  ],
  animations: [fadeAnimation()]
})
export class AccountComponent {
  @HostBinding('@fadeAnimation') routeAnimation = true

  friends: Friend[] = [
    new Friend('Pierce Johnson', 'assets/Images/Desktop/Profile/2x/Profile-Pierce-Profile-Desktop2x.jpg'),
    new Friend('Jeff Westing', 'assets/Images/Desktop/Profile/2x/Profile-Jeff-Profile-Desktop2x.jpg'),
    new Friend('Shirley Overstreet', 'assets/Images/Desktop/Profile/2x/Profile-Shirley-Profile-Desktop2x.jpg'),
    new Friend('Anton Demarco', 'assets/Images/Desktop/Profile/2x/Profile-Anton-Profile-Desktop2x.jpg'),
    new Friend('Annie Barnes', 'assets/Images/Desktop/Profile/2x/Profile-Annie-Profile-Desktop2x.jpg'),
    new Friend('Sam Brown', 'assets/Images/Desktop/Profile/2x/Profile-Sam-Profile-Desktop2x.jpg')
  ]

  posts: Post[] = [
    new Post('Troy Barnes', '16 Hours Ago', 'Can I get some feedback on this essay I wrote for Spanish?', [], PostStat.BOOKMARK),
    new Post('Troy Barnes', '16 Hours Ago', 'Can I get some feedback on this essay I wrote for Spanish?', [], PostStat.BOOKMARK),
    new Post('Troy Barnes', '16 Hours Ago', 'Can I get some feedback on this essay I wrote for Spanish?', [], PostStat.BOOKMARK)
  ]

}
