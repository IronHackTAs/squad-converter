import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LottieAnimationViewModule } from 'lottie-angular2';


import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LottieAnimationViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
