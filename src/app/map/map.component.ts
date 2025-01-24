import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Loader } from "@googlemaps/js-api-loader";
import { isPlatformBrowser } from '@angular/common';
import { DataService } from '../data.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  title = 'google-maps';
  markers: any[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private dataService: DataService) { }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const loader = new Loader({
        apiKey: 'api'  // Ensure you use a valid API key
      });

      loader.load().then(() => {
        console.log('Google Maps API loaded');
        const mapElement = document.getElementById('map');
        if (mapElement) {
          const map = new google.maps.Map(mapElement, {
            center: { lat: 50.065200, lng: 19.96500 },
            zoom: 15
          });
          console.log("Map initialized");

          // Fetch markers using DataService
          this.dataService.getData().subscribe((response: any[]) => {
            this.markers = response;
            console.log('Markers fetched:', this.markers);
            this.addMarkersToMap(map, this.markers);
          }, error => {
            console.error('Error fetching markers:', error);
          });
        } else {
          console.error('Map element not found!');
        }
      }).catch(error => {
        console.error('Error loading Google Maps API:', error);
      });
    }
  }

  /**
   * Adds markers to the Google Map.
   * @param map - The Google Map instance.
   * @param markers - Array of marker data.
   */
  private addMarkersToMap(map: google.maps.Map, markers: any[]): void {
    markers.forEach(markerData => {
      const marker = new google.maps.Marker({
        position: { lat: markerData.latitude, lng: markerData.longitude },
        map: map,
        title: markerData.incidentName,
        icon: markerData.isResolved ? 'http://maps.google.com/mapfiles/ms/icons/green-dot.png' : undefined
      });

      // Create content for the info window
      const contentString = `
        <div>
          <h3>${markerData.incidentName} (ID: ${markerData.id})</h3>
          <p><strong>Street Number:</strong> ${markerData.streetNumber}</p>
          <p><strong>Priority:</strong> ${markerData.priority}</p>
          <p><strong>Requested By:</strong> ${markerData.requestedBy}</p>
          <p><strong>Date:</strong> ${markerData.date}</p>
          <p><strong>Time:</strong> ${markerData.time}</p>
          <p><strong>Resolved:</strong> ${markerData.isResolved ? 'Yes' : 'No'}</p>
        </div>
      `;

      const infoWindow = new google.maps.InfoWindow({
        content: contentString
      });

      marker.addListener('click', () => {
        infoWindow.open(map, marker);
      });
    });
  }
}