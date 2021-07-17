import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeworatinglistComponent } from './neworatinglist.component';

describe('NeworatinglistComponent', () => {
  let component: NeworatinglistComponent;
  let fixture: ComponentFixture<NeworatinglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NeworatinglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NeworatinglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
