import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-takeoff",
  templateUrl: "./takeoff.component.html",
  styleUrls: ["./takeoff.component.css"]
})
export class TakeoffComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor(public router:Router) {
    this.lottieConfig = {
      path: "../../../assets/takeoff/takeoff.json",
      autoplay: true,
      loop: true
    };
  }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(["/spaceship"]);
    }, 4700);
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }
}
