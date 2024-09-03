import { CountUp } from 'countup.js';
import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent implements AfterViewInit {


  ngAfterViewInit() {
    this.startCountUp();
  }

  startCountUp() {
    const options = { duration: 8,  suffix: '+' };
    // Create instances of CountUp for each element
    const countUp1 = new CountUp('count1', 1200,options);
    const countUp2 = new CountUp('count2', 200,options);
    const countUp3 = new CountUp('count3', 50,options);

    // Check for errors and start the count animation
    if (!countUp1.error) {
      countUp1.start();
    } else {
      console.error(countUp1.error);
    }

    if (!countUp2.error) {
      countUp2.start();
    } else {
      console.error(countUp2.error);
    }

    if (!countUp3.error) {
      countUp3.start();
    } else {
      console.error(countUp3.error);
    }
  }
}
