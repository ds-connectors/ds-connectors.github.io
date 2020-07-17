import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PythonReferenceComponent } from './python-reference.component';

describe('PythonReferenceComponent', () => {
  let component: PythonReferenceComponent;
  let fixture: ComponentFixture<PythonReferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PythonReferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PythonReferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
