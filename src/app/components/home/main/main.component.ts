import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  background: string = 'assets/img/hero/h1_hero.jpg';
  fadeInLeft: string = 'fadeInLeft';
  delay4:string = '.4s';
  delay6:string = '.6s';
  delay8:string = '.8s';

  constructor() {}

  ngOnInit(): void {}
}
