import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailSubmissionViewComponent } from './detail-submission-view.component';

describe('DetailSubmissionViewComponent', () => {
  let component: DetailSubmissionViewComponent;
  let fixture: ComponentFixture<DetailSubmissionViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailSubmissionViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSubmissionViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
