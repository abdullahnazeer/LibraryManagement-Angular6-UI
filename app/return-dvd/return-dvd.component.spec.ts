import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnDVDComponent } from './return-dvd.component';

describe('ReturnDVDComponent', () => {
  let component: ReturnDVDComponent;
  let fixture: ComponentFixture<ReturnDVDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnDVDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnDVDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
