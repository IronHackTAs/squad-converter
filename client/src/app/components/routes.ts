import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandButtonComponent } from './hand-button/hand-button.component';
import { SpaceshipComponent } from './spaceship/spaceship.component';



export const routes: Routes = [
        { path: 'handButton', component: HandButtonComponent},
        { path: 'spaceship', component: SpaceshipComponent}
      ];


