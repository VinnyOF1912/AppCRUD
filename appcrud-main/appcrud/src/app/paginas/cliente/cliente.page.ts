import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servicos/cliente.service';
import { ModalClientePage } from '../modal-cliente/modal-cliente.page';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.page.html',
  styleUrls: ['./cliente.page.scss'],
})

export class ClientePage implements OnInit {

  clientes: Cliente[];

  constructor( private service: ClienteService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.service.getAll().subscribe(resposta => {
      this.clientes = resposta;
    });
  }

  remover(id: any){
    this.service.remove(id).subscribe(() => {
      this.service.getAll().subscribe(resposta => {
        this.clientes = resposta;
      });
    });
  }

  novoCliente(){
    this.modalCtrl.create({
      component: ModalClientePage
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) => {
      this.service.getAll().subscribe(resposta => {
        this.clientes = resposta;
      });
    });
  }

  atualizar(c:Cliente){
    this.modalCtrl.create({
      component: ModalClientePage,
      componentProps: {c}
    }).then(modal => {
      modal.present();
      return modal.onDidDismiss();
    }).then(({data}) => {
      this.service.getAll().subscribe(resposta => {
        this.clientes = resposta;
      });
    });
  }

  

}
