import { Component, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-filial-detail',
  templateUrl: 'filial-detail.html',
})
export class FilialDetailPage {

  viewType : string;
  isMenu: boolean;

  menuData = [
    {name: 'Gran Gourmet', description: 'blablablablablablablablablablablablablablablablablablablablablablablabla', rate: 5, image: 'assets/imgs/menu-item-1.png', price: 16.89},
    {name: 'Cookies Shake', description: 'blablablablablablablablablablablablablablablablablablablablablablablabla', rate: 5, image: 'assets/imgs/menu-item-2.png', price: 7.89},
    {name: 'Combo Júnior', description: 'blablablablablablablablablablablablablablablablablablablablablablablabla', rate: 5, image: 'assets/imgs/menu-item-3.png', price: 31.89},
    {name: 'Gran Gourmet', description: 'blablablablablablablablablablablablablablablablablablablablablablablabla', rate: 5, image: 'assets/imgs/menu-item-1.png', price: 16.89},
    {name: 'Cookies Shake', description: 'blablablablablablablablablablablablablablablablablablablablablablablabla', rate: 5, image: 'assets/imgs/menu-item-2.png', price: 7.89},
    {name: 'Combo Júnior', description: 'blablablablablablablablablablablablablablablablablablablablablablablabla', rate: 5, image: 'assets/imgs/menu-item-3.png', price: 31.89},
    {name: 'Gran Gourmet', description: 'blablablablablablablablablablablablablablablablablablablablablablablabla', rate: 5, image: 'assets/imgs/menu-item-1.png', price: 16.89},
    {name: 'Cookies Shake', description: 'blablablablablablablablablablablablablablablablablablablablablablablabla', rate: 5, image: 'assets/imgs/menu-item-2.png', price: 7.89},
    {name: 'Combo Júnior', description: 'blablablablablablablablablablablablablablablablablablablablablablablabla', rate: 5, image: 'assets/imgs/menu-item-3.png', price: 31.89},
    {name: 'Gran Gourmet', description: 'blablablablablablablablablablablablablablablablablablablablablablablabla', rate: 5, image: 'assets/imgs/menu-item-1.png', price: 16.89},
    {name: 'Cookies Shake', description: 'blablablablablablablablblablablablablablablablablablablablablablablablaa', rate: 5, image: 'assets/imgs/menu-item-2.png', price: 7.89},
    {name: 'Combo Júnior', description: 'blablablablablablablablablablablablablablablablablablablablablablablabla', rate: 5, image: 'assets/imgs/menu-item-3.png', price: 31.89},
    {name: 'Gran Gourmet', description: 'blablablablablablablablablablablablablablablablablablablablablablablabla', rate: 5, image: 'assets/imgs/menu-item-1.png', price: 16.89},
    {name: 'Cookies Shake', description: 'blablablablablablablablablablablablablablablablablablablablablablablabla', rate: 5, image: 'assets/imgs/menu-item-2.png', price: 7.89},
    {name: 'Combo Júnior', description: 'blablablablablablablablablablablablablablablablablablablablablablablabla', rate: 5, image: 'assets/imgs/menu-item-3.png', price: 31.89}
  ];

  cartData = [
    ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private detector: ChangeDetectorRef) {
    this.viewType = 'menu';
    this.isMenu = true;
  }

  ionViewDidLoad() {
    
  }

  canFinalize(){
    return this.cartData.length > 0;
  }

  segmentChanged(){
    console.log(this.viewType);
    this.detector.detectChanges();
    console.log(this.menuData);
  }

  goBack(): void{
    this.navCtrl.pop();
  }

  filterItems(ev: any): void {

  }

  finalizarCompra():void{
    this.cartData = [];
    this.detector.detectChanges();
    alert('Compra Realizada Com Sucesso. Aguarde a confirmação do pedido.');
  }

  addToCart(menuitem: any): void{
    this.cartData.push(menuitem);
    alert('Item Adicionado Com Sucesso.')
  }

  removeFromCart(menuitem: any): void{
    const index = this.cartData.indexOf(menuitem.name);
    this.cartData.splice(index,1);
    this.detector.detectChanges();
    alert('Item Removido Com Sucesso.');
  }

  onScroll(): void{
    this.detector.markForCheck();
  }
}
