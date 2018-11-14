import { Component, OnInit, Output, Input } from '@angular/core';
import { Router, Data, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { LinkedinService } from '../../services/linkedin.service';
import * as _ from 'lodash';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-jeep',
  templateUrl: './jeep.component.html',
  styleUrls: ['./jeep.component.css']
})
export class JeepComponent implements OnInit {
  public lottieConfig: Object;
  public anim: any;
  public animationSpeed = 1;
  public name = '';
  public surname = '';
  public color = false;
  public submit = false;
  public user: object = {};
  public empty = false;
  public error = false;
  public userExists = false;

  constructor(
    public route: Router,
    public data: DataService,
    public activatedRoute: ActivatedRoute,
    public linkedin: LinkedinService
  ) {
    this.lottieConfig = {
      path: '../../../assets/animations/jeep/jeep.json',
      autoplay: false,
      loop: false
    };
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      if (!_.isEmpty(params)) {
        this.linkedin.getToken(params).subscribe(
          user => {
            this.empty = true;
            this.user = user['$in'];
            if (this.user) {
              this.submit = true;
              this.color = true;
              this.data.addNameLinkedin(user['$in']);
              this.data.addToken(user['token']);
              this.play();
              this.data.checkUser(this.user['emailAddress']).subscribe(data => this.userExists = data['exists']);
              this.userExists
              ? setTimeout(() => {this.route.navigate(['/boarding']); }, 3000)
              : setTimeout(() => {this.route.navigate(['/boarding']); }, 3000);
            }
          },
          err => err ? this.Login() : ''
        );
      }
    });
  }

  Login() {
    this.linkedin
      .getCode()
      .subscribe(
        data => (window.location.href = data.toString()),
        error => (error ? (this.error = true) : (this.error = false))
      );
  }

  scroll(el) {
    if (this.name !== '' && this.surname !== '') { el.scrollIntoView(); }
  }

  onConfirm() {
    this.route.navigate(['/boarding']);
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
