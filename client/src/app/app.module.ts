import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LottieAnimationViewModule } from 'lottie-angular2';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {routes} from './components/routes';
import { HandButtonComponent } from './components/hand-button/hand-button.component';
import { SpaceshipComponent } from './components/spaceship/spaceship.component';

@NgModule({
  declarations: [
    AppComponent,
    HandButtonComponent,
    SpaceshipComponent,
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
