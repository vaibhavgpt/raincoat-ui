import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var H: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  private platform: any;
  private behavior: any;

  @ViewChild("map",  {static: false})
  public mapElement: ElementRef;

  constructor() {
    this.platform = new H.service.Platform({
      "app_id": "uS4lUFB3BWzvyTMEhet3",
      "app_code": "uS4lUFB3BWzvyTMEhet3"
    });
  }

  ngOnInit() {
  }

  setUpClickListener(map) {
    // Attach an event listener to map display
    // obtain the coordinates and display in an alert box.
    map.addEventListener('tap', function (evt) {
      var coord = map.screenToGeo(evt.currentPointer.viewportX,
              evt.currentPointer.viewportY);
      alert('Clicked at ' + Math.abs(coord.lat.toFixed(4)) +
          ((coord.lat > 0) ? 'N' : 'S') +
          ' ' + Math.abs(coord.lng.toFixed(4)) +
           ((coord.lng > 0) ? 'E' : 'W'));
    });
  }

  ngAfterViewInit() {
    let defaultLayers = this.platform.createDefaultLayers();
    let map = new H.Map(
        this.mapElement.nativeElement,
        defaultLayers.normal.map,
        {
            zoom: 10,
            center: { lat: 18.9961, lng: 72.8393 }
        }
    );
    this.behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    this.setUpClickListener(map);
  }

}
