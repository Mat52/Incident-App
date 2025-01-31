import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Incident } from '../models/incident.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'incident-form-component',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.scss'],
  imports: [CommonModule, FormsModule]
})
export class IncidentFormComponent {
  model = new Incident(8, 50, 50, "Incident", "Huge", "high", "me", "21.01.2025", "08:02", false);
  submitted = false;

  onSubmit(): void {
    this.submitted = true;
  }
}