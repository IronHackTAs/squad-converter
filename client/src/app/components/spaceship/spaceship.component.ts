import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-spaceship',
  templateUrl: './spaceship.component.html',
  styleUrls: ['./spaceship.component.css']
})
export class SpaceshipComponent implements OnInit {

  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  public campus = [
    { name: "2018 - June" },
    { name: "2018 - July" },
    { name: "2018 - August" },
    { name: "2018 - September"}
  ];
  public selectedValue = "";
  public color = false;

  constructor(public router:Router) {
      this.lottieConfig = {
          path: '../../../assets/spaceship/spaceship.json',
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
        this.router.navigate(["/profs"]);
      }, 2000);
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
