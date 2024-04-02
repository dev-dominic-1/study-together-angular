import {Component, HostBinding} from "@angular/core";
import {fadeAnimation} from "../core/animations/animations";
import {MatButton} from "@angular/material/button";
import Friend from "../../models/Friend";
import {FriendCardComponent} from "../core/components/friend-card/friend-card.component";
import {Post} from "../../models/Post";
import {PostStat} from "../core/components/post-card/post-stat-icon/PostStat";
import {PostCardComponent} from "../core/components/post-card/post-card.component";
import Favorite from "../../models/Favorite";
import {PostControlsComponent} from "./post-controls/post-controls.component";
import {BREAKPOINT_OPTIONS, BreakpointService} from "../../services/BreakpointService";
import {NgClass} from "@angular/common";
import {FavoriteCardComponent} from "../core/components/favorite-card/favorite-card.component";

@Component({
  standalone: true,
  selector: 'account',
  templateUrl: 'account.component.html',
  styleUrl: 'account.component.scss',
  imports: [
    MatButton,
    FriendCardComponent,
    PostCardComponent,
    PostControlsComponent,
    NgClass,
    FavoriteCardComponent
  ],
  animations: [fadeAnimation()],
  providers: [BreakpointService]
})
export class AccountComponent {
  @HostBinding('@fadeAnimation') routeAnimation = true
  protected readonly BREAKPOINT_OPTIONS = BREAKPOINT_OPTIONS;

  currentBreakpoint!: string

  protected breakpointMobileOrLess(): boolean {
    return [this.BREAKPOINT_OPTIONS.MOBILE_XS, this.BREAKPOINT_OPTIONS.MOBILE].includes(this.currentBreakpoint)
  }

  private getMaxDisplayFriends(): number {
    switch (this.currentBreakpoint) {
      case this.BREAKPOINT_OPTIONS.MOBILE_XS:
        return 2
      case this.BREAKPOINT_OPTIONS.MOBILE:
        return 3
      case this.BREAKPOINT_OPTIONS.TABLET:
      case this.BREAKPOINT_OPTIONS.COMPACT_DESKTOP:
        return 4
      default:
        return 6
    }
  }

  constructor(private breakpoints: BreakpointService) {
    breakpoints.currentBreakpointListener.subscribe(v => {
      if (v === this.currentBreakpoint) return // Only refresh the template when a MEANINGFUL change happens
      this.currentBreakpoint = v
      this.displayFriends = this.friends.slice(0, this.getMaxDisplayFriends())
      this.displayFavorites = this.favorites.slice(0, this.getMaxDisplayFriends())
    })
  }

  bioContent: string = 'Let\'s join forces and navigate this academic adventure together! 🚀 🤝 #StudentLife #ClassOf2026 #FutureLeadership 🌟'

  friends: Friend[] = [
    new Friend('Pierce Johnson', 'assets/Images/Desktop/Profile/2x/Profile-Pierce-Profile-Desktop2x.jpg'),
    new Friend('Jeff Westing', 'assets/Images/Desktop/Profile/2x/Profile-Jeff-Profile-Desktop2x.jpg'),
    new Friend('Shirley Overstreet', 'assets/Images/Desktop/Profile/2x/Profile-Shirley-Profile-Desktop2x.jpg'),
    new Friend('Anton Demarco', 'assets/Images/Desktop/Profile/2x/Profile-Anton-Profile-Desktop2x.jpg'),
    new Friend('Annie Barnes', 'assets/Images/Desktop/Profile/2x/Profile-Annie-Profile-Desktop2x.jpg'),
    new Friend('Sam Brown', 'assets/Images/Desktop/Profile/2x/Profile-Sam-Profile-Desktop2x.jpg')
  ]
  displayFriends: Friend[] = this.friends

  favorites: Favorite[] = [
    new Favorite('assets/Images/Desktop/Profile/2x/Profile-Book-1-Desktop2x.jpg'),
    new Favorite('assets/Images/Desktop/Profile/2x/Profile-Book-2-Desktop2x.jpg'),
    new Favorite('assets/Images/Desktop/Profile/2x/Profile-Book-3-Desktop2x.jpg'),
    new Favorite('assets/Images/Desktop/Profile/2x/Profile-Book-4-Desktop2x.jpg'),
    new Favorite('assets/Images/Desktop/Profile/2x/Profile-Book-5-Desktop2x.jpg'),
    new Favorite('assets/Images/Desktop/Profile/2x/Profile-Book-6-Desktop2x.jpg'),
  ]

  displayFavorites: Favorite[] = this.favorites

  posts: Post[] = [
    new Post('Troy Bennett', '16 Hours Ago', 'Can I get some feedback on this essay I wrote for Spanish?', [], PostStat.BOOKMARK),
    new Post('Troy Bennett', '16 Hours Ago', 'Can I get some feedback on this essay I wrote for Spanish?', [], PostStat.BOOKMARK),
    new Post('Troy Bennett', '16 Hours Ago', 'Can I get some feedback on this essay I wrote for Spanish?', [], PostStat.BOOKMARK)
  ]
}
