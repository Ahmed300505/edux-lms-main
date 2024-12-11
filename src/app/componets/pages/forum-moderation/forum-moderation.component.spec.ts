import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumModerationComponent } from './forum-moderation.component';

describe('ForumModerationComponent', () => {
  let component: ForumModerationComponent;
  let fixture: ComponentFixture<ForumModerationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForumModerationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ForumModerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
