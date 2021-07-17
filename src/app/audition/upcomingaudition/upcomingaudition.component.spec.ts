import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcomingauditionComponent } from './upcomingaudition.component';

describe('UpcomingauditionComponent', () => {
  let component: UpcomingauditionComponent;
  let fixture: ComponentFixture<UpcomingauditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpcomingauditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcomingauditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
