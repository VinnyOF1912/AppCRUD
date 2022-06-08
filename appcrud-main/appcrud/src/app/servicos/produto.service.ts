import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Produto{
  id: number;
  descricao: string;
  valor: number;
}

@Injectable({ 
  providedIn: 'root'
})

export class ProdutoService {

  private url = 'http://localhost/apiAppCrud/apiProduto.php';

  constructor(private htpp: HttpClient) { }

  getAll(){
    return this.htpp.get<[Produto]>(this.url);
  }

  remove(id: any){
    return this.htpp.delete(this.url+'?id=' + id);
  }

  create(produto: Produto){
    return this.htpp.post(this.url, produto);
  }

  update(produto: Produto, id: any){
    return this.htpp.put(this.url+'?id=' + id, produto);
  }

}
