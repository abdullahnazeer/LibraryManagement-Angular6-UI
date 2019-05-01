import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnFineDialogComponent } from './return-fine-dialog.component';

describe('ReturnFineDialogComponent', () => {
  let component: ReturnFineDialogComponent;
  let fixture: ComponentFixture<ReturnFineDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnFineDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnFineDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
