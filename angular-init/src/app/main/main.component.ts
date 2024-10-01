import { Component, OnInit } from '@angular/core';
import { VideoComponent } from '../video/video.component';
import { Video } from '../models/video.model';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [VideoComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  content = "main content";
  imgPath="assets/banana.png"
  title = 'Bababooey';
  subtitle = "Le streaming le moins complet du net";
  video1! : Video;
  video2! : Video;

  ngOnInit(): void {
    this.video1 = new Video("titanictamere", "/assets/videos/titanic.jpg", "un vieu qui tombe amoureux d'une fille de 20 piges, qui d'ailleurs peu importe son age ne vas pas au dessus de 25 ans", "à l'eau de rose");
    this.video2 = new Video("les dents de ta mere", "/assets/videos/jaws.jpg", "un requin qui s'est cru chez mamie et qui mange tout ce qui passe", "horreur");
  }
}
