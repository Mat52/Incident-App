import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';
import { AboutComponentComponent } from './about-component/about-component.component';

export const routes: Routes = [
  { path: '', component: AboutComponentComponent },  // Domyślna ścieżka
  { path: 'addRequest', component: IncidentFormComponent },
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
