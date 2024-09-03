import { Component, OnInit,OnDestroy } from '@angular/core';

import { Router } from '@angular/router';
import { Subscription, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit, OnDestroy{

  btc:any;
  subscription: Subscription | undefined;
  constructor(private route:Router){}
  ngOnInit(): void {
    // this.subscription = interval(3000).pipe(
    //   switchMap(() => this.user.getsymboldata())
    // ).subscribe(res => {
    //   this.btc = res;
    //   console.log(this.btc);
    // });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}