import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosepositionComponent } from './closeposition.component';

describe('ClosepositionComponent', () => {
  let component: ClosepositionComponent;
  let fixture: ComponentFixture<ClosepositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClosepositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosepositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
