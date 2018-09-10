import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClientModule } from "@angular/common/http";
import {environment} from '../../environments/environment';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import axios from 'axios'
import "rxjs/add/operator/map";
import "rxjs/add/operator/catch";

const httpOptions = {
  headers: new HttpHeaders({
    'Host': 'www.linkedin.com',
    "Access-Control-Allow-Origin": "*",
    'Content-Type':  'application/x-www-form-urlencoded',
    'Authorization': 'my-auth-token',
    'withCredentials':'true'
  })
};

@Injectable({
  providedIn: "root"
})
export class LinkedinService {

  constructor(public http: HttpClient) {}

  handleError(e) {
    console.log(e);
    return Observable.throw(e.json().message);
  }

  token(code) {
    const link = `${environment.linkedinLink}?grant_type=authorization_code&code=${code}&redirect_uri=http://localhost:4200/jeep&client_id=${environment.idClient}&client_secret=${environment.secretKey}`;
    return axios.post(link,httpOptions)
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
    // return this.http
    //   .post(link, httpOptions)
    //   .map(res => console.log(res))
    //   .pipe(catchError(this.handleError));
  }
}
