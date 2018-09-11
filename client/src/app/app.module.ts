import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LottieAnimationViewModule } from 'lottie-angular2';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {routes} from './components/routes';
import { HandButtonComponent } from './components/hand-button/hand-button.component';
import { SpaceshipComponent } from './components/spaceship/spaceship.component';
import { BoardingComponent } from './components/boarding/boarding.component';
import { TakeoffComponent } from './components/takeoff/takeoff.component';
import { JeepComponent } from './components/jeep/jeep.component';
import { ProfsComponent } from './components/profs/profs.component';
import { SplashComponent } from './components/splash/splash.component';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { LinkedInLoginProvider} from "angularx-social-login";
import { HttpModule } from '@angular/http';


let config = new AuthServiceConfig([
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider("LinkedIn-client-Id", false, 'en_US')
  }
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    HandButtonComponent,
    SpaceshipComponent,
    BoardingComponent,
    TakeoffComponent,
    JeepComponent,
    ProfsComponent,
    SplashComponent,
  ],
  imports: [
    BrowserModule,
    LottieAnimationViewModule.forRoot(),
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    HttpModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
