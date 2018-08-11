import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-boarding",
  templateUrl: "./boarding.component.html",
  styleUrls: ["./boarding.component.css"]
})
export class BoardingComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor(public router:Router) {
    this.lottieConfig = {
      path: "../../../assets/boarding/boarding.json",
      autoplay: true,
      loop: true
    };
    setTimeout(()=> {
        this.router.navigate(['/handButton'])
    },2000);
  }

  ngOnInit() {}

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
