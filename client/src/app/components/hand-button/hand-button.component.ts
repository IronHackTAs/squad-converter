import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hand-button',
  templateUrl: './hand-button.component.html',
  styleUrls: ['./hand-button.component.css']
})
export class HandButtonComponent implements OnInit {

  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor() {
      this.lottieConfig = {
          path: '../../../assets/handButton/pushButton.json',
          autoplay: false,
          loop: false
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
