import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data = {
    name: '',
    surname: '',
    city: '',
    date: '',
    course: '',
    token: '',
    personId: '',
    email: '',
    squadNumber: ''
  };

  constructor(public http: HttpClient) {}

  addToken(token) {
    Object.assign(this.data, { token });
  }

  addName(name, surname) {
    Object.assign(this.data, { name, surname });
  }

  addCity(city) {
    Object.assign(this.data, { city });
  }

  addDate(date) {
    Object.assign(this.data, { date });
  }

  addCourse(course) {
    Object.assign(this.data, { course });
  }

  getData() {
    return this.data;
  }

  addNameLinkedin(user) {
    Object.assign(this.data, {
      name: user.firstName,
      surname: user.lastName,
      personId: user.id,
      email: user.emailAddress,
    });
  }

  checkUser(email) {
    return this.http
      .get(`${environment.BASE_URL}/api/database/student/${email}`)
      .map(res => {
        this.data.squadNumber = res['squad'];
        return res;
      });
  }

  getCampus() {
    return this.http
      .get(`${environment.BASE_URL}/api/database/campus`)
      .map(res => res);
  }

  getCourses() {
    return this.http
      .get(`${environment.BASE_URL}/api/database/course`)
      .map(res => res);
  }

  getCohorts() {
    return this.http
      .get(`${environment.BASE_URL}/api/database/cohorts`)
      .map(res => res);
  }

  postStudent(data) {
    return this.http
      .post(`${environment.BASE_URL}/api/database/checked-by-student`, data)
      .map(res => res);
  }
}
