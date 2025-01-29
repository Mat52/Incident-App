import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { IncidentFormComponent } from './incident-form/incident-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'
import { MapComponent } from './map/map.component';
import { ContactUsComponent } from './contact-us/contact-us.component';



@NgModule({
    declarations: [
        AppComponent,
        IncidentFormComponent,
        MapComponent,
        ContactUsComponent
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        RouterModule,
        CommonModule,
        HttpClientModule,


    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }