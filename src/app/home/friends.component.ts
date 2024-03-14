import {Component, OnInit} from "@angular/core";
import {Post} from "../../models/Post";
import {ApiConnector} from "../../models/api/ApiConnector";
import {PostCardComponent} from "../core/components/post-card/post-card.component";
import {PostStat} from "../core/components/post-card/post-stat-icon/PostStat";
import {MatAutocomplete, MatAutocompleteTrigger, MatOption} from "@angular/material/autocomplete";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {FormControl, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {ContentOptions} from "./enums/ContentOptions";
import {MatIcon} from "@angular/material/icon";
import {RotatorComponent} from "../core/components/helpers/rotator.component";

@Component({
  standalone: true,
  selector: 'friends',
  imports: [
    PostCardComponent,
    MatAutocomplete,
    MatOption,
    MatFormField,
    MatLabel,
    ReactiveFormsModule,
    MatInputModule,
    MatAutocompleteTrigger,
    MatIcon,
    RotatorComponent,
  ],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.sass'
})
export class FriendsComponent implements OnInit {

  posts: Post[] = []

  contentOption: string = ContentOptions.MOST_RELEVANT.key

  stateCtrl!: FormControl

  constructor() {
    this.stateCtrl = new FormControl(this.contentOption)
    this.stateCtrl.valueChanges.subscribe(v => this.contentOption = v)
  }

  ngOnInit(): void {
    new ApiConnector(this, 'post').get().then(r => {
      console.log('RESPONSE', r)
    })
    let testPost = new Post('Albert Einstein')
    testPost.content = 'Sample post content...'
    testPost.stat = PostStat.DOUBLE_CHECK
    this.posts = [testPost]
  }

  contentSelectorDisplayFn (input: string) {
    const match = ContentOptions.values.find(v => v.key === input)
    if (match) return match.text
    return input
  }

  protected readonly ContentOptions = ContentOptions;
}
