import { Component, OnInit, Output, Input } from "@angular/core";
import { Router, Data } from "@angular/router";
import { DataService } from "../../services/data.service";


@Component({
  selector: "app-jeep",
  templateUrl: "./jeep.component.html",
  styleUrls: ["./jeep.component.css"]
})
export class JeepComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  public name:string = "";
  public surname:string = "";
  public color:boolean = false;

  constructor(public route:Router, public data: DataService) {
    this.lottieConfig = {
      path: "../../../assets/jeep/jeep.json",
      autoplay: false,
      loop: false
    };
  }

  ngOnInit() {}

  onNameChange(name: string) {
    this.name = name;
    this.name !== '' && this.surname !== '' ? this.color = true : this.color = false;
  }

  onSurnameChange(surname: string) {
    this.surname = surname;
    this.name !== '' && this.surname !== '' ? this.color = true : this.color = false;
  }

  onConfirm() {
    this.data.addName(this.name,this.surname);
      this.play();
      setTimeout (()=>{
          this.route.navigate(['/boarding'])
      },3000)
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
