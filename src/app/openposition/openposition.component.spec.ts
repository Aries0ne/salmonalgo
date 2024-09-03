import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenpositionComponent } from './openposition.component';

describe('OpenpositionComponent', () => {
  let component: OpenpositionComponent;
  let fixture: ComponentFixture<OpenpositionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OpenpositionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OpenpositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
