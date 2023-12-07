import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {register} from 'swiper/element/bundle';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router:Router) {
    register();
    this.router.navigate(['general','welcome1'])
  }
}
