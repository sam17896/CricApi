import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingseriesComponent } from './ongoingseries.component';

describe('OngoingseriesComponent', () => {
  let component: OngoingseriesComponent;
  let fixture: ComponentFixture<OngoingseriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingseriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
