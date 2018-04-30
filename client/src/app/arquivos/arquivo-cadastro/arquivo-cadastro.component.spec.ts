import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArquivoCadastroComponent } from './arquivo-cadastro.component';

describe('ArquivoCadastroComponent', () => {
  let component: ArquivoCadastroComponent;
  let fixture: ComponentFixture<ArquivoCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArquivoCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArquivoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
