import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmarketwatchComponent } from './adminmarketwatch.component';

describe('AdminmarketwatchComponent', () => {
  let component: AdminmarketwatchComponent;
  let fixture: ComponentFixture<AdminmarketwatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminmarketwatchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminmarketwatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
