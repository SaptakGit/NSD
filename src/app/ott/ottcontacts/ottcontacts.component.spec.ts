import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttcontactsComponent } from './ottcontacts.component';

describe('OttcontactsComponent', () => {
  let component: OttcontactsComponent;
  let fixture: ComponentFixture<OttcontactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttcontactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttcontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
