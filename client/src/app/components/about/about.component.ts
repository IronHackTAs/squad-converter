import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  public ux:Array<any> = [
    {name:'Santiago Becerra',img:'../../../assets/img/santiago.png',url:''},
    {name:'Jose Gómez',img:'../../../assets/img/jose.png',url:''},
    {name:'Alba Balbás',img:'../../../assets/img/alba.png',url:''},
    {name:'Esther Correa',img:'../../../assets/img/esther.png',url:''},
    {name:'Luis Rollón',img:'../../../assets/img/luis.png',url:''},
  ]

  public web:Array<any> = [
    {name:'Victor Rodríguez',img:'../../../assets/img/victor.png',url:''},
    {name:'Giorgio Grassini',img:'../../../assets/img/giorgio.png',url:''},
    {name:'Diego Méndez',img:'../../../assets/img/diego.png',url:''},
    {name:'Juan Sánchez',img:'../../../assets/img/juan.png',url:''},
    {name:'Gabriel Cebrián',img:'../../../assets/img/gabriel.png',url:''},
  ]

  constructor() { }

  ngOnInit() {

  }

}