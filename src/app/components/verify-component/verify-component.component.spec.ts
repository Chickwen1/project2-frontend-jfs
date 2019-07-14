import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyComponentComponent } from './verify-component.component';

describe('VerifyComponentComponent', () => {
  let component: VerifyComponentComponent;
  let fixture: ComponentFixture<VerifyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerifyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
