import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CopytradedetailsComponent } from './copytradedetails.component';

describe('CopytradedetailsComponent', () => {
  let component: CopytradedetailsComponent;
  let fixture: ComponentFixture<CopytradedetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CopytradedetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CopytradedetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
