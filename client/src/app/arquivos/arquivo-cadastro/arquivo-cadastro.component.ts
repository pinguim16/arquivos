import { ActivatedRoute, Router } from '@angular/router';
import { Arquivo } from './../../domain/arquivo';
import { Component, OnInit } from '@angular/core';
import { Services } from './../../service/services';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-arquivo-cadastro',
  templateUrl: './arquivo-cadastro.component.html',
  styleUrls: ['./arquivo-cadastro.component.css'],
  providers: [Services]
})
export class ArquivoCadastroComponent implements OnInit {

  arquivo: Arquivo = new Arquivo();
  listaMega: SelectItem[];
  listaAutor: SelectItem[];
  id: any;

  constructor(private router: Router,
    private services: Services,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.listaMega = [];
    this.listaAutor = [];

    this.getAllAutor();
    this.getAllMega();

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
      if (this.id)
        this.carregaArquivo(this.id);
    });
  }

  carregaArquivo(id: any) {
    this.services.getArquivo({ id: id }).$observable.subscribe(arq => {
      Arquivo.instanciarObjetoVazios(arq);
      this.arquivo = arq;
    });
  }

  salvar(form) {
    Arquivo.checkNullObjetos(this.arquivo);
    if (this.arquivo.id == null || this.arquivo.id == undefined) {
      this.services.saveArquivo(this.arquivo).$observable.subscribe(arq => {
        this.redirectListagem();
      });
    } else {
      this.services.updateArquivo(this.arquivo).$observable.subscribe(arq => {
        this.redirectListagem();
      });
    }
  }

  redirectListagem() {
    this.router.navigate(['listagem-arquivo']);
  }

  cancelar() {
    this.router.navigate(['listagem-arquivo']);
  }

  getAllMega() {
    this.listaMega.push({ label: '', value: '' });
    this.services.getallMega().$observable.subscribe(arqs => {
      arqs.forEach(arq => {
        this.listaMega.push({ label: arq.nome, value: arq.id });
      });
    });
  }

  getAllAutor() {
    this.listaAutor.push({ label: '', value: '' });
    this.services.getallAutor().$observable.subscribe(autors => {
      autors.forEach(autor => {
        this.listaAutor.push({ label: autor.nome, value: autor.id });
      });
    });
  }
}
