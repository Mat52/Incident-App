import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";
import { isPlatformBrowser } from '@angular/common';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title = 'google-maps';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const loader = new Loader({
        apiKey: 'api'  // Upewnij się, że używasz prawidłowego klucza API
      });

      loader.load().then(() => {
        console.log('Google Maps API loaded');
        const mapElement = document.getElementById('map');
        if (mapElement) {
          new google.maps.Map(mapElement, {
            center: { lat: 51.55343, lng: 6.6454554 },
            zoom: 6
          });
        } else {
          console.error('Element mapy nie został znaleziony!');
        }
      }).catch(error => {
        console.error('Błąd ładowania Google Maps API:', error);
      });
    }
  }
}

