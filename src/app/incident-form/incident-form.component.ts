import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'incident-form-component',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.scss']
})
export class IncidentFormComponent implements OnInit {
  incidentForm: FormGroup;
  apiKey: string = ''; // Replace with your actual API key
  incidents: any[] = []; // Local storage for incidents

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.incidentForm = this.formBuilder.group({
      incidentName: ['', Validators.required],
      streetNumber: ['', Validators.required],
      priority: ['Medium', Validators.required],
      requestedBy: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString().split('T')[0];
    const formattedTime = currentDate.toTimeString().split(' ')[0].slice(0, 5);

    this.incidentForm.patchValue({
      date: formattedDate,
      time: formattedTime
    });
  }

  onSubmit(): void {
    const streetNumber = this.incidentForm.get('streetNumber')?.value;
    this.getCoordinates(streetNumber).subscribe((location) => {
      const incidentData = {
        ...this.incidentForm.value,
        coordinates: location
      };
      this.incidents.push(incidentData);
      console.log('Incident data saved:', JSON.stringify(this.incidents, null, 2));
    });
  }

  getCoordinates(address: string) {
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${this.apiKey}`;
    return this.http.get(url).pipe(
      map((response: any) => {
        if (response.results && response.results.length > 0) {
          const location = response.results[0].geometry.location;
          return { lat: location.lat, lng: location.lng };
        }
        throw new Error('No results found');
      })
    );
  }
}