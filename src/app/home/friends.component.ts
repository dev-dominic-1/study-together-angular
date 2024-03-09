import {Component, OnInit} from "@angular/core";
import {Post} from "../../models/Post";
import {ApiConnector} from "../../models/api/ApiConnector";
import {PostCardComponent} from "../core/components/post-card/post-card.component";
import {PostStat} from "../core/components/post-card/post-stat-icon/PostStat";

@Component({
  standalone: true,
  selector: 'friends',
  imports: [
    PostCardComponent
  ],
  templateUrl: './friends.component.html'
})
export class FriendsComponent implements OnInit {

  posts: Post[] = []

  ngOnInit(): void {
    new ApiConnector(this, 'post').get().then(r => {
      console.log('RESPONSE', r)
    })
    let testPost = new Post('Albert Einstein')
    testPost.content = 'Sample post content...'
    testPost.stat = PostStat.DOUBLE_CHECK
    this.posts = [testPost]
  }

}
