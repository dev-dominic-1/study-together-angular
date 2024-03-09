import {Component, HostBinding} from "@angular/core";
import {fadeAnimation} from "../core/animations/animations";

@Component({
  standalone: true,
  selector: 'create-post',
  templateUrl: './create-post.component.html',
  styleUrl: './create-post.component.sass',
  animations: [fadeAnimation()]
})
export class CreatePostComponent {
  @HostBinding('@fadeAnimation') routeAnimation = true
}
