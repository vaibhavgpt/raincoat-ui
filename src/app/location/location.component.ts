import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  isTracking = false;
  currentLat: any;
  currentLong: any;

  constructor() { }

  ngOnInit() {
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.showPosition(position);
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }

  showPosition(position) {
    this.currentLat = position.coords.latitude;
    this.currentLong = position.coords.longitude;
  }
  
trackMe() {
  if (navigator.geolocation) {
    this.isTracking = true;
    navigator.geolocation.watchPosition((position) => {
      this.showTrackingPosition(position);
    });
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

showTrackingPosition(position) {
  this.currentLat = position.coords.latitude;
  this.currentLong = position.coords.longitude;
  }
}
