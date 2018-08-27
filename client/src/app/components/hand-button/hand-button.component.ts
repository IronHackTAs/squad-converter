import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-hand-button",
  templateUrl: "./hand-button.component.html",
  styleUrls: ["./hand-button.component.css"]
})
export class HandButtonComponent implements OnInit {
  public lottieConfig: Object;
  public lottieConfig2: Object;
  public displayAnimation: string = "none";
  public displayAnimation2: string = "block";
  private anim: any;
  private animationSpeed: number = 1;
  public campus = [
    { name: "Web Development Full-time" },
    { name: "Web Development Part-time" },
    { name: "UX/UI Full-time" },
    { name: "UX/UI Part-time" }
  ];
  public selectedValue = "";
  public color = false;

  constructor(public router: Router, public data:DataService) {
    this.lottieConfig = {
      path: "../../../assets/handButton/button.json",
      autoplay: true,
      loop: true
    };
    this.lottieConfig2 = {
      path: "../../../assets/handButton/pushButton.json",
      autoplay: false,
      loop: false
    };
  }

  onClick() {
    this.color = true;
  }

  onConfirm() {
    this.displayAnimation = "block";
    this.displayAnimation2 = "none";
    if (this.selectedValue != "") {
      this.play();
      setTimeout(() => {
        this.router.navigate(["/takeoff"]);
      }, 2700);
    }
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

  toggleOptList(select) {
    let optList = select.querySelector(".optList");
    optList.classList.toggle("hidden");
  }

  prueba(course) {
    let value = document.querySelector(".value");
    value.innerHTML = course;
    this.color = true;
    this.selectedValue = course;
    this.data.addCourse(this.selectedValue);
  }
}
