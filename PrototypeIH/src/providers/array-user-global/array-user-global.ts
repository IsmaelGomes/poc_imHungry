import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the ArrayUserGlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArrayUserGlobalProvider {


  public arrayRetorno = [{ cpf: "00000000000", nome: "Any", senha: "pass", email: "mail", telefone: "phone"}];


  constructor() {
    
  }
  

}
