import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

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
    { name: "2017 - September" },
    { name: "2017 - October" },
    { name: "2017 - November" },
    { name: "2017 - December" },
    { name: "2018 - January" },
    { name: "2018 - February" },
    { name: "2018 - March" },
    { name: "2018 - April" },
    { name: "2018 - May" },
    { name: "2018 - June" },
    { name: "2018 - July" },
    { name: "2018 - August" },
    { name: "2018 - September"}
  ];
  public selectedValue = "";
  public color = false;
  public submit = true;

  constructor(public router:Router, public data:DataService) {
      this.lottieConfig = {
          path: '../../../assets/spaceship/spaceship.json',
          autoplay: false,
          loop: false
      };
  }

  scroll(el) {
    if(this.selectedValue !== '')el.scrollIntoView();
}

  onClick(){
    this.color = true;
  }

  onConfirm() {
    if (this.selectedValue != "") {
      this.submit = false;
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

  toggleOptList(select) {
    let optList = select.querySelector(".optList");
    optList.classList.toggle("hidden");
  }

  prueba(course) {
    let value = document.querySelector(".value");
    value.innerHTML = course;
    this.color = true;
    this.selectedValue = course;
    this.data.addDate(this.selectedValue);
  }
}
