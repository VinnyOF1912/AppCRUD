import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Cliente, ClienteService } from 'src/app/servicos/cliente.service';

@Component({
  selector: 'app-modal-cliente',
  templateUrl: './modal-cliente.page.html',
  styleUrls: ['./modal-cliente.page.scss'],
})
export class ModalClientePage implements OnInit {

  @Input() c: Cliente;
  atualizar = false;
  
  dadosCliente = {
    nome:'',
    telefone: '',
    endereco: ''
  };

  constructor( private modalCtrl: ModalController, private service: ClienteService) { }

  ngOnInit() {
    if(this.c){
      this.dadosCliente = this.c;
      this.atualizar=true;
    }
  }

  fecharModal(){
    this.modalCtrl.dismiss();
  }

  enviarFormulario(form: NgForm){
    const cliente = form.value;
    if(this.atualizar){
      this.service.update(cliente, this.c.id).subscribe(resposta => {
        this.modalCtrl.dismiss(resposta);
    });
    }else{
      this.service.create(cliente).subscribe(resposta => {
        this.modalCtrl.dismiss();
      });
    }

  }

}
