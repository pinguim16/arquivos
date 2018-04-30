import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MegaCadastroComponent } from './mega-cadastro.component';

describe('MegaCadastroComponent', () => {
  let component: MegaCadastroComponent;
  let fixture: ComponentFixture<MegaCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MegaCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MegaCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
