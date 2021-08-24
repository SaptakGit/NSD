import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuditioncategoriesComponent } from './auditioncategories.component';

describe('AuditioncategoriesComponent', () => {
  let component: AuditioncategoriesComponent;
  let fixture: ComponentFixture<AuditioncategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuditioncategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuditioncategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
