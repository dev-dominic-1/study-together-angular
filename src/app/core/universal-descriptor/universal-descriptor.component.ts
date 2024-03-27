import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {MatDialogContent} from "@angular/material/dialog";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  standalone: true,
  selector: 'universal-descriptor',
  imports: [
    MatDialogContent,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatIconButton,
    MatIcon
  ],
  templateUrl: 'universal-descriptor.component.html',
  styleUrl: 'universal-descriptor.component.scss',
})
export class UniversalDescriptorComponent {

  @Output() onClickClose: EventEmitter<any> = new EventEmitter<any>()

  readonly contentId: string = 'universal-descriptor-iframe'

}
