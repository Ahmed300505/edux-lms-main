import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyeventsComponent } from './studyevents.component';

describe('StudyeventsComponent', () => {
  let component: StudyeventsComponent;
  let fixture: ComponentFixture<StudyeventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyeventsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudyeventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
