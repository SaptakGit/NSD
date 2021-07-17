import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttheaderComponent } from './ottheader.component';

describe('OttheaderComponent', () => {
  let component: OttheaderComponent;
  let fixture: ComponentFixture<OttheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttheaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
