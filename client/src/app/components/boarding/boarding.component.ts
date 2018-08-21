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
  public campus = [
    { name: "Madrid" },
    { name: "Barcelona" },
    { name: "Miami" },
    { name: "Amsterdam" },
    { name: "Paris" }
  ];
  public selectedValue = "";

  constructor(public router: Router) {
    this.lottieConfig = {
      path: "../../../assets/boarding/boarding.json",
      autoplay: false,
      loop: false
    };
  }

  ngOnInit() {}

  onConfirm() {
    if (this.selectedValue != "") {
      this.play();
      setTimeout(() => {
        this.router.navigate(["/handButton"]);
      }, 2700);
    }
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
