import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jeep',
  templateUrl: './jeep.component.html',
  styleUrls: ['./jeep.component.css']
})
export class JeepComponent implements OnInit {

  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor() {
      this.lottieConfig = {
          path: '../../../assets/jeep/jeep.json',
          autoplay: true,
          loop: true
      };
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
