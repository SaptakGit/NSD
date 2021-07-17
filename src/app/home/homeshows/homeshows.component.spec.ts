import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeshowsComponent } from './homeshows.component';

describe('HomeshowsComponent', () => {
  let component: HomeshowsComponent;
  let fixture: ComponentFixture<HomeshowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeshowsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
