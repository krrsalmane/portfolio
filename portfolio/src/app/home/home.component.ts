import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    const options = {
      strings: ['Full Stack Developer', 'Problem Solver', 'Web Enthusiast', 'Code Craftsman'],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1000,
      loop: true
    };
    new Typed('#typed-text', options);
  }
}