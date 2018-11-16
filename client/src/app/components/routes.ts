import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HandButtonComponent } from './hand-button/hand-button.component';
import { SpaceshipComponent } from './spaceship/spaceship.component';
import { BoardingComponent } from './boarding/boarding.component';
import { TakeoffComponent } from './takeoff/takeoff.component';
import { JeepComponent } from './jeep/jeep.component';
import { ProfsComponent } from './profs/profs.component';
import { SplashComponent } from './splash/splash.component';
import { AboutComponent } from './about/about.component';
import { CrashComponent } from './crash/crash.component';
import { IsLoggedGuardService } from '../services/routesGuard.service';

export const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'handButton', component: HandButtonComponent, canActivate: [IsLoggedGuardService]},
  { path: 'spaceship', component: SpaceshipComponent, canActivate: [IsLoggedGuardService] },
  { path: 'boarding', component: BoardingComponent, canActivate: [IsLoggedGuardService] },
  { path: 'takeoff', component: TakeoffComponent, canActivate: [IsLoggedGuardService] },
  { path: 'jeep', component: JeepComponent },
  { path: 'profs', component: ProfsComponent , canActivate: [IsLoggedGuardService]},
  { path: 'splash', component: SplashComponent },
  { path: 'about', component: AboutComponent, canActivate: [IsLoggedGuardService] },
  { path: 'crash', component: CrashComponent, canActivate: [IsLoggedGuardService] },
  { path: '**', redirectTo: 'splash' },
];
