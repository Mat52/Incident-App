import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { MapComponent } from './map/map.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

export const routes: Routes = [
  { path: '', component: AboutComponentComponent },  // Domyślna ścieżka
  { path: 'addRequest', component: IncidentFormComponent },
  { path: 'map', component: MapComponent },
  { path: 'contact-us',component: ContactUsComponent},
  { path: '**', redirectTo: '' }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
