import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import Swiper from 'swiper';
import { A11y, Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-welcome1',
  templateUrl: './welcome1.page.html',
  styleUrls: ['./welcome1.page.scss'],
})
export class Welcome1Page implements OnInit {

  doNotShowAgain = true;



  public config: SwiperOptions = {
    modules: [Navigation, Pagination, A11y, Mousewheel],
    autoHeight: true,
    spaceBetween: 20,
    navigation: false,
    pagination: {clickable: true, dynamicBullets: true},
    slidesPerView: 1,
    centeredSlides: true,
    breakpoints: {
      400: {
        slidesPerView: "auto",
        centeredSlides: false
      },
    }
  }
  constructor(
    private router:Router
  ) { 

    

   }

  ngOnInit() {
  }

  ionViewWillEnter(){
    // const swiper = new Swiper('.swiper', {
    //   // Optional parameters
    //   direction: 'vertical',
    //   loop: true,
    
    //   // If we need pagination
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    
    //   // Navigation arrows
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    
    //   // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
    // });
  }

  startApp(){
    this.router.navigate(['home'])
  }

}
