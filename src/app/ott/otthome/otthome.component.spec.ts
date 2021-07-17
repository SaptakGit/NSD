import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtthomeComponent } from './otthome.component';

describe('OtthomeComponent', () => {
  let component: OtthomeComponent;
  let fixture: ComponentFixture<OtthomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtthomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtthomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
