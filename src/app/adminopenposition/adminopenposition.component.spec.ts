import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminopenpositionComponent } from './adminopenposition.component';

describe('AdminopenpositionComponent', () => {
  let component: AdminopenpositionComponent;
  let fixture: ComponentFixture<AdminopenpositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminopenpositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminopenpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
