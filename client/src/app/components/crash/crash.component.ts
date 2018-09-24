import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { DataService } from "../../services/data.service";

@Component({
  selector: "app-crash",
  templateUrl: "./crash.component.html",
  styleUrls: ["./crash.component.css"]
})
export class CrashComponent implements OnInit {
  public lottieConfig: Object;
  public anim: any;
  public animationSpeed: number = 1;
  public name: string = "";
  public surname: string = "";
  public color = false;
  public submit = true;
  public missingName = false;
  public missingSurname = false;
  public user: object = {};
  public empty: boolean = false;

  constructor(
    public route: Router,
    public data: DataService,
    public activatedRoute: ActivatedRoute
  ) {
    this.lottieConfig = {
      path: "../../../assets/animations/crash/crash.json",
      autoplay: true,
      loop: false
    };
  }

  ngOnInit() {
    setTimeout(() => {
      this.setSpeed(3);
    }, 1);
  }

  onNameChange(name: string) {
    this.name = name;
    this.name !== "" && this.surname !== ""
      ? (this.color = true)
      : (this.color = false);
    if (this.name !== "") this.missingName = false;
  }

  onSurnameChange(surname: string) {
    this.surname = surname;
    this.name !== "" && this.surname !== ""
      ? (this.color = true)
      : (this.color = false);
    if (this.surname !== "") this.missingSurname = false;
  }

  onConfirm() {
    console.log('entra')
    if (this.name !== "" && this.surname !== "") {
      this.submit = false;
      this.data.addName(this.name, this.surname);
      this.play();
      this.route.navigate(["/boarding"]);
    } else if (this.name == "" && this.surname == "") {
      this.missingName = true;
      this.missingSurname = true;
    } else if (this.surname == "") {
      this.missingSurname = true;
    } else if (this.name == "") {
      this.missingName = true;
    }
  }
  
  scroll(el) {
    if (this.name !== "" && this.surname !== "") el.scrollIntoView();
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
