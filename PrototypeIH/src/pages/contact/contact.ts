import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FilialDetailPage } from '../filial-detail/filial-detail';
import { EstablisPage } from '../establis/establis';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  modalCtrl: any;
  constructor(public navCtrl: NavController) {

  }

  openPlates(): void{
    this.navCtrl.push(FilialDetailPage);
  }

  openEstablis(): void{
    this.navCtrl.push(EstablisPage);
  }

}
