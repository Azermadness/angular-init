import { Injectable } from '@angular/core';
import { Video } from '../models/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  private videos : Video[] = [new Video(1,
    "titanictamere",
    "/assets/videos/titanic.jpg",
    "un vieu qui tombe amoureux d'une fille de 20 piges, qui d'ailleurs peu importe son age ne vas pas au dessus de 25 ans",
    "à l'eau de rose"),
    new Video(2,
      "les dents de ta mere",
      "/assets/videos/jaws.jpg",
      "un requin qui s'est cru chez mamie et qui mange tout ce qui passe",
      "horreur"
    ),
    new Video(3,
      "leon le coincé social",
      "/assets/videos/leon.jpg",
      "si il n'etait pas chez lui au début du film la fin aurait été beaucoup plus triste",
      "drame"
    )
  ];
  constructor() { }

  getVideosList(): Video[] {
    return this.videos;
  }
  getVideoById(id: number): Video {
    for (const video of this.videos) {
      if (id == video.id) {
        return video;
      }
    }
    return this.videos[0];
  }
}
