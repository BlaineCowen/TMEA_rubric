import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubricGridComponent } from './rubric-grid.component';

describe('RubricGridComponent', () => {
  let component: RubricGridComponent;
  let fixture: ComponentFixture<RubricGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubricGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RubricGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
