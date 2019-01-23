import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavAddComponent } from './fav-add.component';

describe('FavAddComponent', () => {
  let component: FavAddComponent;
  let fixture: ComponentFixture<FavAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
