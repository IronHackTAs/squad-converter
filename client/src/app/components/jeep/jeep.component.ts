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
  public name = "";
  public surname = "";
  public next = false;
  public submit = false;
  public color = false;

  constructor(public route:Router, public data: DataService) {
    this.lottieConfig = {
      path: "../../../assets/jeep/jeep.json",
      autoplay: false,
      loop: false
    };
  }

  ngOnInit() {}

  onEnter(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
    this.submit = true;
    if(this.name != '' && this.surname != ''){
      this.next = true;
      this.color = true;
      this.data.addName(this.name,this.surname);
    }
  }

  onConfirm(){
    if(this.next != false){
      this.play();
      setTimeout (()=>{
          this.route.navigate(['/boarding'])
      },3000)
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
