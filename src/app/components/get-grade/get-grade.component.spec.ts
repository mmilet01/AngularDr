import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGradeComponent } from './get-grade.component';

describe('GetGradeComponent', () => {
  let component: GetGradeComponent;
  let fixture: ComponentFixture<GetGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
