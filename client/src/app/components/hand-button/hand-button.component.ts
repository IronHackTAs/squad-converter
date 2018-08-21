import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hand-button',
  templateUrl: './hand-button.component.html',
  styleUrls: ['./hand-button.component.css']
})
export class HandButtonComponent implements OnInit {

  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  public campus = [
    { name: "WEB" },
    { name: "UX/UI" }
  ];
  public selectedValue = "";
  public color = false;

  constructor(public router:Router) {
      this.lottieConfig = {
          path: '../../../assets/handButton/pushButton.json',
          autoplay: false,
          loop: false
      };
  }

  onClick(){
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

  ngOnInit(){

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
