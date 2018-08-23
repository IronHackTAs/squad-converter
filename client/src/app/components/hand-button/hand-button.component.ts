import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-hand-button",
  templateUrl: "./hand-button.component.html",
  styleUrls: ["./hand-button.component.css"]
})
export class HandButtonComponent implements OnInit {
  public lottieConfig: Object;
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

  constructor(public router: Router) {
    this.lottieConfig = {
      path: "../../../assets/handButton/pushButton.json",
      autoplay: false,
      loop: false
    };

    
  }

  onClick() {
    this.color = true;
  }

  onConfirm() {
    if (this.selectedValue != "") {
      this.play();
      setTimeout(() => {
        this.router.navigate(["/takeoff"]);
      }, 2700);
    }
  }

  ngOnInit() {
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

  highlightOption(select, option) {
    let optionList = select.querySelectorAll(".option");

    optionList.forEach(function(other) {
      other.classList.remove("highlight");
    });

    option.classList.add("highlight");
  }

  toggleOptList(select) {
    /* let optList = select.querySelector(".optList");
    optList.classList.toggle('hidden'); */
  }

  deactivateSelect(select) {
    if (!select.classList.contains("active")) return;

    let optList = select.querySelector(".optList");

    optList.classList.add("hidden");
    select.classList.remove("active");
  }

  activeSelect(select) {
    if (select.classList.contains("active")) return;

    select.classList.add("active");
  }

  prueba(i) {
    let value = document.querySelector(".value");
    value.innerHTML = i;
    this.color = true;
    this.selectedValue = i;
  }
}
