import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { LinkedinService } from '../../services/linkedin.service';
import { environment } from '../../../environments/environment';
@Component({
  selector: 'app-profs',
  templateUrl: './profs.component.html',
  styleUrls: ['./profs.component.css']
})
export class ProfsComponent implements OnInit {
  public lottieConfig: Object;
  private anim: any;
  private animationSpeed = 5;
  public dbUrl: string = environment.DB;
  public color = true;
  public isShareClicked = false;
  public isProfileClicked = false;
  public isModalShow = false;
  public datas = {
    name: '',
    surname: '',
    city: '',
    date: '',
    course: '',
    token: '',
    personId: '',
    email: ''
  };
  public percentage = 0;
  public squad: any = '';
  public course = '';
  public p: string;
  public rocket = '78';
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
  public webText = `if you are an ironhacker go to this link and find out your squad number`;
  public memberMissing: number;
  public isPost: boolean;
  public cohort: Object;
  public totStudent: number;
  public completedStudent: number;

  constructor(
    public http: HttpClient,
    public route: ActivatedRoute,
    public data: DataService,
    public linkedIn: LinkedinService
  ) {
    this.lottieConfig = {
      path: '../../../assets/animations/profs/profs.json',
      autoplay: true,
      loop: true
    };
  }

  ngOnInit() {
    this.datas = this.data.getData();
    this.squad = this.datas['squadNumber'];
    this.data.getCohort(this.squad).subscribe(res => {
      this.totStudent = res['totalStudents'];
      this.completedStudent = res['completedStudents'];
      this.memberMissing = res['totalStudents'] - res['completedStudents'];
      this.printRocket();
    });

    this.course = this.getCourseCode(this.datas.course);
    return this.http
      .get(`${environment.BASE_URL}/api/database`)
      .subscribe(data => {
        Object.values(data).forEach(e => {
          const course = this.getCourseCode(this.datas.course);
          const year = new Date(e['start_at']).getFullYear().toString();
          if (
            e['campus'].name === this.datas.city &&
            course === e['course'].course_code &&
            this.datas.date.includes(
              this.monthNames[new Date(e['start_at']).getMonth()]
            ) &&
            this.datas.date.includes(year)
          ) {
            const squadName = e['squap_name'];
            this.squad = parseInt(squadName.replace(/[^0-9]/g, ''), 0);
          }
        });
      });
  }

  printRocket() {
    this.percentage =
      Math.floor(((this.completedStudent * 100) / this.totStudent) * 10) / 10;
    this.p = (2.04 * this.percentage).toString();
    this.rocket = (2.04 * this.percentage + 7).toString();
  }

  linkedinPost(isComment) {
    this.data.postStudent(this.datas).subscribe(() => {
      if (!this.isShareClicked) {
        this.memberMissing--;
        this.completedStudent++;
        this.printRocket();
        this.isModalShow = true;
        const data = {
          isComment,
          token: this.datas.token,
          personId: this.datas.personId,
          header: this.course.includes('web')
            ? `${this.squad} Ironhack ${this.datas.city}`
            : `Ironhack ${this.datas.city} - ${this.squad}`,
          url: environment.BASE_URL,
          text: this.webText,
          image: this.course.includes('web')
            ? `${environment.BASE_URL}/assets/img/WEBDEV_BADGE.png`
            : `${environment.BASE_URL}/assets/img/UX_BADGE.png`
        };
        this.linkedIn.sharePost(data).subscribe();
        this.isShareClicked = true;
      }
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

  getCourseCode(course) {
    if (course.includes('Full-Time') && course.includes('Web Development')) {
      return 'webft';
    } else if (course.includes('Web Development')) {
      return 'webpt';
    } else if (course.includes('Full-Time') && course.includes('UX/UI')) {
      return 'uxft';
    } else if (course.includes('UX/UI')) {
      return 'uxpt';
    } else if (
      course.includes('Full-Time') &&
      course.includes('Data Analytics')
    ) {
      return 'dataft';
    } else if (course.includes('Data Analytics')) {
      return 'datapt';
    }
  }

  toogleIsModalShow() {
    this.isModalShow = !this.isModalShow;
  }
}
