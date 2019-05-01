import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveDVDComponent } from './reserve-dvd.component';

describe('ReserveDVDComponent', () => {
  let component: ReserveDVDComponent;
  let fixture: ComponentFixture<ReserveDVDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveDVDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveDVDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
