import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "../../services/data.service";
import { LinkedinService } from "../../services/linkedin.service";
import { environment }  from "../../../environments/environment"
@Component({
  selector: "app-profs",
  templateUrl: "./profs.component.html",
  styleUrls: ["./profs.component.css"]
})
export class ProfsComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 5;
  public url: string = environment.DB;
  public color = true;
  public isShareClicked: boolean = false;

  public datas = {
    name: "",
    surname: "",
    city: "",
    date: "",
    course: "",
    token: ""
  };
  public percentage: number = 0;
  public squad: number = 0;
  public course: string = "";
  public p: string;
  public rocket: string = "78";
  public monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  public webText = `Ironhack is a Global Tech School offering intensive & immersive in-person courses in Web Development, UX/UI Design & Data Analytics.`;
  public webLink = `https://www.ironhack.com/en/courses/web-development-bootcamp`;
  public uxLink = `https://www.ironhack.com/en/courses/ux-ui-design-bootcamp-learn-ux-design`;

  constructor(
    public http: HttpClient,
    public route: ActivatedRoute,
    public data: DataService,
    public linkedIn: LinkedinService
  ) {
    this.lottieConfig = {
      path: "../../../assets/animations/profs/profs.json",
      autoplay: true,
      loop: true
    };
    this.p = (2.04 * this.percentage).toString();
    this.rocket = (2.04 * this.percentage + 7).toString();
  }

  ngOnInit() {
    this.datas = this.data.getData();
    this.course = this.getCourseCode(this.datas.course);
    return this.http.get(this.url).subscribe(data => {
      Object.values(data).forEach(e => {
        let course = this.getCourseCode(this.datas.course);
        let year = new Date(e["start_at"]).getFullYear().toString();
        if (
          e["campus"].name == this.datas.city &&
          course == e["course"].course_code &&
          this.datas.date.includes(
            this.monthNames[new Date(e["start_at"]).getMonth()]
          ) &&
          this.datas.date.includes(year)
        ) {
          let squadName = e["squap_name"];
          this.squad = parseInt(squadName.replace(/[^0-9]/g, ""));
        }
      });
    });
  }

  linkedinPost() {
    if (!this.isShareClicked) {
      const data = {
        token: this.datas.token,
        header: this.course.includes("web")
          ? `Ironhack ${this.datas.city} - Developer Squad ${this.squad}`
          : `Ironhack ${this.datas.city} - Designer Squad ${this.squad}`,
        url: this.course.includes("web") ? this.webLink : this.uxLink,
        text: this.webText
      };
      this.linkedIn.sharePost(data).subscribe(data => console.log(data));
      this.isShareClicked = true;
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

  getCourseCode(course) {
    if (course.includes("Full-Time") && course.includes("Web Development")) {
      return "webft";
    } else if (course.includes("Web Development")) {
      return "webpt";
    } else if (course.includes("Full-Time") && course.includes("UX/UI")) {
      return "uxft";
    } else if (course.includes("UX/UI")) {
      return "uxpt";
    } else if (
      course.includes("Full-Time") &&
      course.includes("Data Analytics")
    ) {
      return "dataft";
    } else if (course.includes("Data Analytics")) {
      return "datapt";
    }
  }
}
