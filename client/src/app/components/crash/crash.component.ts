import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crash',
  templateUrl: './crash.component.html',
  styleUrls: ['./crash.component.css']
})
export class CrashComponent implements OnInit {
  public lottieConfig: Object;
  public anim: any;
  public animationSpeed: number = 1;

  constructor() {
    this.lottieConfig = {
      path: "../../../assets/animations/crash/crash.json",
      autoplay: true,
      loop: false,
    };
   }

  ngOnInit() {
    setTimeout(()=>{
      this.setSpeed(3);
    },1)
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
