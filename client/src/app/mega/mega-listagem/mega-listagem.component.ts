import { Services } from './../../service/services';
import { Router } from '@angular/router';
import { Mega } from './../../domain/mega';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mega-listagem',
  templateUrl: './mega-listagem.component.html',
  styleUrls: ['./mega-listagem.component.css'],
  providers: [Services]
})
export class MegaListagemComponent implements OnInit {

  listagemMega: Mega[] = [];

  constructor(private router: Router, private service: Services) { }

  ngOnInit() {
    this.getAllMega();
  }

  cadastrar() {
    this.router.navigate(['cadastro-mega']);
  }

  getAllMega() {
    this.service.getallMega().$observable.subscribe(mega => {
      this.listagemMega = mega;
    });
  }

  visualizar(item: Mega) {
    this.router.navigate(['/cadastro-mega', item.id]);
  }

  deletar(item) {
    this.service.deleteMega({ id: item.id }).$observable.subscribe(aut => {
      this.listagemMega.splice(this.listagemMega.indexOf(item), 1);
    });
  }
}
