import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {MatDialogContent} from "@angular/material/dialog";
import {MatCard, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatProgressBar} from "@angular/material/progress-bar";

@Component({
  standalone: true,
  selector: 'universal-descriptor',
  imports: [
    MatDialogContent,
    MatCard,
    MatCardContent,
    MatCardTitle,
    MatIconButton,
    MatIcon,
    MatProgressBar
  ],
  templateUrl: 'universal-descriptor.component.html',
  styleUrl: 'universal-descriptor.component.scss',
})
export class UniversalDescriptorComponent implements OnInit {

  @Output() onClickClose: EventEmitter<any> = new EventEmitter<any>()

  frameLoading: boolean = false

  readonly contentId: string = 'universal-descriptor-iframe'

  ngOnInit(): void {
    this.frameLoading = true
    const el = document.getElementById('iframe-container')
    const iframe = document.createElement('iframe')
    iframe.onload = () => this.frameLoading = false
    iframe.id = this.contentId
    iframe.src = 'https://master--study-together-universal-descriptor.netlify.app/'
    iframe.style.border = 'none'
    iframe.style.width = 'calc(100% - 2px)'
    iframe.style.height = '100%'
    el?.appendChild(iframe)
  }

}
