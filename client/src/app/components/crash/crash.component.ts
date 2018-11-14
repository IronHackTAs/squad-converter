import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-crash',
  templateUrl: './crash.component.html',
  styleUrls: ['./crash.component.css']
})
export class CrashComponent implements OnInit {
  public lottieConfig: Object;
  public anim: any;
  public animationSpeed = 1;
  public name = '';
  public surname = '';
  public color = false;
  public submit = true;
  public missingName = false;
  public missingSurname = false;
  public user: object = {};
  public empty = false;
  public userExists = false;
  public missingEmail = false;
  public email = '';

  constructor(
    public route: Router,
    public data: DataService,
    public activatedRoute: ActivatedRoute
  ) {
    this.lottieConfig = {
      path: '../../../assets/animations/crash/crash.json',
      autoplay: true,
      loop: false
    };
  }

  ngOnInit() {
    setTimeout(() => {
      this.setSpeed(3);
    }, 1);
  }

  onEmailChange(email: string) {
    this.email = email;
    this.email !== '' ? (this.color = true) : (this.color = false);
    if (this.email !== '') {
      this.missingEmail = false;
    }
  }

  onConfirm() {
    if (this.email !== '') {
      this.data.checkUser(this.email).subscribe(data => {
        this.userExists = data['exists'];
        this.userExists
          ? this.route.navigate(['/boarding'])
          : console.log('Not exist');
      });
    }
  }

  scroll(el) {
    if (this.name !== '' && this.surname !== '') {
      el.scrollIntoView();
    }
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
