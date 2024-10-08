import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../models/video.model';
import { RouterLink } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [ RouterLink, RouterOutlet ],
  templateUrl: './video.component.html',
  styleUrl: './video.component.scss'
})
export class VideoComponent {
  @Input() video! : Video;
}