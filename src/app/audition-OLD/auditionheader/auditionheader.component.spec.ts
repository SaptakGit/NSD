import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditionheaderComponent } from './auditionheader.component';

describe('AuditionheaderComponent', () => {
  let component: AuditionheaderComponent;
  let fixture: ComponentFixture<AuditionheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditionheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditionheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
