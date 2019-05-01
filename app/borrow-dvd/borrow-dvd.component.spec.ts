import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowDVDComponent } from './borrow-dvd.component';

describe('BorrowDVDComponent', () => {
  let component: BorrowDVDComponent;
  let fixture: ComponentFixture<BorrowDVDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BorrowDVDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrowDVDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
