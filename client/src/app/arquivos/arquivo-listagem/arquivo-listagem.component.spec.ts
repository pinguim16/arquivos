import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoListagemComponent } from './arquivo-listagem.component';

describe('ArquivoListagemComponent', () => {
  let component: ArquivoListagemComponent;
  let fixture: ComponentFixture<ArquivoListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivoListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivoListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
