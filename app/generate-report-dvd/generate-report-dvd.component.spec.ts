import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateReportDVDComponent } from './generate-report-dvd.component';

describe('GenerateReportDVDComponent', () => {
  let component: GenerateReportDVDComponent;
  let fixture: ComponentFixture<GenerateReportDVDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateReportDVDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateReportDVDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
