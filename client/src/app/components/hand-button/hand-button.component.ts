import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hand-button',
  templateUrl: './hand-button.component.html',
  styleUrls: ['./hand-button.component.css']
})
export class HandButtonComponent implements OnInit {
  public lottieConfig: Object;
  public lottieConfig2: Object;
  public displayAnimation = 'none';
  public displayAnimation2 = 'block';
  private anim: any;
  private animationSpeed = 1;
  public courses;
  public selectedValue = '';
  public color = false;

  constructor(public router: Router, public data: DataService) {
    this.lottieConfig = {
      path: '../../../assets/animations/handButton/button.json',
      autoplay: true,
      loop: true
    };
    this.lottieConfig2 = {
      path: '../../../assets/animations/handButton/pushButton.json',
      autoplay: false,
      loop: false
    };
  }

  scroll(el) {
    if (this.selectedValue !== '') {el.scrollIntoView(); }
}

  onClick() {
    this.color = true;
  }

  onConfirm() {
    this.displayAnimation = 'block';
    this.displayAnimation2 = 'none';
    if (this.selectedValue !== '') {
      this.play();
      setTimeout(() => {
        this.router.navigate(['/takeoff']);
      }, 2700);
    }
  }

  ngOnInit() {
    this.data.getCourses().subscribe(res => this.courses = res);
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
    const optList = select.querySelector('.optList');
    optList.classList.toggle('hidden');
  }

  setAttributeToList(course) {
    const value = document.querySelector('.value');
    value.innerHTML = course;
    this.color = true;
    this.selectedValue = course;
    this.data.addCourse(this.selectedValue);
  }
}
