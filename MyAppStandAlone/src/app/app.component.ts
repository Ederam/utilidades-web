import { Component } from '@angular/core';
import { TrackingTimelineComponent } from './components/tracking-timeline/tracking-timeline.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TrackingTimelineComponent],
  template: `<app-tracking-timeline></app-tracking-timeline>`
})
export class AppComponent {}
