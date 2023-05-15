import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { Taw10Component } from './pages/taw1.0/taw1.0.component';
import { BootcampsComponent } from './pages/bootcamps/bootcamps.component';
import { IncubationComponent } from './pages/incubation/incubation.component';
import { StartupsComponent } from './pages/startups/startups.component';
import { DemoComponent } from './pages/demo/demo.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgImageSliderModule } from 'ng-image-slider';


@NgModule({
  declarations: [
    HomeComponent,
    AboutusComponent,
    Taw10Component,
    BootcampsComponent,
    IncubationComponent,
    StartupsComponent,
    DemoComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    PublicRoutingModule,
    MatButtonToggleModule,
    NgImageSliderModule


  ]
})
export class PublicModule { }
