import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudyYearComponent } from './add-study-year.component';

describe('AddStudyYearComponent', () => {
  let component: AddStudyYearComponent;
  let fixture: ComponentFixture<AddStudyYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddStudyYearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddStudyYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
