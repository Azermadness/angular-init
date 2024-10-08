import { Component, OnInit } from '@angular/core';
import { VideoComponent } from '../video/video.component';
import { Video } from '../models/video.model';
import { VideosService } from '../Services/videos.service';

@Component({
  selector: 'app-video-list',
  standalone: true,
  imports: [VideoComponent],
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent {
  videos! : Video[];

  constructor(private videosService: VideosService) {

  }

  ngOnInit(): void {
    this.videos = this.videosService.getVideosList();
    
  }
}
