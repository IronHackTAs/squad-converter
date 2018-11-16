import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import _ from 'lodash'

@Component({
  selector: 'app-spaceship',
  templateUrl: './spaceship.component.html',
  styleUrls: ['./spaceship.component.css']
})
export class SpaceshipComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed = 1;
  public cohorts: any;
  public selectedValue = '';
  public color = false;
  public submit = true;
  public monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  constructor(public router: Router, public data: DataService) {
    this.lottieConfig = {
      path: '../../../assets/animations/spaceship/spaceship.json',
      autoplay: false,
      loop: false
    };
  }

  scroll(el) {
    if (this.selectedValue !== '') {
      el.scrollIntoView();
    }
  }

  onClick() {
    this.color = true;
  }

  onConfirm() {
    if (this.selectedValue !== '') {
      this.submit = false;
      this.play();
      setTimeout(() => {
        this.router.navigate(['/profs']);
      }, 2000);
    }
  }

  ngOnInit() {
    this.data.getCohorts().subscribe((res: any) => {
      console.log(res)
      this.cohorts = 
      _.uniqBy(res
        , 'date')
        .sort((a: any, b: any) => +new Date(a.date) - +new Date(b.date))
        .map(e => ({ id: e.id, date: this.formatDate(e.date) }));
        
      });
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
    this.data.addDate(this.selectedValue);
  }

  formatDate(date) {
    return (
      date.slice(8, 10) +
      ' ' +
      this.monthNames[new Date(date).getMonth()] +
      ' ' +
      date.slice(0, 4)
    );
  }
}
