import { Component, OnInit, Output, Input } from "@angular/core";
import { Router, Data, ActivatedRoute } from "@angular/router";
import { DataService } from "../../services/data.service";
import { LinkedinService } from "../../services/linkedin.service";
import { environment } from "../../../environments/environment";
import * as _ from "lodash";
import "rxjs/add/operator/toPromise";

@Component({
  selector: "app-jeep",
  templateUrl: "./jeep.component.html",
  styleUrls: ["./jeep.component.css"]
})
export class JeepComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
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
    public activatedRoute: ActivatedRoute,
    public linkedin: LinkedinService
  ) {
    this.lottieConfig = {
      path: "../../../assets/animations/jeep/jeep.json",
      autoplay: false,
      loop: false
    };
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (!_.isEmpty(params)) {
        this.linkedin.getToken(params).subscribe(user => {
          this.empty = true;
          this.user = user;
          if (this.user) {
            this.play();
            setTimeout(() => {
              this.route.navigate(["/boarding"]);
            }, 3000);
          }
        });
      }
    });
  }

  Login() {
    this.linkedin
      .getCode()
      .subscribe(data => (window.location.href = data.toString()));
  }

  scroll(el) {
    if (this.name !== "" && this.surname !== "") el.scrollIntoView();
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
    if (this.name !== "" && this.surname !== "") {
      this.submit = false;
      this.data.addName(this.name, this.surname);
      this.play();
      setTimeout(() => {
        this.route.navigate(["/boarding"]);
      }, 3000);
    } else if (this.name == "" && this.surname == "") {
      this.missingName = true;
      this.missingSurname = true;
    } else if (this.surname == "") {
      this.missingSurname = true;
    } else if (this.name == "") {
      this.missingName = true;
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
