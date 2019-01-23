import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenzijeAddComponent } from './recenzije-add.component';

describe('RecenzijeAddComponent', () => {
  let component: RecenzijeAddComponent;
  let fixture: ComponentFixture<RecenzijeAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecenzijeAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecenzijeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
