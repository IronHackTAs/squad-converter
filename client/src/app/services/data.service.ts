import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data = {
    name:"",
    surname:"",
    city:"",
    date:"",
    course:""
  };

  constructor() { }

  addName(name, surname){
    Object.assign(this.data, {name,surname})
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
