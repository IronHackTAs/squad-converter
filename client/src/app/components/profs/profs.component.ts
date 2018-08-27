import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-profs',
  templateUrl: './profs.component.html',
  styleUrls: ['./profs.component.css']
})
export class ProfsComponent implements OnInit {

  public lottieConfig: Object;
  private anim: any;
  private animationSpeed: number = 1;
  public url: string = 'http://localhost:3000/courseEditions';
  public datas = {};

  constructor(public http: HttpClient, public route: ActivatedRoute, public data: DataService) {
      this.lottieConfig = {
          path: '../../../assets/profs/profs.json',
          autoplay: true,
          loop: true
      };
  }

  ngOnInit(){
    this.datas = this.data.getData();
    return this.http.get(this.url).subscribe(data=>console.log(data));
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
