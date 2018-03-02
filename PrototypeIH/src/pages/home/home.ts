import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapRef: ElementRef;
  constructor(public navCtrl: NavController) {

  }

  nearbyLocations = [
    {name: 'Estação Café', latitude: -8.029628, longitude: -34.886790},
    {name: 'MC Donalds da vida', latitude: -8.029240, longitude: -34.886881},
    {name: 'Burger King da vida', latitude: -8.028635, longitude: -34.886007},
    {name: 'Bobs da Vida', latitude: -8.028443, longitude: -34.883121},
    {name: 'Club Açai', latitude: -8.030791, longitude: -34.881704},
    {name: 'Big Boorguer', latitude: -8.026914, longitude: -34.883174},
    {name: 'Mago e Will Doces e Salgados', latitude: -8.027344, longitude: -34.879940}
  ]

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){
    const location = new google.maps.LatLng(-8.0283658, -34.885443399999986);

    const options = {
      center: location,
      zoom: 17,
      streetViewControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMyMarker(location, map);
    
    for(var i in this.nearbyLocations){
      var itemPosition = new google.maps.LatLng(this.nearbyLocations[i].latitude, this.nearbyLocations[i].longitude);
      this.addMarkers(this.nearbyLocations[i].name, itemPosition, map);
    }
  }

  addMyMarker(position, map){
    const  pinColor = 'FE7569';

    const pinImage = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_letter&chld=%E2%80%A2|" + pinColor,
      new google.maps.Size(21, 34),
      new google.maps.Point(0,0),
      new google.maps.Point(10, 34));
    
    const pinShadow = new google.maps.MarkerImage("http://chart.apis.google.com/chart?chst=d_map_pin_shadow",
      new google.maps.Size(40, 37),
      new google.maps.Point(0, 0),
      new google.maps.Point(12, 35));

      return new google.maps.Marker({
        position: position,
        map: map,
        title: 'Você',        
        icon: pinImage,
        shadow: pinShadow
      });
  }

  addMarkers(title, position, map){
    return new google.maps.Marker({
      position: position,
      map: map,
      title: title
    });
  }

}
