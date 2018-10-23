import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-splash",
  templateUrl: "./splash.component.html",
  styleUrls: ["./splash.component.css"]
})
export class SplashComponent implements OnInit {
  public checkboxValue: boolean;

  constructor(public route: Router) {}

  ngOnInit() {}

  onClick() {
    if (this.checkboxValue) {
      this.route.navigate(["/jeep"]);
    }
  }

  togle() {}
}
