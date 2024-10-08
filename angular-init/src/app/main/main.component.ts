import { Component } from '@angular/core';
import { VideoListComponent } from '../video-list/video-list.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [VideoListComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  content = "main content";
  imgPath="assets/banana.png"
  title = 'Bababooey';
  subtitle = "Le streaming le moins complet du net";
}
