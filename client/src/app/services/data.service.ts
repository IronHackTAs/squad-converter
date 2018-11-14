import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
    personId: ''
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
      personId: user.id
    });
  }

  checkUser(email) {
    return this.http
      .get(`${environment.BASE_URL}/api/database/student/${email}`)
      .map(res => res);
  }

  getCampus() {
    return this.http
      .get(`${environment.BASE_URL}/api/database/campus`)
      .map(res => res);
  }

  getCourse() {
    return this.http
      .get(`${environment.BASE_URL}/api/database/course`)
      .map(res => res);
  }
}
