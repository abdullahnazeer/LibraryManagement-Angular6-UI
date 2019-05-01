import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayDVDsComponent } from './display-dvds.component';

describe('DisplayDVDsComponent', () => {
  let component: DisplayDVDsComponent;
  let fixture: ComponentFixture<DisplayDVDsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayDVDsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayDVDsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
