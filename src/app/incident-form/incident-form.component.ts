import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'incident-form-component',
  imports: [],
  templateUrl: './incident-form.component.html',
  styleUrl: './incident-form.component.scss'
})
export class IncidentFormComponent {
  fb: FormBuilder = new FormBuilder;
  incidentForm: FormGroup;  // Zmienna typu FormGroup
  title = 'Incident-App';
  constructor(private formBuilder: FormBuilder) {
    // Inicjalizujemy formularz w konstruktorze
    this.incidentForm = this.formBuilder.group({
      name: ['', Validators.required],  // Dodaj walidację na wymagane pole
      address: ['', Validators.required],
      description: ['', Validators.required]
    });
  }

  onSubmit(): void {
    console.log("form submitted", this.incidentForm.value)
  }
}
