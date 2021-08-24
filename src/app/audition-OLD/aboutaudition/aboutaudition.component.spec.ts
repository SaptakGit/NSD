import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutauditionComponent } from './aboutaudition.component';

describe('AboutauditionComponent', () => {
  let component: AboutauditionComponent;
  let fixture: ComponentFixture<AboutauditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutauditionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutauditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
