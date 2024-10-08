import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoDescriptionComponent } from './video-description/video-description.component';

export const routes: Routes = [
    { path : '', component: MainComponent},
    { path : 'videos', component: VideoListComponent},
    { path : 'videos/:videoId', component: VideoDescriptionComponent}
];
