import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaListagemComponent } from './mega-listagem.component';

describe('MegaListagemComponent', () => {
  let component: MegaListagemComponent;
  let fixture: ComponentFixture<MegaListagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaListagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
