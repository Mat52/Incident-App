import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';

const routes: Routes = [
  { path: '', component: AppComponent },  // Domyślna ścieżka
  { path: 'about', component: IncidentFormComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
