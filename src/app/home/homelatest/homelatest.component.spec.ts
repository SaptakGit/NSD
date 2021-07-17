import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomelatestComponent } from './homelatest.component';

describe('HomelatestComponent', () => {
  let component: HomelatestComponent;
  let fixture: ComponentFixture<HomelatestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomelatestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomelatestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
