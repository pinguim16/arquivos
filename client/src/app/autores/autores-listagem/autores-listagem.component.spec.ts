import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoresListagemComponent } from './autores-listagem.component';

describe('AutoresListagemComponent', () => {
  let component: AutoresListagemComponent;
  let fixture: ComponentFixture<AutoresListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoresListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoresListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
