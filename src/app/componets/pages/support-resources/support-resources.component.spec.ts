import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportResourcesComponent } from './support-resources.component';

describe('SupportResourcesComponent', () => {
  let component: SupportResourcesComponent;
  let fixture: ComponentFixture<SupportResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportResourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SupportResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
