import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditiontcComponent } from './auditiontc.component';

describe('AuditiontcComponent', () => {
  let component: AuditiontcComponent;
  let fixture: ComponentFixture<AuditiontcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditiontcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditiontcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
