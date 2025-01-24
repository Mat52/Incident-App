import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'markers.json';

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }

  addMarker(newMarker: any): Observable<any> {
    // This is a placeholder for adding a marker.
    // In a real application, you would send a POST request to a backend server.
    console.log('New marker to add:', newMarker);
    return new Observable(observer => {
      observer.next(newMarker);
      observer.complete();
    });
  }
}