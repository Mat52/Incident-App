import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IncidentFormComponent } from './incident-form/incident-form.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IncidentFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

}
