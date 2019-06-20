import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var H: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private platform: any;

  @ViewChild("map",  {static: false})
  public mapElement: ElementRef;

  constructor() {
    this.platform = new H.service.Platform({
      "app_id": "APP-ID-HERE",
      "app_code": "APP-CODE-HERE"
    });
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    let map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.normal.map,
        {
            zoom: 10,
            center: { lat: 37.7397, lng: -121.4252 }
        }
    );
}

}
