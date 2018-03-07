import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { ArrayUserGlobalProvider } from '../../providers/array-user-global/array-user-global';
import { CadastroPage } from '../cadastro/cadastro';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public singleton: ArrayUserGlobalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(): void {

    const validaLogin = this.singleton.arrayRetorno.find(x => x.email == this.email);
    if (typeof validaLogin === "undefined") {
      alert('Usuário não encontrado!');
    }
    else
      this.navCtrl.push(TabsPage);
  }

  chamarCadastro() {
    console.log("passei");
    this.navCtrl.push(CadastroPage);
    
  }

}
