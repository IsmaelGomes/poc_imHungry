import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-filial-detail',
  templateUrl: 'filial-detail.html',
})
export class FilialDetailPage {

  viewType : string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.viewType = 'menu';
  }

  ionViewDidLoad() {
    
  }

  segmentChanged(){
    console.log(this.viewType);  
  }

  goBack(): void{
    this.navCtrl.pop();
  }

}
