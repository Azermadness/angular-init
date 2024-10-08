import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../models/video.model';
import { VideosService } from '../Services/videos.service';

@Component({
  selector: 'app-video-description',
  templateUrl: './video-description.component.html',
  styleUrls: ['./video-description.component.scss'],
})
export class VideoDescriptionComponent implements OnInit {
  videoId: number | undefined;
  video: Video | undefined;
  constructor(
    private route: ActivatedRoute,
    private videoService: VideosService
  ) {}
  ngOnInit(): void {
    // Récupération du paramètre 'videoId' depuis la route
    this.route.paramMap.subscribe((params) => {
      const id = params.get('videoId');
      if (id) {
        this.videoId = +id; // Convertir l'ID en nombre
        this.video = this.videoService.getVideoById(this.videoId);
      }
    });
  }
}
