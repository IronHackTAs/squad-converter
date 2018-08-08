import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;

  constructor() {
      this.lottieConfig = {
          path: 'assets/profe.json',
          autoplay: true,
          loop: true
      };
  }

  ngOnInit(){
      setTimeout(() => {
          console.log('entra')
          this.pause();
      }, 1900);
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
