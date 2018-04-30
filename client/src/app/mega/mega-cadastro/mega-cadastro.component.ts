import { Services } from './../../service/services';
import { Router, ActivatedRoute } from '@angular/router';
import { Mega } from './../../domain/mega';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mega-cadastro',
  templateUrl: './mega-cadastro.component.html',
  styleUrls: ['./mega-cadastro.component.css'],
  providers: [Services]
})
export class MegaCadastroComponent implements OnInit {

  mega: Mega = new Mega();

  constructor(private router: Router,
    private services: Services,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    const id = this.activatedRoute.snapshot.params['id'];
    if (id) {
      this.services.getMega({ id: id }).$observable.subscribe(mega => {
        this.mega = mega;
      });
    }
  }

  salvar(form) {
    if (this.mega.id == null || this.mega.id == undefined) {
      this.services.saveMega(this.mega).$observable.subscribe(mega => {
        this.redirectListagem();
      });
    } else {
      this.services.updateMega(this.mega).$observable.subscribe(mega => {
        this.redirectListagem();
      });
    }
  }

  redirectListagem() {
    this.router.navigate(['listagem-mega']);
  }

  cancelar() {
    this.router.navigate(['listagem-mega']);
  }
}
