import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OttprivecyComponent } from './ottprivecy.component';

describe('OttprivecyComponent', () => {
  let component: OttprivecyComponent;
  let fixture: ComponentFixture<OttprivecyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OttprivecyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OttprivecyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
