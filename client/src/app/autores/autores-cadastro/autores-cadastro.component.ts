import { Services } from './../../service/services';
import { Router, ActivatedRoute } from '@angular/router';
import { Autor } from './../../domain/autor';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autores-cadastro',
  templateUrl: './autores-cadastro.component.html',
  styleUrls: ['./autores-cadastro.component.css'],
  providers: [Services]
})
export class AutoresCadastroComponent implements OnInit {

  autor: Autor = new Autor();

  constructor(private router: Router,
    private services: Services,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.services.getAutor({ id: id }).$observable.subscribe(autor => {
        this.autor = autor;
      });
    }
  }

  salvar(form) {
    if (this.autor.id == null || this.autor.id == undefined) {
      this.services.saveAutor(this.autor).$observable.subscribe(autor => {
        this.redirectListagem();
      });
    } else {
      this.services.updateAutor(this.autor).$observable.subscribe(autor => {
        this.redirectListagem();
      });
    }
  }

  redirectListagem() {
    this.router.navigate(['listagem-autores']);
  }

  cancelar() {
    this.router.navigate(['listagem-autores']);
  }
}
