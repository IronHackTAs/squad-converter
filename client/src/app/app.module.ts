import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LottieAnimationViewModule } from 'lottie-angular2';


import { AppComponent } from './app.component';
import { HandButtonComponent } from './components/hand-button/hand-button.component';
import { RouterModule } from '../../node_modules/@angular/router';
import {routes} from './components/routes';

@NgModule({
  declarations: [
    AppComponent,
    HandButtonComponent,
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
