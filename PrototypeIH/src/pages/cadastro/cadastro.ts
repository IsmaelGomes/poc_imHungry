import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { ArrayUserGlobalProvider } from '../../providers/array-user-global/array-user-global';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  nome: string;
  cpf: string;
  dataDeNascimento: string;
  email: string;
  senha: string;
  telefone: string;


  userCadastrado = new user();


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public singleton: ArrayUserGlobalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  Cadastrar() {

    const user = {cpf: this.cpf, nome: this.nome, senha: this.senha, email: this.email, telefone: this.telefone};
    

    this.singleton.arrayRetorno.push(user);

    this.navCtrl.push(LoginPage);

  }
  Cancelar() {
    this.navCtrl.push(LoginPage);
  }
}

class user {
  Nome;
  CPF;
  Data_de_Nascimento;
  Email;
  Senha;
  Telefone;
}
