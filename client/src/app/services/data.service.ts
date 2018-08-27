import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data = {};

  constructor() { }

  addName(name, surname){
    this.data = {
      name,
      surname
    }
  }

  addCity(city){
    Object.assign(this.data, {city})
  }

  addDate(date){
    Object.assign(this.data, {date})
  }

  addCourse(course){
    Object.assign(this.data, {course})
  }

  getData(){
    return this.data;
  }

}