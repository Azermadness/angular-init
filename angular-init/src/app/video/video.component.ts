import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [ ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent implements OnInit {
  @Input() video! : Video;
  like! : boolean;
  note! : number;

  ngOnInit(): void {
    this.like = false;
    this.note = 0;
  }

  onAddLike(): void {
    this.like = !this.like;
  }

  plusNote(): void {
    this.note++;
  }

  minusNote(): void {
    this.note--;
  }
}