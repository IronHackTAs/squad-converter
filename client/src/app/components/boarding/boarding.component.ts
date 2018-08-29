import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-boarding",
  templateUrl: "./boarding.component.html",
  styleUrls: ["./boarding.component.css"]
})
export class BoardingComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  public campus:Array<object> = [
    { name: "Madrid" },
    { name: "Barcelona" },
    { name: "Miami" },
    { name: "Amsterdam" },
    { name: "Paris" }
  ];
  public selectedValue:string = "";
  public color:boolean = false;
  public submit = true;

  constructor(public router: Router, public route: ActivatedRoute, public data: DataService) {
    this.lottieConfig = {
      path: "../../../assets/boarding/boarding.json",
      autoplay: false,
      loop: false
    };
  }

  ngOnInit() {}

  onClick() {
    this.color = true;
  }

  onConfirm() {
    if (this.selectedValue != "") {
      this.submit = false;
      this.play();
      setTimeout(() => {
        this.router.navigate(["/handButton"]);
      }, 4700);
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

  toggleOptList(select) {
    let optList = select.querySelector(".optList");
    optList.classList.toggle("hidden");
  }

  prueba(course) {
    let value = document.querySelector(".value");
    value.innerHTML = course;
    this.color = true;
    this.selectedValue = course;
    this.data.addCity(this.selectedValue);
  }
}
