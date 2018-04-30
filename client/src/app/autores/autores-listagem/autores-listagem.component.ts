import { Services } from './../../service/services';
import { Router } from '@angular/router';
import { Autor } from './../../domain/autor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores-listagem',
  templateUrl: './autores-listagem.component.html',
  styleUrls: ['./autores-listagem.component.css'],
  providers: [Services]
})
export class AutoresListagemComponent implements OnInit {

  listagemAutores: Autor[] = [];

  constructor(private router: Router, private service: Services) { }

  ngOnInit() {
    this.getAllAutor();
  }

  cadastrar() {
    this.router.navigate(['cadastro-autores']);
  }

  getAllAutor() {
    this.service.getallAutor().$observable.subscribe(autores => {
      this.listagemAutores = autores;
    });
  }

  visualizar(item: Autor) {
    this.router.navigate(['/cadastro-autores', item.id]);
  }

  deletar(item) {
    this.service.deleteAutor({ id: item.id }).$observable.subscribe(aut => {
      this.listagemAutores.splice(this.listagemAutores.indexOf(item), 1);
    });
  }
}
