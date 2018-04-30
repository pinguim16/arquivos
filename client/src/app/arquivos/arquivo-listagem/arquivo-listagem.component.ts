import { SelectItem } from 'primeng/primeng';
import { Services } from './../../service/services';
import { Router } from '@angular/router';
import { Arquivo } from './../../domain/arquivo';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arquivo-listagem',
  templateUrl: './arquivo-listagem.component.html',
  styleUrls: ['./arquivo-listagem.component.css'],
  providers: [Services]
})
export class ArquivoListagemComponent implements OnInit {

  listagemArquivo: Arquivo[] = [];
  listaAutor: SelectItem[] = [];

  constructor(private router: Router, private service: Services) { }

  ngOnInit() {
    this.getAllArquivo();
    this.getAllAutor();
  }

  cadastrar() {
    this.router.navigate(['cadastro-arquivo']);
  }

  getAllArquivo() {
    this.service.getallArquivo().$observable.subscribe(arq => {
      this.listagemArquivo = arq;
    });
  }

  visualizar(item: Arquivo) {
    this.router.navigate(['/cadastro-arquivo', item.id]);
  }

  deletar(item) {
    this.service.deleteArquivo({ id: item.id }).$observable.subscribe(arq => {
      this.listagemArquivo.splice(this.listagemArquivo.indexOf(item), 1);
    });
  }

  getAllAutor() {
    this.listaAutor.push({ label: 'Todos', value: null });
    this.service.getallAutor().$observable.subscribe(autors => {
      autors.forEach(autor => {
        this.listaAutor.push({ label: autor.nome, value: autor.nome });
      });
    });
  }
}
