import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllgroupsComponent } from './allgroups.component';

describe('AllgroupsComponent', () => {
  let component: AllgroupsComponent;
  let fixture: ComponentFixture<AllgroupsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllgroupsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllgroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
