import { Injectable } from '@angular/core';

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
  };

  constructor() { }

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
    Object.assign(this.data, { name: user.firstName, surname: user.lastName, personId: user.id });
  }

}
