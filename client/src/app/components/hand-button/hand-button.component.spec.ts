import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HandButtonComponent } from './hand-button.component';

describe('HandButtonComponent', () => {
  let component: HandButtonComponent;
  let fixture: ComponentFixture<HandButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HandButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HandButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
