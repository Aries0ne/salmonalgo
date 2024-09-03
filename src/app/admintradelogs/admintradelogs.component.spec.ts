import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintradelogsComponent } from './admintradelogs.component';

describe('AdmintradelogsComponent', () => {
  let component: AdmintradelogsComponent;
  let fixture: ComponentFixture<AdmintradelogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmintradelogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmintradelogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
