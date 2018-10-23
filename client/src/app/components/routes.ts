import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HandButtonComponent } from "./hand-button/hand-button.component";
import { SpaceshipComponent } from "./spaceship/spaceship.component";
import { BoardingComponent } from "./boarding/boarding.component";
import { TakeoffComponent } from "./takeoff/takeoff.component";
import { JeepComponent } from "./jeep/jeep.component";
import { ProfsComponent } from "./profs/profs.component";
import { SplashComponent } from "./splash/splash.component";
import { AboutComponent } from "./about/about.component";
import { CrashComponent } from "./crash/crash.component";

export const routes: Routes = [
  { path: '', redirectTo: "splash", pathMatch: "prefix" },
  { path: "handButton", component: HandButtonComponent },
  { path: "spaceship", component: SpaceshipComponent },
  { path: "boarding", component: BoardingComponent },
  { path: "takeoff", component: TakeoffComponent },
  { path: "jeep", component: JeepComponent },
  { path: "profs", component: ProfsComponent },
  { path: "splash", component: SplashComponent },
  { path: "about", component: AboutComponent },
  { path: "crash", component: CrashComponent },
  { path: "**", redirectTo: "splash" },
];