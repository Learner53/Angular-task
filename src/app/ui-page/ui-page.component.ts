import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ApiService } from '../api.service';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-ui-page',
  templateUrl: './ui-page.component.html',
  styleUrls: ['./ui-page.component.css']
})
export class UiPageComponent implements OnInit {
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  // @ViewChild('gmap') gmapElement: any;

  public apiData;
  public showCity;
  selectStatus;
  public testValue;

  public cityName;
  map: google.maps.Map;
  lat = 40.730610;
  lng = -73.935242;
  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 8,
  };
  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });
  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
   }
  constructor(private _apiService: ApiService) { }
  ngOnInit() {
    this.getApiData();
    this.mapInitializer();
    this.selectStatus =false;
    // this.testValue ='City Name';
  }
  getApiData() {
       this._apiService.getApiData().subscribe(
         data => { this.apiData = data;
        console.log(this.apiData);

        },
         err => console.error(err)
        );
     }

     somethingChanged(onchange) {
      this.selectStatus =onchange.returnValue;
      this.testValue='';
      console.log(onchange);
      console.log(this.selectStatus);
      // this.cityName = document.getElementById("cityState").innerHTML;
      // document.getElementById("showCity").innerHTML=this.cityName;
    }
    getCityData(city){
      console.log(city);
    }
}
