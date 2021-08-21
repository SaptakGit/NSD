import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtttermsComponent } from './ottterms.component';

describe('OtttermsComponent', () => {
  let component: OtttermsComponent;
  let fixture: ComponentFixture<OtttermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtttermsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtttermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
