import { Component } from '@angular/core';
import { TrackingTimelineComponent } from './components/tracking-timeline/tracking-timeline.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TrackingTimelineComponent], // 👈 se importa directamente
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
