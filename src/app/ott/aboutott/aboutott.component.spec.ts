import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutottComponent } from './aboutott.component';

describe('AboutottComponent', () => {
  let component: AboutottComponent;
  let fixture: ComponentFixture<AboutottComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutottComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutottComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
