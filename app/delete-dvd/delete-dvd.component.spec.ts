import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDVDComponent } from './delete-dvd.component';

describe('DeleteDVDComponent', () => {
  let component: DeleteDVDComponent;
  let fixture: ComponentFixture<DeleteDVDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteDVDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDVDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
