import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LottieAnimationViewModule } from 'lottie-angular2';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {routes} from './components/routes';
import { HandButtonComponent } from './components/hand-button/hand-button.component';
import { SpaceshipComponent } from './components/spaceship/spaceship.component';
import { BoardingComponent } from './components/boarding/boarding.component';
import { TakeoffComponent } from './components/takeoff/takeoff.component';
import { JeepComponent } from './components/jeep/jeep.component';

@NgModule({
  declarations: [
    AppComponent,
    HandButtonComponent,
    SpaceshipComponent,
    BoardingComponent,
    TakeoffComponent,
    JeepComponent,
  ],
  imports: [
    BrowserModule,
    LottieAnimationViewModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
