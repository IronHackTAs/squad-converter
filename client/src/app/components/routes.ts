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
import { isLoggedGuardService } from '../services/routesGuard.service';

export const routes: Routes = [
  { path: '', redirectTo: 'splash', pathMatch: 'full' },
  { path: 'handButton', component: HandButtonComponent, canActivate:[isLoggedGuardService]},
  { path: 'spaceship', component: SpaceshipComponent, canActivate:[isLoggedGuardService] },
  { path: 'boarding', component: BoardingComponent, canActivate:[isLoggedGuardService] },
  { path: 'takeoff', component: TakeoffComponent, canActivate:[isLoggedGuardService] },
  { path: 'jeep', component: JeepComponent },
  { path: 'profs', component: ProfsComponent , canActivate:[isLoggedGuardService]},
  { path: 'splash', component: SplashComponent },
  { path: 'about', component: AboutComponent, canActivate:[isLoggedGuardService] },
  { path: 'crash', component: CrashComponent, canActivate:[isLoggedGuardService] },
  { path: '**', redirectTo: 'splash' },
];
