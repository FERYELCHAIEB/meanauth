import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisityComponent } from './visity.component';

describe('VisityComponent', () => {
  let component: VisityComponent;
  let fixture: ComponentFixture<VisityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
