import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingTimelineComponent } from './tracking-timeline.component';

describe('TrackingTimelineComponent', () => {
  let component: TrackingTimelineComponent;
  let fixture: ComponentFixture<TrackingTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingTimelineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
