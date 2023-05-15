import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { Taw10Component } from './pages/taw1.0/taw1.0.component';
import { BootcampsComponent } from './pages/bootcamps/bootcamps.component';
import { IncubationComponent } from './pages/incubation/incubation.component';
import { StartupsComponent } from './pages/startups/startups.component';
import { DemoComponent } from './pages/demo/demo.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'about-us',
    component:AboutusComponent
  },
  {
    path:'Presentation',
    component:Taw10Component
  },
  {
    path:'bootcamps',
    component:BootcampsComponent
  },
  {
    path:'incubation',
    component:IncubationComponent
  },
  {
    path:'startups-and-founders',
    component:StartupsComponent
  },
  {
    path:'Demo-day',
    component:DemoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
