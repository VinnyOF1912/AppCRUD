import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalProdutoPageRoutingModule } from './modal-produto-routing.module';

import { ModalProdutoPage } from './modal-produto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalProdutoPageRoutingModule
  ],
  declarations: [ModalProdutoPage]
})
export class ModalProdutoPageModule {}
