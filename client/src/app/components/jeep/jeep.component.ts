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
  public anim: any;
  public animationSpeed: number = 1;
  public name: string = "";
  public surname: string = "";
  public color = false;
  public submit = false;
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
            this.submit = true;
            this.color = true;
            this.data.addNameLinkedin(user);
            this.play();
            setTimeout(()=>{
              this.pause();
            },2700)
            //ANCHOR Make the redirect automatic or not?
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

  onConfirm() {
    this.route.navigate(["/boarding"]);
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
