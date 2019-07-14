import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAgendaComponent } from './create-agenda.component';

describe('CreateAgendaComponent', () => {
  let component: CreateAgendaComponent;
  let fixture: ComponentFixture<CreateAgendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAgendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
