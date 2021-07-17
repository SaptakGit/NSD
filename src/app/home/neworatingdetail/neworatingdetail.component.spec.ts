import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeworatingdetailComponent } from './neworatingdetail.component';

describe('NeworatingdetailComponent', () => {
  let component: NeworatingdetailComponent;
  let fixture: ComponentFixture<NeworatingdetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeworatingdetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeworatingdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
