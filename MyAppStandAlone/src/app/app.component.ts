import { Component } from '@angular/core';
import { TrackingTimelineComponent } from './components/tracking-timeline/tracking-timeline.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TrackingTimelineComponent],
  template: `
    <h1>Tracking App</h1>
    <app-tracking-timeline [estado]="'Entrega-Oficina'"></app-tracking-timeline>
  `
})
export class AppComponent {}
